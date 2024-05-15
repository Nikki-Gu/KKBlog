---
title: 网站制作
icon: circle-info
---

## 搭建过程

目前还处于初步上手阶段，搭建过程整理如下：

1. 根据[这篇文章](https://www.apwx.com/guide.html#%E4%B8%80%E3%80%81%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%8D%9A%E5%AE%A2%EF%BC%9F)中的第三部分构建一个VuePress的demo，了解VuePress项目的基本构成和配置
2. 确定博客主题，我选择了[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)，并参考主题的文档创建了这个博客：
   1. 运行`pnpm create vuepress-theme-hope your-project-name`创建一个demo主题项目
   2. 进一步根据demo项目中的提示和`指南-布局`文档修改网站样式
   3. 图标：使用[fontawesome](https://fontawesome.com/search?o=r&m=free)中的免费图标
3. 部署：目前使用Github Pages部署（注意，现在Github上传需要使用token，不能直接用密码登陆），后续再尝试使用个人服务器部署。参考[这篇文章](https://www.apwx.com/guide.html#%E4%B8%80%E3%80%81%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%8D%9A%E5%AE%A2%EF%BC%9F)的第五部分到修改完`package.json`文件这一步，然后还需要
   1. 在`config.ts`文件中添加`base: "/<创建的第二个仓库名>/",`
   2. 在仓库的Settings-Pages里面选择Deploy from a branch，并选择gh-pages分支
   3. 等待Actions运行完成就可以打开对应连接访问


## Markdown亮点语法

基础的Markdown语法网上有很多资料，这里记录一些我之前未使用过，但是可以让网站焕然一新的亮点语法。

### 引用

以往使用`>`进行引用，但是在渲染为vue项目的时候会出现语法错误，需要改为使用：

```
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::
```

::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

### emoji表情

`:emoji-code:`可以展示emoji表情，emoji-code参考[emoji-cheat-sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

