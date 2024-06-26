---
title: MySQL
order: 4

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



## 字段类型

变长字段有哪些？

> varchar、text、blob、json、varbinary

UNSIGNED属性：将正整数的存储上限提高一倍

char和varchar的区别：

- CHAR(M) 和 VARCHAR(M) 的 M ：代表能保存最大字符数
- char是定长的（存储时会填充空格以达到指定长度）：适合定长数据
- varchar是不定长的（用额外的字节记录字符串长度，实际存储的就是字符串，不填充）：适合不定长数据
  - 在内存中操作时会分配固定M大小的内存块来保存值

NULL和' '的区别：

- NULL是不确定的值，占用空间
  - 聚合函数一般忽略NULL，COUNT（*）会统计NULL
  - 查询 `NULL` 值时，必须使用 `IS NULL` 或 `IS NOT NULL` 来判断，不能使用比较运算符
- ' '是空，不占用空间
  - 可以使用比较运算符来比较

Boolean类型： 没有专门的布尔类型，使用TINYINT(1)， 可以存储0和1

## 基础架构

### 两层

- Server层：包括连接器、分析器、优化器、执行器
- 存储引擎层：插件式存储引擎ENGINES：InnoDB（5.5.5之后默认）、MyISAM、Memory
  - 存储引擎是基于表的而不是基于数据库的（每个表可以使用不同存储引擎）
  - MyISAM和InnoDB的区别 TODO


### 执行SQL语句的过程

- 连接器：
  - TCP连接
    - 短连接和长连接，使用内存管理连接对象
      - 怎么解决长连接占用内存的问题？定期断开长连接、客户端主动重置连接

  - 登录、读取权限

- 查询缓存：MySQL 8.0 版本后移除（更适合不经常更新的数据表的查询）
- 解析SQL：词法分析+语法分析
- 执行SQL：
  - 预处理：
    - 检查 SQL 查询语句中的表或者字段是否存在；
    - 将 `select *` 中的 `*` 符号，扩展为表上的所有列；

  - 优化器：选择执行方案，主要是选择使用哪个索引（使用explain命令可以查看）
    - 选择查询代价小的索引

  - 执行器：调用存储引擎索引查询/全表扫描的接口；都是找到一条满足的数据就返回给Server（是否使用索引下推只是返回前是否多进行条件判断的区别）

## 事务

定义：逻辑上的一组操作，要么都执行，要么都不执行

关系型数据库事务都有ACID特性

### 并发事务带来的问题

- 丢失修改：同时操作导致其中一个事务的修改结果丢失
  
- 脏读：读到未被持久化的脏数据（另一个事务处理中的数据）
- 不可重复读：一个事务多次读同一数据，结果不一致（另一个事务在delete/update，持续时间比读的这个事务短）
- 幻读：一个事务多次读同一范围内的数据，数据量增加（insert）


### 并发事务的控制方式

- 锁：悲观控制
  - 读写锁
    - 共享锁（S锁）：兼容
    - 排他锁（X锁）：独占
    
    只有共享锁和共享锁兼容
  - 锁的颗粒度（都包含上述两个读写锁）
    - 表级锁
    - 行级锁
- MVCC：多版本并发控制；乐观控制

  - 每个数据行维护多个版本，通过事务的可见性来保证事务能看到自己应该看到的版本
  - 快照读；写创建新版本数据
  - 版本回收
  - 具体实现：隐藏字段、ReadView、undolog


### 隔离级别

MySQL有四个隔离级别：

| 可以阻止的并发问题 | 丢失更新 | 脏读 | 不可重复读 | 幻读 |
| ------------------ | -------- | ---- | ---------- | ---- |
| Read Uncommitted   | ✔️        | ❌    | ❌          | ❌    |
| Read Committed     | ✔️        | ✔️    | ❌          | ❌    |
| Repeatable Read    | ✔️        | ✔️    | ✔️          | ❌    |
| Serializable       | ✔️        | ✔️    | ✔️          | ✔️    |

### InnoDB对隔离级别的实现

基于锁和MVCC共同实现

- Read Uncommitted：不允许同时写（写X锁），读数据不需要获取锁
- Read Committed：
  - 使用MVCC实现：**在「每个读取语句执行前」都会重新生成一个 Read View**
    - 通过ReadView解决了脏读问题
    - 会出现不可重复读问题：事务期间的多次读取同一条数据，前后两次读的数据可能会出现不一致，因为可能这期间另外一个事务修改了该记录，并提交了事务
    - 快照读和当前读的结果是一样的，都是最新的
  
- Repeatable Read：
  - 快照读（普通 select 语句）使用MVCC解决幻读：**「启动事务时」生成一个 Read View，然后整个事务期间都在用这个 Read View** 
    - 事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，即使中途有其他事务插入了一条数据，是查询不出来这条数据的，所以就很好了避免幻读问题。
  - 当前读（select ... for update 等语句）使用Next-Key Lock加锁解决幻读：
    - 其他事务无法在 next-key lock 锁范围内插入，会阻塞
  
- Serializable：锁

#### ReadView和隐藏字段

**通过「版本链」来控制并发事务访问同一个记录时的行为就叫 MVCC（多版本并发控制）**

ReadView四个重要的字段：

- creator_trx_id：创建这一条readview的事务的id
- m_ids：创建 Read View 时，当前数据库中「活跃事务」（**启动了但还没提交）的**事务 id 列表**
- min_trx_id：m_ids中最小值
- max_trx_id：下一个创建的事务的id值，全局事务中最大的事务 id 值 + 1

记录的两个隐藏字段：

- trx_id：上一个修改的事务的id
- roll_pointer：指向旧版本记录的指针；形成版本链

可见原则：

一个事务去访问记录的时候，除了自己更新的记录总是可见之外，它可见的记录满足如下条件，

`trx_id < min_trx_id` 或 `(min_trx_id <= trx_id <= max_trx_id) && trx_id not in m_ids ` 

不满足的记录对该事务都不可见，需要按照roll_pointer的版本链去找可见的版本记录
