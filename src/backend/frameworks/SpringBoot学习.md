---
title: SpringBoot
order: 4

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



# Spring Boot

修改pom.xml文件后需要刷新maven

查看依赖树形结构：`mvn dependency:tree`

![image-20240410163359218](/Users/nikki/Library/Application Support/typora-user-images/image-20240410163359218.png)

 

所有的springboot的依赖都是使用`spring-boot-starter`开头的

1. `spring-boot-starter-parent` 提供了默认配置，里面提供了 `dependency-management`模块用来管理，这样之后定义的依赖如果在这里面也有，没有提供版本号的情况默认使用`dependency-management`里面的版本号（目的就是简化配置，毕竟配版本号真的很麻烦，配过的都懂...）

2. web依赖：集成了tomcat、servlet、Spring MVC，实现HTTP接口

   ```java
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-web</artifactId>
   </dependency>
   ```


## 依赖注入基本知识



推荐注入方式是Setter注入（两种：构造函数注入or Setter注入）

推荐注入的字段是final类型

## 注解类型

### Bean

`@Bean`：用于注释方法，表示该方法返回的Bean会被放入spring容器中

所有应用组件（包括`@Component`、`@Service`、`@Repository`、`@Controller` 等）都会自动注册为Spring Bean

### SpringBootApplication

`@SpringBootApplication`：运行入口，包含了 `@ComponentScan`

- `@ComponentScan`：定义扫描的路径并从中找出标识了需要装配的类，将这些类装配到spring的bean容器中

### Aspect

`@Aspect`：把当前类标识为一个切面类供容器读取

### Controller

`@Controller`：处理客户端的web请求，可以返回数据和视图

目前使用的"前后端分离"模式中，一般后端不处理前端视图，所以常用的是`@RestController`

`@RestController`：`@Controller`和`@ResponseBody`的组合注解，表示处理后有返回结果

- `@ResponseBody`：指示方法返回值自动序列化后作为HTTP响应内容；通常与 RESTful Web 服务一起使用，用于返回 JSON 或 XML 格式的数据；不进行视图渲染

### RequestMapping

`@RequestMapping` ： 提供路由信息，将 HTTP 请求映射到具体Controller类/类中处理方法的注解

- 可以指定HTTP请求方法，指定这个方法只能处理特定请求

  `@RequestMapping(value = "/create", method = RequestMethod.POST)`

  一般不用，都使用更便捷的组合注解：

  - `@GetMapping` ：`@RequestMapping(method = RequestMethod.GET)`

  - `@PostMapping`：`@RequestMapping(method = RequestMethod.POST)`
  - `@PutMapping`：`@RequestMapping(method = RequestMethod.PUT)`

- 支持请求参数和头部参数匹配（啥意思？）

### @Autowired

如果一个Bean有多个构造函数，需要用 `@Autowired` 注解指定注入使用的构造函数

 `@Autowired`：在 Spring 中需要将一个 Bean 注入到另一个 Bean 中时

- `@Autowired` 注解是 Spring 框架提供的，它默认按类型进行自动注入，并且支持通过 `@Qualifier` 注解来指定要注入的 Bean 的名称。

- `@Resource` 注解是 Java EE 提供的，它默认按名称进行自动注入，也支持通过 `name` 或 `type` 属性来指定要注入的 Bean

  - ```java
    @Resource(name = "userDao")
    @Resource(type = UserDao.class)
    private UserDao userDao;
    ```

- `@Inject`：Java EE6提供，和 `@Autowired`类似

### @Configuration

`@Configuration` 注解通常用于定义配置类

- **定义第三方库的 Bean：** 当你使用第三方库提供的组件时，可能需要将其配置为 Spring 托管的 Bean。你可以创建一个配置类，在其中使用 `@Bean` 注解定义这些组件的 Bean

  ```java
  @Configuration
  public class LibraryConfig {
  
      @Bean
      public SomeLibraryBean someLibraryBean() {
          return new SomeLibraryBean();
      }
  
      // 其他配置方法
  }
  ```

- **条件化配置：** 

  ```java
  @Bean
  @Profile("dev")
  ```

- **导入其他配置类：** 你可以在一个配置类中导入其他的配置类，从而将多个配置组织在一起，形成一个整体的配置。

  ```java
  @Configuration
  @Import({DataSourceConfig.class, ServiceConfig.class})
  public class AppConfig {
      // 其他配置方法
  }
  ```

## Lombok库

`@Data`、`@Builder`、`@NoArgsConstructor` 和 `@AllArgsConstructor` 是 Lombok 库中提供的注解，用于简化 Java 类的编写。

1. `@Data` 注解：

   - `@Data` 注解是一个组合注解，它包含了 `@Getter`、`@Setter`、`@ToString`、`@EqualsAndHashCode` 和 `@RequiredArgsConstructor` 注解。
   - 使用 `@Data` 注解可以自动为类生成所有属性的 Getter 和 Setter 方法、`toString()` 方法、`equals()` 方法和 `hashCode()` 方法。

2. `@Builder` 注解：

   - `@Builder` 注解用于构建器模式，它可以自动生成一个构建器类，用于创建对象实例。

   - 使用 `@Builder` 注解后，Lombok 会为带有该注解的类生成一个静态内部类，该类包含了链式调用的构造器方法，用于创建对象

     ```java
     // 使用 Builder 构建对象;使用链式调用的方式设置了对象的属性值
     User user = User.builder()
                     .id(1L)
                     .username("john")
                     .email("john@example.com")
                     .build();
     ```

3. `@NoArgsConstructor` 注解：

   - `@NoArgsConstructor` 注解用于生成一个无参构造方法。
   - 使用 `@NoArgsConstructor` 注解后，Lombok 会为类生成一个无参构造方法，用于创建对象实例。

4. `@AllArgsConstructor` 注解：

   - `@AllArgsConstructor` 注解用于生成一个包含所有参数的构造方法。
   - 使用 `@AllArgsConstructor` 注解后，Lombok 会为类生成一个包含所有字段参数的构造方法，用于创建对象实例。

使用这些注解可以简化 Java 类的编写，减少样板代码，提高代码的可读性和可维护性。

## 在SpringBoot中使用Mybatis

定义一个`Mapper`接口，相当于`Dao`

### SQL语句书写有两种方式

#### 1. 注解

- `@Mapper`：直接在`Mapper`接口中用`@Mapper`注解的方式写在上面

- `@MapperScan`：在SpringBoot的启动类上面使用`@MapperScan`注解指明扫描的包路径：不能和`@Mapper`注解同时使用，否则`@Mapper`不起作用

如果使用注解，通常不需要额外的XML配置文件，但也可以两个都用，在接口文件中写比较简单的SQL语句，在.xml文件中写动态SQL

使用`@Mapper`的例子：

  ```java
  @Mapper
  public interface EmployeeMapper {
      @Select("select * from employee where username = #{username}")
      Employee getByUsername(String username);
    
    	List<Employee> getAll();
  }
  ```

#### 2.配置文件

1. 需要在`mapper.xml`文件中配置namespace，路径为Mapper接口的位置

```java
<mapper namespace="com.nikki.EmployeeMapper">
    <select id="getAll" resultType="Employee">
        select * from user
    </select>
</mapper>
```

2. 在SpringBoot的`application.yml`文件中配置上面的`mapper.xml`文件位置：

```shell
mybatis:
	# 指定上面的`mapper.xml`文件位置
  mapper-locations: classpath:mapper/*.xml
  # 指定Java实体类的包路径：Mapper操作的对应的entity类在项目中的位置
  # 这样在mapper.xml文件中就可以不用写包路径，只写类名了
  type-aliases-package: com.sky.entity // 
  configuration:
    # 开启驼峰命名，开启后，MyBatis会将数据库字段名中的下划线转换为Java实体类属性名中的驼峰命名规则。
    map-underscore-to-camel-case: true
```

## spring mvc的请求处理流程

Handler是@Controller和@RequestMapping注解的类

Handler Method是请求匹配的方法，是Handler里面@RequestMapping方法

