# Mybatis

### ORM对象关系映射

Object Relation Mapper

将数据库表映射为持久化类，作为应用程序和数据库之间的中间层

以面向对象的方式来操作持久化对象（数据库）

优点：隐藏了数据访问细节，数据库交互更简单

缺点：牺牲部分性能

### Mybatis

基于Java的持久层框架，内部封装了JDBC；支持通过xml和注解配置sql语句，执行 sql 并将结果映射为 java 对象

Mybatis不是ORM框架，只是ResultSet映射框架，所以称为半自动ORM框架，具体表现在：

- MyBatis不会将表映射到类，没有持久化类的概念
- ResultSet是select查询语句的返回值，Mybatis会将ResultSet的每一行映射为Java类（通过resultType或者resultMap指定）
- 可以直接编写SQL语句，但也支持动态SQL
- 没有对象关系映射：不会建立对象之间关系，需要开发者手动控制
- 支持延迟加载

Hibernate是全自动 ORM 映射工具：

- 查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取
- 封装了SQL语句，不需要手动编写SQL

### 项目代码结构

```
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── nikki
│   │   │           ├── MyBatisUtil.java // 读取配置文件、获取 sqlsession对象等连接相关的操作
│   │   │           ├── dao
│   │   │           │   └── UserDao.java // 对User表的数据库操作
│   │   │           └── model
│   │   │               └── User.java // User实体表的Java类映射
│   │   └── resources
│   │       ├── mapper
│   │       │   └── UserDao.xml // 也就是mapper文件，和UserDao名字必须相同，定义UserDao中对应操作的SQL语句
│   │       ├── jdbc.properties // 连接数据库参数，包括driver、url、username、password
│   │       └── mybatis-config.xml // mybatis 的主配置文件，所有的配置都在 configuration 标签里面
│   └── test
│       └── java
│           └── com
│               └── nikki
│                   └── UserTest.java
```



### mybatis-config.xml

1. 定义别名

   给全路径名起别名，一般name是实体类所在包的全路径，配置完成后在UserDao.xml中就可以直接用user代替com.xxl.model.User了，大小写不敏感

   ```
   <typeAliases>
       <package name="com.xxl.model"/>
   </typeAliases>
   ```

2. 配置数据源（连接的数据库）

   为了更好地管理连接，一般将连接参数放在jdbc.properties 文件中，在<configuration>下面（顺序重要！）使用如下配置：

   ```
   <properties resource="jdbc.properties"/>
   ```

   然后在datasource中使用`${jdbc.driver}`的形式调用配置的参数

3. 配置查找mapper文件的路径

   ```xml
    <mappers>
         <mapper resource="mapper/UserDao.xml"/>
     </mappers>
   ```

4. 配置事务

   使用 JDBC 的事务管理机制， MyBatis 默认将自动提交功能关闭了，所以在业务逻辑代码中要手动commit和rollback

   ```
   <transactionManager type="JDBC"></transactionManager>
   ```

   在MyBatisUtil中设置自动提交事务：

   ```Java
   SqlSession sqlSession = factory.openSession(True);
   ```

   

### Mapper

作用：Java的POJO对象和数据库中记录的转换

如果不用Mybatis，定义完xxxDao接口之后，还要定义一个它的实现类 DaoImpl（一般名称为xxxMapper类），需要开发者手动编写大量的SQL语句和映射代码来将数据库中的数据映射到Java对象上

Mybatis 框架可以根据接口定义自动生成实现类，返回一个代理对象。相当于将Dao和DaoImpl合并了，程序员只需要定义操作数据库的接口代码和具体的SQL代码，中间的对象和记录的转换由框架完成

有两种具体的实现方式：

1. `mapper.xml`：配置文件；在主配置文件`mybatis-config.xml`中使用`UserDao.xml`作为mapper生成来源

   ```
   <!-- 指定映射配置文件的位置-->
   <mappers>
       <mapper resource="mapper/UserDao.xml"/>
   </mappers>
   ```

2. 注解式开发

   去掉UserDao.xml文件，直接在主配置文件`mybatis-config.xml`中使用`com.xx.dao`作为mapper来源

   ```
   <!-- 指定映射配置文件的位置-->
   <mappers>
       <mapper resource="com.nikki.UserDao"/>
   </mappers>
   ```

   在`UserDao`接口文件中使用注解添加sql语句：`@Select("select * from user")`

   但是这种方式不支持动态SQL，复杂的查询还是应该使用xml配置的方式来实现




什么时候使用注解/XML配置文件：

- 静态的简单的SQL语句使用注解
- 其他的使用配置（动态的）

#### 输出结果

1. 简单类型：

   String —— `resultType="java.lang.String"`

2. 对象类型：

   User ——`resultType="user"`

3. Map类型

   ```
   @MapKey("id")
   Map<String,Object> getUser();
   
   <select id="getUser" resultType="java.util.Map">
       select * from user
   </select>
   ```

4. resultMap：使用 resultMap 自定义 sql 的结果和 java 对象属性的映射关系

   ```
   <resultMap id="userMap" type="com.xxl.model.User">
      <id column="s_id" property="id"/>
       <result column="s_name" property="name"/>
       <result column="s_age" property="age"/>
       <result column="s_sex" property="sex"/>
   </resultMap>
   
   <select id="getAll" resultMap="userMap">
       select s_id,s_name,s_age,s_sex from user
   </select>
   ```

5. 添加/修改处理 null 值

   添加修改时，要想使某个列的值为空，必须添加 jdbcType 属性

   比如：`#{name,jdbcType=VARCHAR}`

#### 传递参数

#{param} ：占位符方式

${param}：拼接sql语句的方式，有sql注入的风险

1. 一个参数：可以使用任意名字获取参数值
2. 多个参数：在接口参数位置用**@Param("userName")**指定mapper中使用的参数名
3. 传递JavaBean对象：直接通过属性名
4. 传递Map：通过key的名字



#### 动态SQL

动态 SQL 是 MyBatis 强大特性之一，主要用于解决`查询条件不确定`的情况，它可以极大的简化我们拼装 SQL 的操作。

作用：实现在 xml 映射文件内，以标签的形式编写动态 sql，完成逻辑判断和动态拼接 sql 的功能

##### where if:

and要放在每个<if>语句中字段的前面

```java
select * from employee
where 1=1
     <if test="id != null" and "id != ''">
        and id = #{id}
    </if>
    <if test="name != null and name != ''">
        and name like concat('%',#{name},'%')
    </if>
</where>

// 等价于
select * from employee
<where>
     <if test="id != null" and "id != ''">
        and id = #{id}
    </if>
    <if test="name != null and name != ''">
        and name like concat('%',#{name},'%')
    </if>
</where>
```

##### set

动态修改/更新

```java
<update id="update" parameterType="Employee">
    update employee
    <set>
        <if test="name != null">name = #{name},</if>
        <if test="username != null">username = #{username},</if>
        <if test="password != null">password = #{password},</if>
        <if test="phone != null">phone = #{phone},</if>
        <if test="sex != null">sex = #{sex},</if>
        <if test="idNumber != null">id_Number = #{idNumber},</if>
        <if test="updateTime != null">update_Time = #{updateTime},</if>
        <if test="updateUser != null">update_User = #{updateUser},</if>
        <if test="status != null">status = #{status},</if>
    </set>
    where id = #{id}
</update>
```

- trim
- choose when otherwise
- set
- foreach
- sql标签





### 关联关系

#### 一对一关系association

```xml
        <!--
            association: 用来处理一对一关系属性封装
            property : 关系属性名
            javaType: 关系属性的类型
         -->
        <association property="userInfo" javaType="com.xxl.model.UserInfo" >
            <id column="id" property="id" />
            <result column="number" property="number"/>
            <result column="address" property="address"/>
        </association>
```

#### 一对多关系collection

```xml
        <!--
            collection 用来处理集合类型的属性  ，用来处理一对多关系
            property:  关系属性名
            javaType:  关系属性类型
            ofType  :  集合中泛型类型：类的全路径名
         -->
        <collection property="employeeList" javaType="list" ofType="com.xxl.model.Employee">
            <id column="empId" property="id"/>
            <result  column="empName" property="name"/>
            <result column="age" property="age"/>
            <result column="sex" property="sex"/>
        </collection>
```



### PageHelper

依赖：

```
<!-- 分页插件 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.1.4</version>
</dependency>
```

在mybatis中配置插件：

```
<plugins>
    <plugin interceptor="com.github.pagehelper.PageInterceptor" />
</plugins>
```

使用：

```
      Page page = PageHelper.startPage(2, 3);
      List<User> userList = userDao.getUser();
      System.out.println("当前页："+page.getPageNum());
      System.out.println("每页条数："+page.getPageSize());
      System.out.println("总条数："+page.getTotal());
      System.out.println("总页数："+page.getPages());
```



### 参考文献

[MyBatis最全使用指南](https://juejin.cn/post/7051910683264286750#heading-10)
