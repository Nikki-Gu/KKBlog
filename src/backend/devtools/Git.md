---
title: Git
order: 1

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



Version Control Systems（VCS）版本控制

- Centralized VCS
  - 单点故障；必须联网使用（比如Notion）
- Distributed VCS
  - Git



Git直接记录快照，而非差异比较



## 常用命令

拉取代码

```
git fetch origin master
git rebase origin/master
// 等于
git pull -- rebase origin/master
```

手动处理冲突，然后

```
git add <file>
git rebase --continue
```

创建分支：

```
// 创建一个分支并切换到该分支
git checkout -b <branch-name>

// 创建一个分支
git branch <branch-name>
// 切换到一个分支
git checkout <branch-name>

// 查看本地所有可用分支
git branch
```

为当前分支指定远程跟踪分支：

origin是指远程仓库，origin/master是指远程仓库的master分支；后面一个master是指当前本地分支

```
git branch --set-upstream-to=origin/master master
git branch -u origin/master master
```

建立关联后才能执行git pull/git push操作时不显式地指定远程分支名

否则需要显式指定远程分支名：【这样本地和远程分支名可以不一样】

```
git push -u origin <branch-name>
```



在创建 MR（Merge Request）的时候，远程分支已经存在，但是 MR 还没有被 merge，这个时候在本地分支对相应的代码进行 commit 并 push，这个 commit（或者其他的操作）将直接反映在相应的 MR 中。
