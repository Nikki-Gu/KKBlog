---
title: SpringBoot实践记录
order: -1

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



## 修改文件名称后报错找不到sqlSessionTemplate

具体错误为：

```bash
Cannot resolve reference to bean 'sqlSessionTemplate' while setting bean property 'sqlSessionTemplate'
```

原因：使用Refactor功能可以修改相关联的命名，但是Mapper.xml文件中的返回值和方法名是字符串类型的，没有办法同步修改，需要手动更新同步

