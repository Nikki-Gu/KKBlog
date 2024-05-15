import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,d as t}from"./app-4Yi0tegr.js";const s={},l=t(`<h2 id="java-i-o" tabindex="-1"><a class="header-anchor" href="#java-i-o"><span>Java I/O</span></a></h2><h3 id="为什么要分字符流和字节流" tabindex="-1"><a class="header-anchor" href="#为什么要分字符流和字节流"><span>为什么要分字符流和字节流？</span></a></h3><p>字符流是为了应对汉字编码问题，一般字节流读取文件按照字节为单位逐个转换，但是不同的编码规则中每个字符用到的字节数不同，按单个字节为单位转换容易造成乱码</p><p>字符流读取的基本单位为字符，默认Unicode编码（每个字符占用两个字节），也可以通过参数指定编码格式</p><h3 id="常见的io流类" tabindex="-1"><a class="header-anchor" href="#常见的io流类"><span>常见的IO流类</span></a></h3><ul><li><p>字符流：Reader/Writer</p><ul><li>FileReader/FileWriter</li><li>BufferedReader/BufferedWriter</li><li>PrintWriter：字符打印流</li></ul></li><li><p>字节流：InputStream/OutputStream</p><ul><li><p>FileInputStream/FileOutputStream：一般不单独使用，读取效率低，速度慢</p></li><li><p>BufferedInputStream/BufferedOutputStream：装饰器模式增强FileInputStream；维护一个缓冲区（默认8192字节），大幅减少IO次数，提高效率；</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">BufferedInputStream</span> bufferedInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token function">newFileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;input.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>DataInputStream/DataOutputStream：指定数据类型的读取和写入，不能单独使用，一般将fileInputStream作为构造参数使用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">DataInputStream</span> dataInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span><span class="token function">newFileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;input.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dataInputStream<span class="token punctuation">.</span><span class="token function">readBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ObjectInputStream/ObjectOutputStream：序列化和反序列化；一般将fileInputStream作为构造参数使用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">ObjectInputStream</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;object.data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MyClass</span> object <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MyClass</span><span class="token punctuation">)</span> input<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>PrintStream：字节打印流</p></li></ul></li><li><p>RandomAccessFile：随机访问流，只有唯一父类Object</p><ul><li>应用：大文件断点续传</li><li>方法 <ul><li><code>seek(long pos)</code></li><li><code>getFilePointer()</code></li></ul></li></ul></li></ul><h3 id="用到的设计模式" tabindex="-1"><a class="header-anchor" href="#用到的设计模式"><span>用到的设计模式</span></a></h3><ol><li><p><strong>装饰器（Decorator）模式</strong>：可以在不改变原有对象的情况下拓展其功能，动态地增强原始类</p><p>要拓展功能的类的构造函数中参数包括 <code>InputStream</code></p><p>这个要拓展功能的类本身也是<code>InputStream</code> 的子类，还可以进一步被装饰</p><ul><li>也就是说，可以对原始类嵌套使用多个装饰器</li></ul></li><li><p><strong>适配器（Adapter Pattern）模式</strong> ：用于不是同一接口的类的协调工作</p><p>适配器和适配者两者不需要继承相同的抽象类或者实现相同的接口</p><p>InputStreamReader/OutputStreamWriter是两个适配器Adapter，是字节流和字符流之间的桥梁</p><p><code>InputStream</code> 和 <code>OutputStream</code> 的子类是被适配者（被用来适配字符流的）</p></li><li><p>工厂模式：NIO中创建对象</p></li><li><p>观察者模式：NIO的文件目录监听服务</p></li></ol><h3 id="io模型基础" tabindex="-1"><a class="header-anchor" href="#io模型基础"><span>IO模型基础</span></a></h3><p>IO操作只能通过系统调用来完成：</p><ul><li>磁盘IO（读写文件）</li><li>网络IO（网络请求和响应）</li></ul><p>具体步骤：</p><ol><li>数据准备：内核等待I/O设备准备好数据</li><li>数据拷贝：内核将数据从内核空间拷贝到用户空间</li></ol><h3 id="常见io模型" tabindex="-1"><a class="header-anchor" href="#常见io模型"><span>常见IO模型</span></a></h3><p>UNIX系统下5种IO模型和Java3中IO模型对应关系：</p><p>前四种都是同步IO：阻塞在数据从内核空间复制到用户空间的缓冲区</p><p>异步IO：</p><ul><li>阻塞IO：BIO <ul><li>应用程序阻塞，等待数据准备、拷贝完成</li><li>读：不知道发送的数据有多少，就会一直阻塞</li><li>写：写完所有数据才结束</li></ul></li><li>非阻塞IO：轮询 <ul><li>应用程序不阻塞，轮询数据是否准备完成，阻塞进行数据拷贝</li><li>轮询消耗CPU资源</li></ul></li><li>IO多路复用：NIO <ul><li>应用程序不阻塞，内核准备好数据后通知应用来read，阻塞进行数据拷贝</li><li>select/poll/epoll</li><li>减少无效的系统调用，减少了对 CPU 资源的消耗</li><li>I/O多路复用通常是同步的，因为当I/O事件就绪时，应用程序仍需要通过阻塞或非阻塞方式来执行读取或写入操作</li></ul></li><li>信号驱动IO</li><li>异步IO：AIO <ul><li>真正的并行处理</li></ul></li></ul><h3 id="nio" tabindex="-1"><a class="header-anchor" href="#nio"><span>NIO</span></a></h3><p>一般不直接使用NIO，而是使用基于NIO的网络编程框架Netty</p><p>NIO：</p><ul><li>Buffer：缓冲区</li><li>Channel：全双工通道</li><li>Selector实现了事件驱动的I/O多路复用模型 <ul><li>Channel注册到Selector上，Selector分配线程来处理</li></ul></li></ul>`,22),i=[l];function p(o,c){return e(),n("div",null,i)}const d=a(s,[["render",p],["__file","5. IO.html.vue"]]),m=JSON.parse(`{"path":"/backend/java/5.%20IO.html","title":"IO","lang":"zh-CN","frontmatter":{"title":"IO","order":5,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"Java I/O 为什么要分字符流和字节流？ 字符流是为了应对汉字编码问题，一般字节流读取文件按照字节为单位逐个转换，但是不同的编码规则中每个字符用到的字节数不同，按单个字节为单位转换容易造成乱码 字符流读取的基本单位为字符，默认Unicode编码（每个字符占用两个字节），也可以通过参数指定编码格式 常见的IO流类 字符流：Reader/Writer ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/KKBlog/backend/java/5.%20IO.html"}],["meta",{"property":"og:site_name","content":"KK's Blog"}],["meta",{"property":"og:title","content":"IO"}],["meta",{"property":"og:description","content":"Java I/O 为什么要分字符流和字节流？ 字符流是为了应对汉字编码问题，一般字节流读取文件按照字节为单位逐个转换，但是不同的编码规则中每个字符用到的字节数不同，按单个字节为单位转换容易造成乱码 字符流读取的基本单位为字符，默认Unicode编码（每个字符占用两个字节），也可以通过参数指定编码格式 常见的IO流类 字符流：Reader/Writer ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\",\\"url\\":\\"https://github.com/Nikki-Gu\\"}]}"]]},"headers":[{"level":2,"title":"Java I/O","slug":"java-i-o","link":"#java-i-o","children":[{"level":3,"title":"为什么要分字符流和字节流？","slug":"为什么要分字符流和字节流","link":"#为什么要分字符流和字节流","children":[]},{"level":3,"title":"常见的IO流类","slug":"常见的io流类","link":"#常见的io流类","children":[]},{"level":3,"title":"用到的设计模式","slug":"用到的设计模式","link":"#用到的设计模式","children":[]},{"level":3,"title":"IO模型基础","slug":"io模型基础","link":"#io模型基础","children":[]},{"level":3,"title":"常见IO模型","slug":"常见io模型","link":"#常见io模型","children":[]},{"level":3,"title":"NIO","slug":"nio","link":"#nio","children":[]}]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":3.19,"words":956},"filePathRelative":"backend/java/5. IO.md","localizedDate":"2024年5月14日","autoDesc":true}`);export{d as comp,m as data};