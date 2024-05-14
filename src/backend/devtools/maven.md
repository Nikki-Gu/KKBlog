### Maven的作用

1. 提供标准的、跨平台的自动化项目构建方式
2. 方便依赖管理，避免版本冲突
3. 提供统一项目开发结构，方便上手

POM：project object model项目对象模型



### Maven坐标

用于唯一标识一个项目依赖/第三方库/构件

基本坐标：

- groupId：逆向域名；项目的组织
- artifactId：项目模块
- version：版本，三位数字

可选坐标：

- type=packaging：依赖的类型

- scope：依赖的作用域，默认值是 compile

  编译、测试、运行时的依赖包不完全相同，有的只在一个环节使用，比如JUnit，所以可以设置依赖作用域来控制依赖什么时候被引入

- optional

- exclusions：用于排除传递性依赖



#### 依赖冲突处理

1. 若相同类型但版本不同的依赖存在于同一个 pom 文件，只会引入后一个声明的依赖。

2. 项目的两个依赖同时引入了一个不同版本的依赖，需要进行依赖调解，遵循如下两个原则

   1. 最短路径优先
   2. 声明顺序优先

3. Maven无法完成依赖冲突处理的情况下，需要手动排除依赖

   常见：`NoClassDefFoundError`和`NoSuchMethodError`错误

   通过`exclusion`手动排除依赖

   一般优先保留版本高的，升级优化上层依赖



### Maven仓库

存放项目所使用的jar包以及Maven使用的jar包

分为两种：

- 本地仓库：Maven项目所需要的jar包；`/Users/nikki/.m2/repository`
- 远程仓库：（按顺序查找）
  - 私服
  - 中央仓库镜像
  - 中央仓库

### Maven的生命周期

为了对所有的构建过程进行抽象和统一

三个生命周期，彼此独立，每个周期包含有序的多个阶段phase（有序是指后一个依赖前一个）

- default：23个阶段；主要生命周期，用于构建应用程序
- clean：3个阶段；清理项目
  - 执行 `mvn clean` 的时候，会执行 clean 生命周期中的 pre-clean 和 clean 阶段（前两个阶段）
- site：4个阶段；建立发布站点

### Maven插件

Maven 本质上是一个插件执行框架，插件可以理解为一组任务的集合

本地插件位置：`/Users/nikki/.m2/repository/org/apache/maven/plugins`

