---
title: Spring
order: 3

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



# Spring

### Spring和Dagger的区别

- 功能：
  - Spring功能广泛：依赖注入DI、面向切面编程AOP、事务管理、数据访问
  - Dagger是为Android平台设计的，主要用于依赖注入
- 依赖注入实现：
  - Spring是运行时依赖注入框架：灵活、运行时开销
  - Dagger是编译时依赖注入框架：安全、不灵活



### 工厂模式和Spring框架中IOC的区别

IOC：控制反转（Inversion of control）是一种设计思想，一个对象的属性里面定义了某个接口的实现类，也就是这个对象依赖于实现了这个接口的某个对象（可能有A、B、C都实现了这个接口），具体使用哪个对象是由一个管理所有对象的外界实体（IOC容器）将依赖的对象传递给

IOC是一种原则，不是一种设计模型，工厂模式和依赖注入（DI：Dependency Injection）都是尊从IOC原则的具体实现/设计模式

工厂模式：一种创建型设计模式，将对象的创建过程封装到工厂类中，通过创建工厂类来统一管理对象的创建过程

- 简单工厂
- 工厂方法
- 抽象工厂

依赖注入：

- 依赖注入（DI）功能可以替代工厂模式，通过配置文件或注解来管理对象的创建和依赖关系
- Spring中的实现是基于工厂方法和Java的反射机制的
  - 反射：把Java中类映射成一个java对象（Class对象），是JVM自动创建的，是对类信息的管理，一个类只对应一个Class对象
- Spring中的IOC容器就是Map（Key：value）

### AOP是什么

将横切关注点从核心业务逻辑中分离出来，形成一个个的**切面（Aspect）**

- 比如日志功能、性能统计

AOP的实现方法：

- 动态代理：Spring AOP
- 字节码操作：AspectJ



