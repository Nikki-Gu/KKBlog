import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as o,a as e,b as n,d as r,e as c}from"./app-ARawJAy0.js";const s={},d=c('<h2 id="java内存区域" tabindex="-1"><a class="header-anchor" href="#java内存区域"><span>Java内存区域</span></a></h2><ul><li>Java堆 <ul><li>字符串常量池</li></ul></li><li>栈：一个栈帧中包括局部变量表、操作数栈、动态链接、返回地址 <ul><li>虚拟机栈</li><li>本地方法栈</li><li>程序计数器</li></ul></li><li>直接内存（不在JVM的内存区域中，通过操作系统调用创建） <ul><li>元空间metaspace（之前的永久代） <ul><li>方法区：抽象概念，JDK1.8之后使用元空间来实现 <ul><li>类信息、属性信息、方法信息（方法表）、常量、静态变量</li><li>JIT代码缓存</li><li>运行时常量池：字面量和符号引用</li></ul></li></ul></li></ul></li></ul><h3 id="对象创建过程" tabindex="-1"><a class="header-anchor" href="#对象创建过程"><span>对象创建过程</span></a></h3><p>在代码中使用new的时候经历的过程：</p><ol><li><p>加载检查：去运行时常量池查找这个类是否已经加载</p></li><li><p>给对象在Java堆上分配内存</p></li><li><p>对象头信息设置</p></li><li><p>调用构造方法， Class 中的 <code>&lt;init&gt;()</code> 方法来初始化对象</p></li></ol><h3 id="如何为对象分配内存" tabindex="-1"><a class="header-anchor" href="#如何为对象分配内存"><span>如何为对象分配内存</span></a></h3><p>分配内存的时候，按照Java堆是否规整有两种分配方式</p><ul><li>规整的情况：指针碰撞</li><li>不规整的情况：空闲列表，使用列表维护区域的可用性</li></ul><p>Java堆是否规整取决于使用的垃圾收集器是否带有空间压缩整理能力</p><h3 id="如何保证并发分配线程安全" tabindex="-1"><a class="header-anchor" href="#如何保证并发分配线程安全"><span>如何保证并发分配线程安全</span></a></h3><p>并发分配内存保证线程安全的方案：</p><ul><li>CAS+失败重试</li><li>TLAB（Thread Local Allocation Buffer）：每个线程在Java堆中预先分配有一块内存，优先分配TLAB中的内存</li></ul><h3 id="对象的内存布局" tabindex="-1"><a class="header-anchor" href="#对象的内存布局"><span>对象的内存布局</span></a></h3><ul><li>对象头 <ul><li>运行时数据：哈希码、GC分代年龄等</li><li>类型指针：指向其Class类</li></ul></li><li>实例数据</li><li>对齐填充</li></ul><h3 id="对象的访问方式" tabindex="-1"><a class="header-anchor" href="#对象的访问方式"><span>对象的访问方式</span></a></h3><ul><li>句柄：引用中存储的是句柄地址 <ul><li>句柄中存储： <ul><li>对象实例数据的指针</li><li>对象类型数据的指针</li></ul></li></ul></li><li>直接访问：引用中存储的就是对象实例数据的地址（主要实现）</li></ul><h2 id="类加载器todo" tabindex="-1"><a class="header-anchor" href="#类加载器todo"><span>类加载器TODO</span></a></h2><h2 id="垃圾回收todo" tabindex="-1"><a class="header-anchor" href="#垃圾回收todo"><span>垃圾回收TODO</span></a></h2><p>主要对Java堆进行垃圾回收，回收死亡的对象（不可能再使用的对象）</p><h3 id="判断对象死亡的方法" tabindex="-1"><a class="header-anchor" href="#判断对象死亡的方法"><span>判断对象死亡的方法</span></a></h3><ol><li>引用计数器：无法避免互相引用的问题</li><li>可达性分析：主要使用方式 <ul><li>使用<code>GC Roots</code>对象作为起始结点搜索，不可达的对象为死亡对象</li><li>固定 <code>GC Roots</code> 的对象 + 临时性对象组成<code>GC Roots</code>集合</li></ul></li></ol>',21),p={href:"https://javabetter.cn/jvm/zongjie.html#_3-%E5%AF%B9%E8%B1%A1%E5%BC%95%E7%94%A8",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const l=t("ExternalLinkIcon");return i(),o("div",null,[d,e("p",null,[e("a",p,[n("JVM"),r(l)])])])}const f=a(s,[["render",h],["__file","8. JVM.html.vue"]]),g=JSON.parse('{"path":"/backend/java/8.%20JVM.html","title":"JVM","lang":"zh-CN","frontmatter":{"title":"JVM","order":9,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"Java内存区域 Java堆 字符串常量池 栈：一个栈帧中包括局部变量表、操作数栈、动态链接、返回地址 虚拟机栈 本地方法栈 程序计数器 直接内存（不在JVM的内存区域中，通过操作系统调用创建） 元空间metaspace（之前的永久代） 方法区：抽象概念，JDK1.8之后使用元空间来实现 类信息、属性信息、方法信息（方法表）、常量、静态变量 JIT代码...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/java/8.%20JVM.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:description","content":"Java内存区域 Java堆 字符串常量池 栈：一个栈帧中包括局部变量表、操作数栈、动态链接、返回地址 虚拟机栈 本地方法栈 程序计数器 直接内存（不在JVM的内存区域中，通过操作系统调用创建） 元空间metaspace（之前的永久代） 方法区：抽象概念，JDK1.8之后使用元空间来实现 类信息、属性信息、方法信息（方法表）、常量、静态变量 JIT代码..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":2,"title":"Java内存区域","slug":"java内存区域","link":"#java内存区域","children":[{"level":3,"title":"对象创建过程","slug":"对象创建过程","link":"#对象创建过程","children":[]},{"level":3,"title":"如何为对象分配内存","slug":"如何为对象分配内存","link":"#如何为对象分配内存","children":[]},{"level":3,"title":"如何保证并发分配线程安全","slug":"如何保证并发分配线程安全","link":"#如何保证并发分配线程安全","children":[]},{"level":3,"title":"对象的内存布局","slug":"对象的内存布局","link":"#对象的内存布局","children":[]},{"level":3,"title":"对象的访问方式","slug":"对象的访问方式","link":"#对象的访问方式","children":[]}]},{"level":2,"title":"类加载器TODO","slug":"类加载器todo","link":"#类加载器todo","children":[]},{"level":2,"title":"垃圾回收TODO","slug":"垃圾回收todo","link":"#垃圾回收todo","children":[{"level":3,"title":"判断对象死亡的方法","slug":"判断对象死亡的方法","link":"#判断对象死亡的方法","children":[]}]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":2.13,"words":639},"filePathRelative":"backend/java/8. JVM.md","localizedDate":"2024年5月14日","autoDesc":true}');export{f as comp,g as data};
