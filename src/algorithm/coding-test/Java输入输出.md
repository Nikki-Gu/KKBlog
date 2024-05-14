---
title: 笔试输入输出&技巧
order: 1

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



https://blog.csdn.net/qq_42403042/article/details/107533785



超时退出：

```
static long beginTime = System.currentTimeMillis();
static long overTime = 0;
在自己的循环代码中最外层设置：

if ((nowTime - beginTime) > overTime) {
    System.out.println("超时退出");
    break;
}
```