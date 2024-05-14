

## Dao接口的工作原理？

 JDK 动态代理



## Dao接口中方法能否重载？

可以，但是在Mapper.xml文件中的映射id只能有一个。所以成功的重载需要满足以下条件：

仅有一个无参方法 或 仅有一个有参方法 或 多个有参方法的参数数量必须一致？



## 分页插件的原理

使用MyBatis提供的插件接口，实现自定义插件，在插件的拦截方法内重写sql



## 是否支持延迟加载

仅支持association关联对象和collection关联对象的延迟加载



## MyBatis支持的执行器种类

- SimpleExecutor：每执行一次 update 或 select，就开启一个Statement对象，用完立刻关闭
- ReuseExecutor：用完后不关闭，放入Map中供下一次使用
- BatchExecutor：缓存多个Statement对象，批处理执行。与 JDBC 批处理相同

如何指定ExecutorType：

- 主配置文件中配置ExecutorType
- 在创建sqlSession的方法中传递ExecutorType





