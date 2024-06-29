---
title: Tomcat & Nginx
order: 4

copyright: <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0协议</a>

---



Web服务器：处理静态资源

应用服务器：处理动态资源



Tomcat是Apache下面一款开源的Servlet容器，实现了对Servlet和JSP规范的支持（处理动态请求）

Tomcat内嵌了HTTP服务器，所以也可以作为Web服务器来使用，但是tomcat对静态资源的处理能力不如Nginx，所以一般组合使用Apache/Nginx+Tomcat，一个处理静态资源，一个处理动态资源

Apache和Nginx都是高性能的Web服务器，同时Nginx常作为反向代理服务器和负载均衡服务器