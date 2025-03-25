---
title: 推荐算法面试考察点

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>
---



面试主要考察点分为六个部分，根据重要程度划分🌟级排序如下：

- 代码coding🌟🌟🌟🌟🌟
  - LC的题+算法相关手撕
- 项目/实习/论文🌟🌟🌟🌟🌟
  - 讲清楚故事：背景动机、方法、效果
- 机器学习🌟🌟🌟🌟
  - 看到的推荐：李航老师的《统计学习方法》、葫芦书《百面机器学习》
  - 但实际准备的时候来不及看，所以我主要还是面向别人的面经准备的
- 推荐系统知识🌟🌟🌟🌟
  - 基础推荐算法
  - 其他（同样也是准备起来会来不及看的）：[深度学习驱动的广告推荐技术发展周期](https://zhuanlan.zhihu.com/p/398041971)、推荐系统相关论文
- 深度学习🌟🌟🌟
  - 参考自己的项目和论文准备一下对应的技术知识点
- 通用CS+概率题🌟🌟

推荐两个八股整理：

- [比较全面的搜广推八股整理](https://blog.csdn.net/keiven_/article/details/134758737)
- [算法全面八股整理](https://zhuanlan.zhihu.com/p/545374303)

## 项目业务论文

特征处理  目标融合

对生成模型的了解：GAN、VAE、Diffusion

Transformer

## 机器学习

xgboost基本原理 在业务中怎么使用 和 RF lgb对比

GBDT XGBOOST 原理区别

XGboost  LGB 推导  

样本处理  随机负采样会产生什么影响

特征离散化有什么好处

> 

解决过拟合问题

> 原因是模型学到了训练数据中的噪声和细节，无法很好地泛化到新的数据。
>
> 增加有效的训练数据，提高信噪比
>
> L1/L2正则化
>
> 减少模型复杂度：Dropout/剪枝

解决欠拟合问题

> 增加模型复杂度：网络层数/每层数量；树的深度
>
> 特征工程：创建更多有用的特征

交叉熵推导  两种角度   为什么不i用mse做分类 推导极大似然法

## 深度学习

深度学习梯度消失和梯度爆炸现象 如何处理

损失函数有哪些  各有什么优缺点

[BN](https://gw-c.nowcoder.com/api/sparta/jump/link?link=http%3A%2F%2F3.bn%2F) 的原理  训练和推理  Dropout基本原理 训练推理

## 推荐系统

基本的推荐链路流程：

- 召回：全集中找出候选，万-亿 到 百-千
- 粗排：缩小候选，百-千 到 十-百
- 精排：对候选打分排序；十-百 到 十以内
- 重排/混排：业务规则和多样性

推荐算法中多任务学习有哪些   都有什么优化点

- Shared-Bottom model：底层结构所有任务共享，针对不同的任务分出多个head，每个任务对应一个单独的head。
- MoE（One-gate Mixture-of-Experts）：细化共享的部分。将共享的底层结构分为了多个专家，使用一个所有任务共享的gate，来控制不同任务中不同专家的权重，是一种软共享机制。
- MMoE（Multi-gate Mixture-of-Experts）：将MoE中的Gate分为task-specific的，每个任务有一个单独Gate来控制多个Expert的权重
- Progressive Layered Extraction(PLE)：分为task-shared和task-specific两种底层结构
- ESMM

推荐的模型发展过程  LR widedeep  多任务 多场景等

DCN FM FFM 推导

DCN和 DeepFM 的特征交叉有和异同

deepfm 基本原理  

## 通用CS+概率

- 数组、链表、栈、队列、堆    
- list，array，vector，unordered_set，set，dict等数据结构的底层怎么实现的    
- 二叉树、平衡树、搜索树和红黑树，各种树的演变    
- python装饰器、深拷贝浅拷贝、垃圾回收机制    
- shell、git、hadoop、spark   

概率相关：   

-    用rand7构造rand10    
-    山羊汽车问题    
-    木棍截成三段，形成三角形的概率    
-    抛一个6面的骰子，连续抛直到6为止，问期望的抛的次数是多少    
-    给定概率不均匀的0和1随机生成器，怎样等概率随机生成0和1    
-    三角形里面随机选3个点，构成锐角三角形的概率    
-    两个人轮流抛硬币，规定第一个抛出正面的人可以吃苹果，求先抛的人吃苹果的概率    
-    一副扑克牌，分成三堆，大小王出现在同一份的概率    
-    在半径为1的圆内随机等概率采样一个点

## 代码Coding

### LC刷题

反转单链表 

二叉树的最大深度

环形链表入口节点

最长递增子序列

字符串保留K个字符的最小字典序

接雨水1

课程表

累加数

二叉搜索树交换错误节点

第N位数

最长连续子数组

旋转数组

逆序对

岛屿面积

部分链表反转

打家劫舍

二叉树分裂做最大积？？

连续数组乘积最大值

### 算法手撕

AUC实现

线性回归训练伪代码

## Ref

[面经1](https://www.nowcoder.com/discuss/460501011640176640?sourceSSR=users)

[面经2待整理](https://www.nowcoder.com/discuss/461243756893761536?sourceSSR=users)

[23届秋招NLP总结](https://www.nowcoder.com/discuss/387544619066683392)

[搜广推面试八股](https://blog.csdn.net/keiven_/article/details/134758737)