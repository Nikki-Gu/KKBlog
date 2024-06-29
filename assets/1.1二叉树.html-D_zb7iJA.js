import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as n,d}from"./app-BvhbkOZi.js";const l={},a=d(`<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h1><p>二叉树遍历框架</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>void traverse(TreeNode root) {
    if (root == null) {
        return;
    }
    // 前序位置
    traverse(root.left);
    // 中序位置 BST二叉查找树
    traverse(root.right);
    // 后序位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BFS层序遍历</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// 输入一棵二叉树的根节点，层序遍历这棵二叉树
void levelTraverse(TreeNode root) {
    if (root == null) return;
    Queue&lt;TreeNode&gt; q = new LinkedList&lt;&gt;();
    q.offer(root);

    // 从上到下遍历二叉树的每一层
    while (!q.isEmpty()) {
        int sz = q.size();
        // 从左到右遍历每一层的每个节点
        for (int i = 0; i &lt; sz; i++) {
            TreeNode cur = q.poll();
            // 将下一层节点放入队列
            if (cur.left != null) {
                q.offer(cur.left);
            }
            if (cur.right != null) {
                q.offer(cur.right);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深入理解迭代和递归" tabindex="-1"><a class="header-anchor" href="#深入理解迭代和递归"><span>深入理解迭代和递归</span></a></h3><p>🌰单链表和数组的遍历可以是迭代的，也可以是递归的</p><p>只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后</p><p><strong>二叉树无非就是二叉链表</strong>，由于没办法简单改写成迭代形式，所以一般二叉树的遍历框架都是递归的形式</p><p>时间复杂度还是<code>O(n)</code></p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>/* 迭代遍历数组 */
void traverse(int[] arr) {
    for (int i = 0; i &lt; arr.length; i++) {

    }
}

/* 递归遍历数组 */
void traverse(int[] arr, int i) {
    if (i == arr.length) {
        return;
    }
    // 前序位置
    traverse(arr, i + 1);
    // 后序位置
}

/* 迭代遍历单链表 */
void traverse(ListNode head) {
    for (ListNode p = head; p != null; p = p.next) {

    }
}

/* 递归遍历单链表 */
void traverse(ListNode head) {
    if (head == null) {
        return;
    }
    // 前序位置
    traverse(head.next);
    // 后序位置
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰倒序打印单链表节点值</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>void traverse(ListNode head) {
	if (head == null) {
		return;
	}
	traverse(head.next);
	print(head.val);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>前中后序的区别在于处理每个节点的时间点</strong></p><p>二叉树问题：在前中后序位置注入巧妙的代码逻辑，去达到自己的目的，只需要单独思考每一个节点应该做什么</p><h3 id="回溯思路和动态规划的思路" tabindex="-1"><a class="header-anchor" href="#回溯思路和动态规划的思路"><span>回溯思路和动态规划的思路</span></a></h3><p>回溯是一步一步做的，结果存放在外部变量中；关注路径，算法框架如下:</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>void backtrack(...) {
    for (int i = 0; i &lt; ...; i++) {
        // 做选择
        ...

        // 进入下一层决策树
        backtrack(...);

        // 撤销刚才做的选择
        ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态规划是根据base case、状态转移方程来决定的；不需要额外的辅助函数和外部变量；关注子问题和子问题结果</p><p>普通的DFS遍历关注的是节点</p><p>🌰求前序序列</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// 回溯
List&lt;Integer&gt; res = new LinkedList&lt;&gt;();

// 返回前序遍历结果
List&lt;Integer&gt; preorderTraverse(TreeNode root) {
    traverse(root);
    return res;
}

// 二叉树遍历函数
void traverse(TreeNode root) {
    if (root == null) {
        return;
    }
    // 前序位置
    res.add(root.val);
    traverse(root.left);
    traverse(root.right);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// 动态规划
// 定义：输入一棵二叉树的根节点，返回这棵树的前序遍历结果
List&lt;Integer&gt; preorderTraverse(TreeNode root) {
    List&lt;Integer&gt; res = new LinkedList&lt;&gt;();
    if (root == null) {
        return res;
    }
    // 前序遍历的结果，root.val 在第一个
    res.add(root.val);
    // 利用函数定义，后面接着左子树的前序遍历结果
    res.addAll(preorderTraverse(root.left));
    // 利用函数定义，最后接着右子树的前序遍历结果
    res.addAll(preorderTraverse(root.right));
    return res;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>存在问题：<strong>算法的复杂度不好把控</strong>，比较依赖语言特性。Java 的话无论 ArrayList 还是 LinkedList，<code>addAll</code> 方法的复杂度都是 O(N)，所以总体的最坏时间复杂度会达到 O(N^2)</p></blockquote><h3 id="前序和后序的区别" tabindex="-1"><a class="header-anchor" href="#前序和后序的区别"><span>前序和后序的区别</span></a></h3><p>🌰根节点看做第 1 层，打印出每一个节点所在的层数</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// 二叉树遍历函数
void traverse(TreeNode root, int level) {
    if (root == null) {
        return;
    }
    // 前序位置
    printf(&quot;节点 %s 在第 %d 层&quot;, root, level);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
}

// 这样调用
traverse(root, 1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌰打印出每个节点的左右子树节点数量</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>// 定义：输入一棵二叉树，返回这棵二叉树的节点总数
int count(TreeNode root) {
    if (root == null) {
        return 0;
    }
    int leftCount = count(root.left);
    int rightCount = count(root.right);
    // 后序位置
    printf(&quot;节点 %s 的左子树有 %d 个节点，右子树有 %d 个节点&quot;,
            root, leftCount, rightCount);

    return leftCount + rightCount + 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遇到子树问题，首先想到的是给函数设置返回值，然后在后序位置做文章。</p>`,30),s=[a];function r(v,t){return n(),i("div",null,s)}const o=e(l,[["render",r],["__file","1.1二叉树.html.vue"]]),m=JSON.parse(`{"path":"/algorithm/Hot100/1.1%E4%BA%8C%E5%8F%89%E6%A0%91.html","title":"二叉树","lang":"zh-CN","frontmatter":{"title":"二叉树","order":2,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"二叉树 二叉树遍历框架 BFS层序遍历 深入理解迭代和递归 🌰单链表和数组的遍历可以是迭代的，也可以是递归的 只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后 二叉树无非就是二叉链表，由于没办法简单改写成迭代形式，所以一般二叉树的遍历框架都是递归的形式 时间复杂度还是O(n) 🌰倒序打印单链表节点值 前中后序的区别在于处理...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/KKBlog/algorithm/Hot100/1.1%E4%BA%8C%E5%8F%89%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"KK's Blog"}],["meta",{"property":"og:title","content":"二叉树"}],["meta",{"property":"og:description","content":"二叉树 二叉树遍历框架 BFS层序遍历 深入理解迭代和递归 🌰单链表和数组的遍历可以是迭代的，也可以是递归的 只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后 二叉树无非就是二叉链表，由于没办法简单改写成迭代形式，所以一般二叉树的遍历框架都是递归的形式 时间复杂度还是O(n) 🌰倒序打印单链表节点值 前中后序的区别在于处理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\",\\"url\\":\\"https://github.com/Nikki-Gu\\"}]}"]]},"headers":[{"level":3,"title":"深入理解迭代和递归","slug":"深入理解迭代和递归","link":"#深入理解迭代和递归","children":[]},{"level":3,"title":"回溯思路和动态规划的思路","slug":"回溯思路和动态规划的思路","link":"#回溯思路和动态规划的思路","children":[]},{"level":3,"title":"前序和后序的区别","slug":"前序和后序的区别","link":"#前序和后序的区别","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1043},"filePathRelative":"algorithm/Hot100/1.1二叉树.md","localizedDate":"2024年5月14日","autoDesc":true}`);export{o as comp,m as data};
