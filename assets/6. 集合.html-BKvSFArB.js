import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as l}from"./app-ARawJAy0.js";const n={},s=l(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p><code>Collection</code>接口</p><ul><li><code>List</code><ul><li><code>ArrayList</code></li><li><code>LinkedList</code></li></ul></li><li><code>Set</code><ul><li><code>HashSet</code>：基于<code>HashMap</code></li><li><code>LinkedHashSet</code>：基于<code>LinkedHashMap</code></li><li><code>TreeSet</code>：基于红黑树</li></ul></li><li><code>Queue</code><ul><li><code>PriorityQueue</code></li></ul></li><li><code>Map</code><ul><li><code>HashMap</code></li><li><code>LinkedHashMap</code></li><li><code>HashTable</code></li><li><code>ConcurrentHashMap</code></li></ul></li></ul><h3 id="存储null的问题" tabindex="-1"><a class="header-anchor" href="#存储null的问题"><span>存储Null的问题</span></a></h3><ul><li><p>ArrayList可以添加null值，但是无意义，容易出现空指针异常</p></li><li><p>HashMap：</p><ul><li>Key为null时固定哈希值为0；</li><li>Value为null时有二义性，可以通过<code>map.containsKey(key)</code>来消除二义性 <ul><li>对应的key不存在</li><li>key对应的value是null</li></ul></li></ul></li><li><p>ConcurrentHashMap和HashTable都不支持Null，因为在多线程环境下不支持通过<code>map.containsKey(key)</code>来消除二义性，因为the map might have changed between calls.</p><p>比如：按照1234的顺序执行，判断错误</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 线程 A</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 2</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
<span class="token punctuation">}</span>
<span class="token comment">// 线程 B</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1</span>
  	对应的key不存在 <span class="token comment">// 4</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  	key对应的value是<span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>List</span></a></h2><h3 id="arraylist和array的区别" tabindex="-1"><a class="header-anchor" href="#arraylist和array的区别"><span>ArrayList和Array的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">ArrayList</th><th style="text-align:left;">Array</th></tr></thead><tbody><tr><td style="text-align:left;">能否扩容</td><td style="text-align:left;">能（创建时无需指定大小）</td><td style="text-align:left;">否（创建时需要指定大小）</td></tr><tr><td style="text-align:left;">能否使用泛型</td><td style="text-align:left;">能</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">存储数据类型</td><td style="text-align:left;">对象类型</td><td style="text-align:left;">对象类型和基本数据类型</td></tr><tr><td style="text-align:left;">API操作</td><td style="text-align:left;">丰富</td><td style="text-align:left;">基础（不能动态添加删除）</td></tr></tbody></table><p>Array也是对象，是JVM创建的对象</p><h3 id="arraylist和linkedlist的区别" tabindex="-1"><a class="header-anchor" href="#arraylist和linkedlist的区别"><span>ArrayList和LinkedList的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">ArrayList</th><th style="text-align:left;">LinkedList</th></tr></thead><tbody><tr><td style="text-align:left;">是否线程安全</td><td style="text-align:left;">否</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">底层数据结构</td><td style="text-align:left;">Object数组</td><td style="text-align:left;">双向链表</td></tr><tr><td style="text-align:left;">插入删除时间复杂度</td><td style="text-align:left;">尾部O(1)；头部/指定位置O(n)</td><td style="text-align:left;">头尾O(1)；指定位置O(n)</td></tr><tr><td style="text-align:left;">是否支持随机访问</td><td style="text-align:left;">是</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">空间浪费</td><td style="text-align:left;">数组尾部</td><td style="text-align:left;">每个元素存放引用</td></tr></tbody></table><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>Set</span></a></h2><p>无序是指不按照访问顺序存储</p><h3 id="hashmap和hashset的区别" tabindex="-1"><a class="header-anchor" href="#hashmap和hashset的区别"><span>HashMap和HashSet的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">HashMap</th><th style="text-align:left;">HashSet</th></tr></thead><tbody><tr><td style="text-align:left;">实现接口</td><td style="text-align:left;">Map</td><td style="text-align:left;">Map 和 Set</td></tr><tr><td style="text-align:left;">添加元素</td><td style="text-align:left;">put</td><td style="text-align:left;">add（底层实现是put(e, 常量对象))</td></tr><tr><td style="text-align:left;">存储内容</td><td style="text-align:left;">key，value</td><td style="text-align:left;">对象（作为key）</td></tr></tbody></table><h3 id="hashset如何检查重复" tabindex="-1"><a class="header-anchor" href="#hashset如何检查重复"><span>HashSet如何检查重复</span></a></h3><p>底层使用HashMap实现，所以和HashMap逻辑一样：先判断Hashcode，如果Hashcode相等，再去判断值是否相等</p><p><code>add</code>调用<code>put</code>调用<code>putval</code></p><blockquote><p>判断值的时候是（==判断 || equals判断） 这样应该能提升效率吧</p></blockquote><h3 id="treeset" tabindex="-1"><a class="header-anchor" href="#treeset"><span>TreeSet</span></a></h3><p>用于有序，无重复的集合</p><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>Map</span></a></h2><h3 id="hashmap和hashtable的区别" tabindex="-1"><a class="header-anchor" href="#hashmap和hashtable的区别"><span>HashMap和HashTable的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">HashMap</th><th style="text-align:left;">HashTable</th></tr></thead><tbody><tr><td style="text-align:left;">是否线程安全</td><td style="text-align:left;">否</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">底层数据结构</td><td style="text-align:left;">JDK1.7（数组+链表） vs JDK1.8（数组+链表/红黑树）</td><td style="text-align:left;">数组+链表</td></tr><tr><td style="text-align:left;">效率</td><td style="text-align:left;">较高</td><td style="text-align:left;">低，淘汰（整个数组锁住）</td></tr><tr><td style="text-align:left;">是否可以存储Null</td><td style="text-align:left;">是（key null只能有一个，value null可以有多个）</td><td style="text-align:left;">否（NullPointerException）</td></tr><tr><td style="text-align:left;">初始容量</td><td style="text-align:left;">总是 2 的幂（给定大小扩充）（默认16）</td><td style="text-align:left;">给定大小（默认11）</td></tr><tr><td style="text-align:left;">扩充机制</td><td style="text-align:left;">2n</td><td style="text-align:left;">2n + 1</td></tr></tbody></table><h3 id="hashmap和treemap的区别" tabindex="-1"><a class="header-anchor" href="#hashmap和treemap的区别"><span>HashMap和TreeMap的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">HashMap</th><th style="text-align:left;">TreeMap</th></tr></thead><tbody><tr><td style="text-align:left;">父类</td><td style="text-align:left;">AbstractMap</td><td style="text-align:left;">AbstractMap</td></tr><tr><td style="text-align:left;">实现接口</td><td style="text-align:left;"></td><td style="text-align:left;">NavigableMap（搜索）和SortedMap（排序）</td></tr></tbody></table><h3 id="hashmap的底层实现" tabindex="-1"><a class="header-anchor" href="#hashmap的底层实现"><span>HashMap的底层实现</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">JDK1.7</th><th style="text-align:left;">JDK1.8</th></tr></thead><tbody><tr><td style="text-align:left;">底层数据结构</td><td style="text-align:left;">数组+链表</td><td style="text-align:left;">数组+链表/红黑树</td></tr><tr><td style="text-align:left;">hash方法</td><td style="text-align:left;">4次扰动</td><td style="text-align:left;">1次扰动</td></tr><tr><td style="text-align:left;">处理冲突</td><td style="text-align:left;">开散列法</td><td style="text-align:left;">开散列法+红黑树</td></tr><tr><td style="text-align:left;">多线程不安全问题</td><td style="text-align:left;">数据丢失；死循环</td><td style="text-align:left;">数据丢失</td></tr><tr><td style="text-align:left;">扩容操作</td><td style="text-align:left;">头插法</td><td style="text-align:left;">尾插法</td></tr></tbody></table><p>处理冲突：</p><ul><li>开散列法</li><li>红黑树：<code>putval</code>中，链表长度大于阈值（默认为 8）进行<code>treeifyBin</code>操作；<code>treeifyBin</code>中如果数组长度小于64进行数组扩容<code>resize</code>，否则将对应位置的链表转化为红黑树</li></ul><p>扩容操作：</p><ul><li>头插法：插入效率高，时间局部性；但是两个线程同时操作扩容时可能导致环形链表，死循环</li><li>尾插法：解决死循环问题</li></ul><h3 id="为什么hashmap的大小设计为2的幂" tabindex="-1"><a class="header-anchor" href="#为什么hashmap的大小设计为2的幂"><span>为什么HashMap的大小设计为2的幂</span></a></h3><p>如果<code>n = 2的幂</code>，则<code>hash % n == hash &amp; (n - 1)</code></p><p>所以将HashMap的大小设计为2的幂方便通过<code>hash</code>和<code>HashMap</code>的大小计算索引<code>index = (n - 1) &amp; hash</code></p><h3 id="为什么hashmap线程不安全" tabindex="-1"><a class="header-anchor" href="#为什么hashmap线程不安全"><span>为什么HashMap线程不安全</span></a></h3><p>多个线程对 <code>HashMap</code> 进行 <code>put</code> 操作可能出现数据覆盖导致数据丢失</p><p>扩容时出现死循环：为什么会出现死循环？（需要再去学习一下TODO）</p><h3 id="hashmap遍历方式" tabindex="-1"><a class="header-anchor" href="#hashmap遍历方式"><span>HashMap遍历方式</span></a></h3><p>7中遍历方式：</p><ul><li><p><code>iterator()</code></p><ul><li><code>map.entrySet().iterator();</code> 最快的</li><li><code>map.keySet().iterator();</code></li></ul></li><li><p><code>for (Map.Entry&lt;Integer, String&gt; entry : map.entrySet())</code></p></li><li><p><code>for (Integer key : map.keySet())</code></p></li><li><p><code>map.forEach((key, value) -&gt; {});</code></p></li><li><p><code>map.entrySet().stream().forEach((entry) -&gt; {}); </code></p></li><li><p><code>map.entrySet().parallelStream().forEach((entry) -&gt; {});</code></p></li></ul><h3 id="concurrenthashmap和hashtable的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap和hashtable的区别"><span>ConcurrentHashMap和HashTable的区别</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">ConcurrentHashMap</th><th style="text-align:left;">HashTable</th></tr></thead><tbody><tr><td style="text-align:left;">是否线程安全</td><td style="text-align:left;">是</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">底层数据结构</td><td style="text-align:left;">JDK1.7（分段数组+链表） vs JDK1.8（数组+链表/红黑树）</td><td style="text-align:left;">数组+链表</td></tr><tr><td style="text-align:left;">实现线程安全的方式</td><td style="text-align:left;">JDK1.7（分段锁） vs JDK1.8（<code>CAS</code>和 <code>synchronized</code> ）</td><td style="text-align:left;"><code>synchronized</code></td></tr></tbody></table><h3 id="concurrenthashmap-的底层实现" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-的底层实现"><span>ConcurrentHashMap 的底层实现</span></a></h3><table><thead><tr><th style="text-align:left;">区别</th><th style="text-align:left;">JDK1.7</th><th style="text-align:left;">JDK1.8</th></tr></thead><tbody><tr><td style="text-align:left;">底层数据结构</td><td style="text-align:left;"><code>Segment</code> 数组+ <code>HashEntry</code> 数组+链表</td><td style="text-align:left;"><code>Node&lt;K,V&gt;</code>数组 + 链表/红黑树</td></tr><tr><td style="text-align:left;">线程安全实现方式</td><td style="text-align:left;">对<code>Segment</code> 上锁，<code>Segment</code> 继承自<code>ReentrantLock</code></td><td style="text-align:left;"><code>CAS</code>（null的情况）+首节点<code>synchronized</code>上锁</td></tr><tr><td style="text-align:left;">并发度</td><td style="text-align:left;">最大并发度是 Segment 的个数，默认是 16</td><td style="text-align:left;">最大并发度是 Node 数组的大小</td></tr></tbody></table><h3 id="concurrenthashmap操作原子性" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap操作原子性"><span>ConcurrentHashMap操作原子性</span></a></h3><p>复合操作：多个基本操作(如<code>put</code>、<code>get</code>、<code>remove</code>、<code>containsKey</code>等)组成的操作</p><p>非原子性：这种操作在执行过程中可能会被其他线程打断，导致结果不符合预期</p><p>比如：按照1234的顺序执行，最终的结果是 (key, value)，而不是预期的 (key, anotherValue)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 线程 A</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token punctuation">}</span>
<span class="token comment">// 线程 B</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 2</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> anotherValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ConcurrentHashMap</code> 提供了一些原子性的复合操作：</p><ul><li><code>putIfAbsent</code></li><li><code>compute</code></li><li><code>computeIfAbsent</code></li><li><code>computeIfPresent</code></li><li><code>merge</code></li></ul><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue"><span>Queue</span></a></h2><p>FIFO原则</p><p>两套API的区别：因为容量问题操作失败的处理方式不同</p><ul><li>抛出异常：add、remove、element</li><li>返回特殊值：offer、poll、peek</li></ul><p><code>PriorityQueue</code>:</p><ul><li>实现结构：二叉堆（默认最小堆），<code>LinkedList</code></li><li>插入删除时间复杂度：<code>O(logn)</code></li><li>非线程安全</li><li>不能存储NULL和non-comparable对象</li></ul><p><code>BlockingQueue</code>：继承<code>Queue</code>的一个接口，应用场景：生产者-消费者模型</p>`,59),i=[s];function d(p,c){return e(),a("div",null,i)}const h=t(n,[["render",d],["__file","6. 集合.html.vue"]]),u=JSON.parse('{"path":"/backend/java/6.%20%E9%9B%86%E5%90%88.html","title":"集合","lang":"zh-CN","frontmatter":{"title":"集合","order":6,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"基础 Collection接口 List ArrayList LinkedList Set HashSet：基于HashMap LinkedHashSet：基于LinkedHashMap TreeSet：基于红黑树 Queue PriorityQueue Map HashMap LinkedHashMap HashTable ConcurrentHas...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/java/6.%20%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"集合"}],["meta",{"property":"og:description","content":"基础 Collection接口 List ArrayList LinkedList Set HashSet：基于HashMap LinkedHashSet：基于LinkedHashMap TreeSet：基于红黑树 Queue PriorityQueue Map HashMap LinkedHashMap HashTable ConcurrentHas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"存储Null的问题","slug":"存储null的问题","link":"#存储null的问题","children":[]}]},{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"ArrayList和Array的区别","slug":"arraylist和array的区别","link":"#arraylist和array的区别","children":[]},{"level":3,"title":"ArrayList和LinkedList的区别","slug":"arraylist和linkedlist的区别","link":"#arraylist和linkedlist的区别","children":[]}]},{"level":2,"title":"Set","slug":"set","link":"#set","children":[{"level":3,"title":"HashMap和HashSet的区别","slug":"hashmap和hashset的区别","link":"#hashmap和hashset的区别","children":[]},{"level":3,"title":"HashSet如何检查重复","slug":"hashset如何检查重复","link":"#hashset如何检查重复","children":[]},{"level":3,"title":"TreeSet","slug":"treeset","link":"#treeset","children":[]}]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[{"level":3,"title":"HashMap和HashTable的区别","slug":"hashmap和hashtable的区别","link":"#hashmap和hashtable的区别","children":[]},{"level":3,"title":"HashMap和TreeMap的区别","slug":"hashmap和treemap的区别","link":"#hashmap和treemap的区别","children":[]},{"level":3,"title":"HashMap的底层实现","slug":"hashmap的底层实现","link":"#hashmap的底层实现","children":[]},{"level":3,"title":"为什么HashMap的大小设计为2的幂","slug":"为什么hashmap的大小设计为2的幂","link":"#为什么hashmap的大小设计为2的幂","children":[]},{"level":3,"title":"为什么HashMap线程不安全","slug":"为什么hashmap线程不安全","link":"#为什么hashmap线程不安全","children":[]},{"level":3,"title":"HashMap遍历方式","slug":"hashmap遍历方式","link":"#hashmap遍历方式","children":[]},{"level":3,"title":"ConcurrentHashMap和HashTable的区别","slug":"concurrenthashmap和hashtable的区别","link":"#concurrenthashmap和hashtable的区别","children":[]},{"level":3,"title":"ConcurrentHashMap 的底层实现","slug":"concurrenthashmap-的底层实现","link":"#concurrenthashmap-的底层实现","children":[]},{"level":3,"title":"ConcurrentHashMap操作原子性","slug":"concurrenthashmap操作原子性","link":"#concurrenthashmap操作原子性","children":[]}]},{"level":2,"title":"Queue","slug":"queue","link":"#queue","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":4.73,"words":1419},"filePathRelative":"backend/java/6. 集合.md","localizedDate":"2024年5月14日","autoDesc":true}');export{h as comp,u as data};
