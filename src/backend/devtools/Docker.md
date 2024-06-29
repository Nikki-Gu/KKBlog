---
title: Docker
order: 2

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>

---



### 容器和虚拟机的比较理解

容器虚拟化操作系统，容器内的应用进程直接运行于宿主的内核。

容器是一个应用层的抽象，将代码和依赖资源打包在一起。

虚拟机虚拟化硬件，是一个物理硬件层的抽象。

### Docker的基本概念

三个基本概念：

- 镜像 Image
  - 特殊的文件系统；分层存储（每一层构建完就不会再发生改变）
- 容器 Containeer
  - 镜像的实体；实质是进程；存储层保持无状态化
- 仓库 Repository
  - 集中存放镜像文件，提供集中存储、分发镜像的服务



