---
title: Redis
order: 5

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



`cd /usr/local/redis-7.0.15/src` 

启动服务端：`redis-server`

启动客户端：`redis-cli`

测试连接情况：ping，pong


没有正常关闭的情况删除进程：

`ps aux|grep redis`



## 基础

C语言开发的NoSQL数据库；内存数据库而且支持持久化（读写速度快）

用于分布式缓存



### 数据类型

key是字符串

5种value：

- value 字符串
- hash：适合存储对象
- List：队列；插入顺序排序可重复；点赞数据
- set：好友
- zset：排行榜

### 常用命令

通用命令：对key进行操作

```java
KEYS pattern
EXISTS key
TYPE key // 返回存储的数据类型
DEL key
```

字符串：
```java
SET key value
GET key
SETEX key seconds value // 手机号，60s，短信验证码
SETNX key value // key不存在时设置
```

哈希表：里面的field和value都是字符串

```java
HSET key field value
HGET key field
HDEL key field
HKEYS key
HVALS key
```

列表（队列）：里面的values都是字符串；左头右尾

```java
LPUSH key value1 [value2]...
LRANGE key start stop
RPOP key
LLEN key // size
```

集合：String类型的无序集合

```java
SADD key member1 [member2]...
SREM key member1 [member2]...
SMEMBERS key // values()
SCARD key // size
SINTER key1 [key2] // 交集
SUNION key1 [key2] // 并集
```

有序集合：String类型的有序集合，每个元素有一个double类型的分数

```java
ZADD key score1 member1 [score2, member2]
ZRANGE key start stop [withscore展示分数]
ZINCREBY key increment member // 对member的分数加上increment
ZREM key member1 [member2]
```



### Redis事务

不满足原子性（不支持回滚）

满足持久性，支持3种持久化方法：

- 快照RDB
- 只追加文件AOF：比RDB实时性更好，主流方式
  - 将执行的写命令写到AOF文件末尾，记录数据变化（恢复：重启时再次执行AOF文件中的命令来恢复）
  - 三种策略：
    - always：每次数据修改同步AOF文件；可以满足持久性要求，但是性能太差，一般不用
    - everysec：每秒钟同步AOF文件
    - no：操作系统决定
- RDB和AOF的混合持久化

如何解决Redis事务的缺陷：支持Lua脚本，使用Lua脚本可以批量执行多条Redis命令

- Lua脚本执行过程中不会有其他脚本/Redis命令同时执行，保证不受干扰
- Lua脚本运行出错，后续命令不会执行，前绪执行结果不能回滚（也不满足原子性）



### 权限管理

[ACL权限管理功能](https://blog.csdn.net/cj_eryue/article/details/131401400)

redis-cli之后需要用auth username 密码 登陆，username默认是default

## 生产问题

### 缓存穿透

请求的key既不在缓存也不在数据库中，导致请求直接穿过缓存进行数据库查询，对数据库造成压力

解决方法：

- 缓存无效的key
- 布隆过滤器
- 对异常IP限流

### 缓存击穿

请求的key是热点数据，但是不在缓存中（缓存中数据已过期），导致请求直接穿过缓存进行数据库查询，对数据库造成压力

场景：秒杀

解决方法：

- 设置增加热点数据过期时间
- 提前预热（提前放入缓存并设置合理过期时间）
- 互斥锁？

### 缓存雪崩

大量缓存数据同时过期，刚好有大量请求访问过期数据

导致缓存雪崩的问题和对应解决方法：

**Redis服务不可用：**

1. 采用Redis集群
2. 限流，避免同时处理大量请求
3. 多级缓存

**热点缓存失效**：

1. 设置不同失效时间（比如随机设置）
2. 缓存预热
   1. 定时任务：定时将数据库中热点数据查询出来放入缓存；xxl-job
   2. 消息队列：异步进行缓存预热；Kafka







