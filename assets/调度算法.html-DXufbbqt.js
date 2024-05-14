import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as n}from"./app-ARawJAy0.js";const s={},p=n(`<h2 id="进程调度" tabindex="-1"><a class="header-anchor" href="#进程调度"><span>进程调度</span></a></h2><p>先来先服务：FIFO队列；不利于短作业</p><p>最短作业优先：按照长短排序；不利于长作业</p><p>高响应比优先：响应比优先级 = 等待时间/ 要求服务时间 + 1</p><ul><li>等待时间相同，越短优先级越高</li><li>要求服务时间相同，等待时间越长优先级越高</li></ul><p>时间片轮转：固定的时间片运行时间</p><p>优先级调度：优先级越高越先执行</p><p>多级反馈队列调度：多个不同优先级的队列</p><ul><li>优先级越高运行时间片越短</li><li>新的进程会被放入到第一级队列的末尾，按先来先服务的原则排队等待被调度，如果在第一级队列规定的时间片没运行完成，则将其转入到第二级队列的末尾，以此类推，直至完成；</li><li>当较高优先级的队列为空，才调度较低优先级的队列中的进程运行。如果进程运行时，有新进程进入较高优先级的队列，则停止当前运行的进程并将其移入到原队列末尾，接着让较高优先级的进程运行；</li></ul><h2 id="页面置换算法" tabindex="-1"><a class="header-anchor" href="#页面置换算法"><span>页面置换算法</span></a></h2><p>OPT最佳页面置换算法：<strong>置换在「未来」最长时间不访问的页面</strong>。</p><p>FIFO先进先出</p><p>Lock时钟：遇到访问位为1的修改为0，第一个访问位为0的淘汰</p><ul><li>当一个页面被装入内存时，把该位初始化为0</li><li>如果这个页面被访问（读/写），则把该位置为1；</li><li>把各个页面组织成环形链表（类似于钟表面），把指针指向最老的页面（最先进来）；</li></ul><p>LRU（Least Recently Used）最近最久未使用：<strong>选择最长时间没有被访问的页面进行置换</strong>，就是选择最久没有使用的页面换出</p><ul><li>使用LinkedHashMap实现，双向链表 + HashMap <ul><li>双向链表是为了删除方便</li><li>HashMap是为了快速定位节点位置</li></ul></li></ul><p>LFU（Least frequently Used）最不频繁访问的：每个页面对应一个访问次数，淘汰访问次数最小的页面</p><ul><li><p>使用HashMap + LinkedHashSet</p><ul><li><p>使用一个 <code>HashMap</code> 存储 <code>key</code> 到 <code>val</code> 的映射，就可以快速计算 <code>get(key)</code></p></li><li><p>使用一个 <code>HashMap</code> 存储 <code>key</code> 到 <code>freq</code> 的映射，就可以快速操作 <code>key</code> 对应的 <code>freq</code></p></li><li><p>需要 <code>freq</code> 到 <code>key</code> 的映射，用来找到 <code>freq</code> 最小的 <code>key</code>；一个freq对应多个key；需要移动key实现freq +1</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> freqToKeys<span class="token punctuation">;</span>
<span class="token keyword">int</span> minFreq <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="磁盘调度算法" tabindex="-1"><a class="header-anchor" href="#磁盘调度算法"><span>磁盘调度算法</span></a></h2><p>按照半径不同划分磁道（0-199），每个磁道上多个扇区</p><p>磁盘调度算法是要优化磁盘的访问请求顺序，减少移动的磁道的距离</p><p>先到先服务</p><p>最短寻道时间：会导致饥饿，总是访问一个范围内的磁道，远的被饥饿</p><p>扫描算法/电梯算法：固定一个方向扫描服务请求，直到到头再改变方向并继续服务；中间访问频率高，两边访问频率少，每个磁道响应的频率存在差异</p><p>循环扫描C-SCAN：磁道只有朝固定方向移动时响应请求，然后快速回到原点中途不响应</p><p>LOOK：<strong>磁头在移动到「最远的请求」位置，然后立即反向移动</strong>，<strong>反向移动的途中会响应请求</strong></p><p>C-LOOK：磁道只有朝固定方向移动时响应请求，然后快速回到最远请求位置，返回中途不响应</p>`,27),o=[p];function l(c,i){return a(),t("div",null,o)}const u=e(s,[["render",l],["__file","调度算法.html.vue"]]),m=JSON.parse('{"path":"/backend/cs-base/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95.html","title":"调度算法","lang":"zh-CN","frontmatter":{"title":"调度算法","order":1,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"进程调度 先来先服务：FIFO队列；不利于短作业 最短作业优先：按照长短排序；不利于长作业 高响应比优先：响应比优先级 = 等待时间/ 要求服务时间 + 1 等待时间相同，越短优先级越高 要求服务时间相同，等待时间越长优先级越高 时间片轮转：固定的时间片运行时间 优先级调度：优先级越高越先执行 多级反馈队列调度：多个不同优先级的队列 优先级越高运行时间...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/cs-base/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"调度算法"}],["meta",{"property":"og:description","content":"进程调度 先来先服务：FIFO队列；不利于短作业 最短作业优先：按照长短排序；不利于长作业 高响应比优先：响应比优先级 = 等待时间/ 要求服务时间 + 1 等待时间相同，越短优先级越高 要求服务时间相同，等待时间越长优先级越高 时间片轮转：固定的时间片运行时间 优先级调度：优先级越高越先执行 多级反馈队列调度：多个不同优先级的队列 优先级越高运行时间..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"调度算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":2,"title":"进程调度","slug":"进程调度","link":"#进程调度","children":[]},{"level":2,"title":"页面置换算法","slug":"页面置换算法","link":"#页面置换算法","children":[]},{"level":2,"title":"磁盘调度算法","slug":"磁盘调度算法","link":"#磁盘调度算法","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":3.07,"words":921},"filePathRelative":"backend/cs-base/操作系统/调度算法.md","localizedDate":"2024年5月14日","autoDesc":true}');export{u as comp,m as data};
