import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,a as n,b as s,d as e,e as t}from"./app-ARawJAy0.js";const c={},r=t(`<h2 id="异或运算" tabindex="-1"><a class="header-anchor" href="#异或运算"><span>异或运算</span></a></h2><p>规则：相同为0，不同为1</p><h3 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h3><p>满足交换律、结合律</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>a ^ a = 0
a ^ 0 = a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>不使用临时变量交换两个变量的值</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a <span class="token operator">^=</span> b<span class="token punctuation">;</span>
b <span class="token operator">^=</span> a<span class="token punctuation">;</span>
a <span class="token operator">^=</span> b<span class="token punctuation">;</span>
<span class="token comment">// 现在 a = 2, b = 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>判断两个变量是否异号</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>int x = -1, y = 2;
boolean f = ((x ^ y) &lt; 0); // true

int x = 3, y = 2;
boolean f = ((x ^ y) &lt; 0); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),d={href:"https://leetcode.cn/problems/missing-number/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://leetcode.cn/problems/single-number/description/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="与运算" tabindex="-1"><a class="header-anchor" href="#与运算"><span>与运算</span></a></h2><h3 id="n-n-1" tabindex="-1"><a class="header-anchor" href="#n-n-1"><span><code>n &amp; (n - 1) </code></span></a></h3><p><code>n &amp; (n - 1) </code>用于消除n的二进制表示的最后一个1</p><h4 id="bitcount" tabindex="-1"><a class="header-anchor" href="#bitcount"><span><code>bitCount</code></span></a></h4><p>同样可以用于计算n的二进制表示中1的个数</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bitCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n <span class="token operator">&amp;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        res<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断一个数是不是-2-的指数" tabindex="-1"><a class="header-anchor" href="#判断一个数是不是-2-的指数"><span>判断一个数是不是 2 的指数</span></a></h4><p>一个数如果是 2 的指数，那么它的二进制表示一定只含有一个 1</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断奇偶" tabindex="-1"><a class="header-anchor" href="#判断奇偶"><span>判断奇偶</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>if ((num &amp; 1) == 1) odd
else even
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移位运算" tabindex="-1"><a class="header-anchor" href="#移位运算"><span>移位运算</span></a></h2><ol><li><p><code>&gt;&gt;</code>是算术右移，负数补1，正数补0；</p></li><li><p><code>&gt;&gt;&gt;</code>是逻辑右移，统一补0；</p><p>Java没有unsigned类型，只有int，所以想要使用移位运算计算1的个数最好都使用逻辑右移</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">bitCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          res <span class="token operator">+=</span> n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span>
          n <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,13);function v(k,b){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",d,[s("🌰丢失的数字"),e(a)])]),n("p",null,[n("a",u,[s("🌰只出现一次的数字"),e(a)])]),m])}const x=p(c,[["render",v],["__file","1.5位运算.html.vue"]]),y=JSON.parse('{"path":"/algorithm/Hot100/1.5%E4%BD%8D%E8%BF%90%E7%AE%97.html","title":"位运算","lang":"zh-CN","frontmatter":{"title":"位运算","order":5,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"异或运算 规则：相同为0，不同为1 性质 满足交换律、结合律 不使用临时变量交换两个变量的值 判断两个变量是否异号 🌰丢失的数字 🌰只出现一次的数字 与运算 n & (n - 1) n & (n - 1) 用于消除n的二进制表示的最后一个1 bitCount 同样可以用于计算n的二进制表示中1的个数 判断一个数是不是 2 的指数 一个数如果是 2 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/algorithm/Hot100/1.5%E4%BD%8D%E8%BF%90%E7%AE%97.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"位运算"}],["meta",{"property":"og:description","content":"异或运算 规则：相同为0，不同为1 性质 满足交换律、结合律 不使用临时变量交换两个变量的值 判断两个变量是否异号 🌰丢失的数字 🌰只出现一次的数字 与运算 n & (n - 1) n & (n - 1) 用于消除n的二进制表示的最后一个1 bitCount 同样可以用于计算n的二进制表示中1的个数 判断一个数是不是 2 的指数 一个数如果是 2 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"位运算\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":2,"title":"异或运算","slug":"异或运算","link":"#异或运算","children":[{"level":3,"title":"性质","slug":"性质","link":"#性质","children":[]}]},{"level":2,"title":"与运算","slug":"与运算","link":"#与运算","children":[{"level":3,"title":"n & (n - 1)","slug":"n-n-1","link":"#n-n-1","children":[]},{"level":3,"title":"判断奇偶","slug":"判断奇偶","link":"#判断奇偶","children":[]}]},{"level":2,"title":"移位运算","slug":"移位运算","link":"#移位运算","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"algorithm/Hot100/1.5位运算.md","localizedDate":"2024年5月14日","autoDesc":true}');export{x as comp,y as data};
