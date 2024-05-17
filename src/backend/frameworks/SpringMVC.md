---
title: SpringMVC
order: 0

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---

## MVC介绍

将系统分为三层：

- View：数据视图（前端）
- Controller：业务逻辑处理代码（后端）
- Model：数据存储（数据库）

对应Spring中的实现：

- Controller：控制层，处理View和Controller之间的请求和响应
- Service：处理具体的业务逻辑
- Dao：数据访问层（持久层），CRUD操作数据库

设计原则：高内聚低耦合；解耦，分层，代码复用



## **请求**

HTTP四大参数类型：head、query、path、body

请求参数类型：query、path、body

访问不同的路径就是发送不同的请求，请求设计需要考虑两个问题：

- 传递：前端通过浏览器的URL传递的参数形式
- 接收：后端如何接收对应参数

接下来来看Spring框架提供的实现。

### 获取Head



### **Query类型**

传递：`?key=value`，key是参数名称，value是赋值

接收：**名称对应，位置无关**。找到方法中key对应的参数名并赋值，因此传递多个参数时参数位置不影响后端获取结果，保证名称对应即可

::: warning

参数必须传(除boolean类型), 否则会报500错误

类型不匹配时, 会报400错误

:::

**支持后端参数重命名**

使用`@RequestParam`注解，对后端参数重命名以匹配前端参数名

  ::: details 具体例子

  前端传递了⼀个 time 给后端，而后端方法中参数名为 createtime，将方法中该参数前加上`@RequestParam`注解重命名为time。

  ```java
  public Object method(@RequestParam("time") String createtime){}
  ```

  :::

**支持数组和集合**

- 传递：`?array=zhangsan,lisi,wangwu`
- 接收：`public void method(String[] array)`

如果是List集合需要添加`@RequestParam`注解：

- 传递：`?listParam=zhangsan,lisi,wangwu`
- 接收：`public void method(@RequestParam List<String> listParam)`

**支持对象**

- 传递：`?属性名=value`
- 接收：将传递的属性包装为一个对象作为方法的参数传递。未传递的属性，赋默认初始值。


### Path类型

传递：`/{id}`，直接在路径中放入id的值，比如`/1`

接收：使用注解`@PathVariable` ，从请求路径URL中直接获取变量值。同样是名称对应，位置无关，支持重命名



### Body类型

传递：请求体支持多种参数格式，根据请求头中的 `Content-Type` 获取并解析。常用的是JSON格式。

接收：使用注解`@RequestBody`

::: info @RequestBody的作用

将请求体中的数据转换为方法中对应类型的 Java 对象，并作为方法的参数传递。

具体来说：指示一个方法参数是一个对象，这个对象是从 HTTP 请求体中获取数据，并进行反序列化后得到的Java对象

:::

## **响应**

HTTP响应结果可以是数据和静态页面，还可以设置响应头部信息、状态码等

### **返回响应数据**

使用注解`@ResponseBody`，表示方法返回值为响应数据（而不是页面），可以返回的内容：

- 响应数据（一般为JSON格式）
- HTML代码片段，可以被浏览器解析显示

::: info 作用范围

这个注解在方法和类上都可以使用，在类上添加相当于在该类中所有方法上添加注解。

:::

### **设置头部信息**

` @RequestMapping `注解支持如下头部字段属性的设置：

- value: 映射的URL
- method: 请求类型, 如GET, POST等
- consumes: 指定处理请求(request)的提交内容类型(Content-Type)，例如application/json,text/html;
- produces: 指定返回的内容类型(Content-Type)和编码格式，仅当request请求头中的(Accept)类型中包含该指定类型才返回，比如：

  ```java
  @RequestMapping(value = "/test",produces = "application/json;charset=utf-8")
  ```
- Params: 指定request中必须包含某些参数值时，才让该方法处理
- headers: 指定request中必须包含某些指定的header值，才能让该方法处理请求

---



其他属性需要通过Spring MVC内置对象HttpServletResponse提供的set方法来设置`response.setHeader("MyHeader","MyHeaderValue");`

比如设置状态码。Spring MVC会根据方法的返回结果自动设置响应状态码，也可以通过Spring MVC内置对象HttpServletResponse 提供的方法来指定状态码：

```java
HttpServletResponse response = new HttpServletResponse();
response.setStatus(401);
```

## 消息转换器

Spring 根据请求的 `Content-Type` 和 `Accept` 头信息，选择合适的消息转换器来解析请求和生成响应。消息转换器是用于将Java对象转换为前端需要的格式的工具。

Spring有默认的消息转换器列表`List<HttpMessageConverter<?>> converters`，包含各种格式和Java对象相互转换的消息转换器，比如

- `MappingJackson2HttpMessageConverter`负责JSON和Java对象的转换
  - Spring 默认的消息转换器会包含两个 `MappingJackson2HttpMessageConverter` 的实例，为什么？好像是由于SpringMVC和SpringBoot分别有两个配置类？需要去看具体实现

在 `WebMvcConfigurer` 接口中重写 `extendMessageConverters` 方法，可以扩展默认的消息转换器列表，需要添加到头部才会优先使用。
