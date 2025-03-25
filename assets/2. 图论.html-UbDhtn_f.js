import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as o,e as a,w as e,d as i,a as n,o as c}from"./app-BNO0IUoW.js";const p={},r=i('<h1 id="图" tabindex="-1"><a class="header-anchor" href="#图"><span>图</span></a></h1><h2 id="hot100" tabindex="-1"><a class="header-anchor" href="#hot100"><span>Hot100</span></a></h2><h3 id="_1-岛屿数量" tabindex="-1"><a class="header-anchor" href="#_1-岛屿数量"><span>1. 岛屿数量</span></a></h3><p>Floodfill算法，图的DFS</p>',4),u=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        int m = grid.length, n = grid[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }
    private void dfs(char[][] grid, int i, int j) {
        int m = grid.length, n = grid[0].length;
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        if (grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("h3",{id:"_2-腐烂的橘子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-腐烂的橘子"},[n("span",null,"2. 腐烂的橘子")])],-1),v=n("p",null,"图的BFS，用队列实现",-1),m=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    public int orangesRotting(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        Queue<int[]> rot = new LinkedList<>(); // 放这一轮腐烂的橙子[bfs的层]
        int num = 0; // 计数所有橙子的数量
        int step = 0; // 计数分钟数
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    num++;
                }
                if (grid[i][j] == 2) {
                    num++;
                    rot.add(new int[]{i, j}); // 初始化队列
                }
            }
        }
        if (num == 0) return 0;
        while (!rot.isEmpty()) { // 队列不为空，表示有可以继续遍历/腐烂的橙子
            int sz = rot.size();
            num -= sz; // 保存剩余新鲜橙子的数量
            step++;
            // 腐烂这一轮能腐烂的所有橙子
            for (int k = 0; k < sz; k++) {
                int[] tmp = rot.poll();
                int i = tmp[0], j = tmp[1];
                rotted(grid, i + 1, j, rot);
                rotted(grid, i - 1, j, rot);
                rotted(grid, i, j + 1, rot);
                rotted(grid, i, j - 1, rot);
            }
        }
        return num == 0 ? step - 1 : -1;
    }
    private void rotted(int[][] grid, int i, int j, Queue<int[]> rot) {
        int m = grid.length, n = grid[0].length;
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        if (grid[i][j] == 2 || grid[i][j] == 0) return;
        grid[i][j] = 2;
        rot.add(new int[]{i, j});
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h3",{id:"_3-单词搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-单词搜索"},[n("span",null,"3. 单词搜索")])],-1),k=n("p",null,"岛屿数量+回溯",-1),h=n("p",null,"使用visited数组防止重复使用，但是可以重复遍历，所以需要回溯退出的时候修改为false",-1),g=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    boolean hasWord = false;
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                boolean[][] visited = new boolean[m][n];
                if (!hasWord) {
                    dfs(board, word, i, j, 0, visited);
                }
            }
        }
        return hasWord;
    }
    private void dfs(char[][] board, String word, int i, int j, int index, boolean[][] visited) {
        if (index == word.length()) {
            hasWord = true;
            return;
        }
        int m = board.length, n = board[0].length;
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        if (hasWord || visited[i][j]) return;

        if (board[i][j] == word.charAt(index)) {
            visited[i][j] = true;
            dfs(board, word, i + 1, j, index + 1, visited);
            dfs(board, word, i - 1, j, index + 1, visited);
            dfs(board, word, i, j + 1, index + 1, visited);
            dfs(board, word, i, j - 1, index + 1, visited);
            visited[i][j] = false;
        }
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h3",{id:"_4-课程表canfinish",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-课程表canfinish"},[n("span",null,"4. 课程表canFinish")])],-1),j=n("p",null,"图的环检测",-1),E=n("p",null,"应用：编译器的循环引用检测",-1),w=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    boolean[] visited; // 用于剪枝，避免冗余计算
    boolean[] onPath; // 用于判断是否有环
    boolean hasCycle;

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        visited = new boolean[numCourses];
        onPath = new boolean[numCourses];
        // build graph
        List<Integer>[] graph = new LinkedList[numCourses];
      	
        for (int i = 0; i < numCourses; i++) { 
            graph[i] = new LinkedList<>(); // 先new 数组里面的对象
        }
        for (int[] edge : prerequisites) {
            graph[edge[0]].add(edge[1]); // 先new 数组里面的对象
        }
        
        // judge 图中并不是所有节点都相连，所以要用一个 for 循环将所有节点都作为起点调用一次 DFS 搜索算法
        for (int i = 0; i < numCourses; i++) {
            // 遍历图中的所有未访问过的节点
            if (!visited[i]) {
                traverse(graph, i);
            }
        }
        // 没有环就可以完成所有课程
        return !hasCycle;
    }
    private void traverse(List<Integer>[] graph, int v) {
        if (onPath[v]) {
            hasCycle = true;
        }
        if (visited[v] || hasCycle) return;

        visited[v] = true;
        onPath[v] = true;
        for (int pre : graph[v]) {
            traverse(graph, pre);
        }
        onPath[v] = false;
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=i('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意图中并不是所有节点都相连，所以要用一个 for 循环将所有节点都作为起点调用一次 DFS 搜索算法</p><ul><li>hasCycle 用于记录是否已经监测到有环，有的话直接返回，不用继续遍历</li><li>visited 是用来剪枝的 <ul><li>for循环中：对于访问过的节点，肯定已经对它的所有子节点都遍历过了，判断过从它开始遍历是否有环了，不需要重复判断，所以只需要在for循环中对从来没访问过的!visited[v]进行traverse</li><li>traverse函数中：如果visited[v]直接返回</li></ul></li><li>onPath是用来判断是否有环的 <ul><li>需要放在for循环外面，否则会漏掉最开始的节点，没法逻辑统一</li></ul></li></ul></div><h4 id="课程表2" tabindex="-1"><a class="header-anchor" href="#课程表2"><span>课程表2</span></a></h4><p>拓扑排序=图是否有环+后序遍历</p><p>有向无环图，拉平，箭头方向一致</p><p>基于课程表添加上后序遍历[不需要反转，因为这里建树是反的]</p><blockquote><p>后序遍历反转的结果不等同于前序遍历结果。后序位置的代码是等到左右子树都遍历完才执行的，只有它才能体现出「依赖」关系，其他遍历顺序都做不到。</p></blockquote>',6),x=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    boolean[] visited, onPath;
    boolean hasCycle;
    List<Integer> order = new LinkedList<>();

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<Integer>[] graph = buildGraph(numCourses, prerequisites);
        visited = new boolean[numCourses];
        onPath = new boolean[numCourses];

        for (int i = 0; i < numCourses; i++) {
            traverse(graph, i);
        }
        if (hasCycle) {
            return new int[]{};
        }
        // 放入int[]数组中
        int[] res = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            res[i] = order.get(i);
        }
        return res;
    }
    private void traverse(List<Integer>[] graph, int v) {
        if (onPath[v]) {
            hasCycle = true;
        }
        if (visited[v] || hasCycle) return;
        visited[v] = true;
        onPath[v] = true;
        for (int child : graph[v]) {
            traverse(graph, child);
        }
        onPath[v] = false;
        order.add(v); // 后序遍历
    }
    private List<Integer>[] buildGraph(int numCourses, int[][] prerequisites) {
        List<Integer>[] graph = new LinkedList[numCourses];
        for (int i = 0; i < numCourses; i++) {
            graph[i] = new LinkedList<>();
        }
        for (int[] edge : prerequisites) {
            graph[edge[0]].add(edge[1]);
        }
        return graph;
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=i(`<h2 id="图的基础知识" tabindex="-1"><a class="header-anchor" href="#图的基础知识"><span>图的基础知识</span></a></h2><h3 id="存储方式" tabindex="-1"><a class="header-anchor" href="#存储方式"><span>存储方式</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 邻接表</span>
<span class="token comment">// 有向图 graph[x] 存储 x 的所有邻居节点</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> graph<span class="token punctuation">;</span>
<span class="token comment">// 有向加权图 graph[x] 存储 x 的所有邻居节点以及对应的权重</span>
<span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> graph<span class="token punctuation">;</span>

<span class="token comment">// 邻接矩阵</span>
<span class="token comment">// 有向图 matrix[x][y] 记录 x 是否有一条指向 y 的边</span>
<span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">;</span>
<span class="token comment">// 有向加权图 matrix[x][y] 记录 x 指向 y 的边的权重，0 表示不相邻</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>邻接表 <ul><li>占用空间少</li><li>无法快速判断两个节点是否相邻</li></ul></li><li>度 <ul><li>每个节点相连的边的条数</li><li>有向图的边有方向：入度和出度</li></ul></li><li>无向图 = 双向图 <ul><li>如果无向图中的节点 <code>x</code> 和 <code>y</code>有边：</li><li>把 <code>matrix[x][y]</code> 和 <code>matrix[y][x]</code> 都变成 <code>true</code></li><li>在 <code>x</code> 的邻居列表里添加 <code>y</code>，同时在 <code>y</code> 的邻居列表里添加 <code>x</code></li></ul></li></ul><h3 id="图的dfs基本框架" tabindex="-1"><a class="header-anchor" href="#图的dfs基本框架"><span>图的DFS基本框架</span></a></h3><p>需要使用visited数组防止重复遍历</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span> n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 超出索引边界</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 已遍历过 (i, j)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 进入节点 (i, j)</span>
    visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// 递归遍历上下左右的节点</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 离开节点 (i, j)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="岛屿系列问题-todo" tabindex="-1"><a class="header-anchor" href="#岛屿系列问题-todo"><span>岛屿系列问题 TODO</span></a></h2><p><strong>核心考点：用 DFS算法遍历二维数组</strong></p><ol><li><p>岛屿数量</p></li><li><p>封闭岛屿数量</p><p>边缘的岛屿不算，需要先淹掉</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>飞地的数量：和2相似，先把靠边的陆地淹掉，然后去数剩下的陆地数量就行了</p></li><li><p>统计子岛屿的数量：正难则反，把那些不可能是子岛的岛屿排除掉，剩下的就是子岛，再统计岛屿的数量即可（即1）</p><p><strong>如果岛屿 <code>B</code> 中存在一片陆地，在岛屿 <code>A</code> 的对应位置是海水，那么岛屿 <code>B</code> 就不是岛屿 <code>A</code> 的子岛</strong>。</p></li><li><p>不同岛屿数量：回溯算法</p><p>https://labuladong.online/algo/frequency-interview/island-dfs-summary/#%E4%B8%8D%E5%90%8C%E7%9A%84%E5%B2%9B%E5%B1%BF%E6%95%B0%E9%87%8F</p><p>HashSet&lt;String&gt;</p><p>StringBuilder sb = new StringBuilder()</p></li></ol><h2 id="基础题目" tabindex="-1"><a class="header-anchor" href="#基础题目"><span>基础题目</span></a></h2><h3 id="_1-所有可能的路径" tabindex="-1"><a class="header-anchor" href="#_1-所有可能的路径"><span>1. 所有可能的路径</span></a></h3><p>回溯</p>`,13),_=n("div",{class:"language-Java line-numbers-mode","data-ext":"Java","data-title":"Java"},[n("pre",{class:"language-Java"},[n("code",null,`class Solution {
    List<List<Integer>> res = new LinkedList<>();
    List<Integer> path = new LinkedList<>();
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        path.add(0);
        traverse(graph, 0);
        return res;
    }
    private void traverse(int[][] graph, int s) {
        int n = graph.length;
        if (s == n - 1) {
            res.add(new LinkedList(path));
            return;
        }
        for (int v : graph[s]) {
            path.add(v);
            traverse(graph, v);
            path.removeLast();
        }
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=i(`<h3 id="_2-最小生成树-todo" tabindex="-1"><a class="header-anchor" href="#_2-最小生成树-todo"><span>2. 最小生成树 TODO</span></a></h3><p>Kruskal算法</p><p>Prim算法</p><h3 id="_3-最短路径-todo" tabindex="-1"><a class="header-anchor" href="#_3-最短路径-todo"><span>3. 最短路径 TODO</span></a></h3><p>Dijkstra算法</p><h3 id="_4-名流问题" tabindex="-1"><a class="header-anchor" href="#_4-名流问题"><span>4. 名流问题</span></a></h3><p>名人节点的出度为 0，入度为 <code>n - 1</code></p><p>最优解法：时间复杂度为 O(N)，空间复杂度为 O(1)</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">findCelebrity</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先假设 cand 是名人</span>
    <span class="token keyword">int</span> cand <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> other <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> other <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> other<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">knows</span><span class="token punctuation">(</span>other<span class="token punctuation">,</span> cand<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">knows</span><span class="token punctuation">(</span>cand<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// cand 不可能是名人，假设 other 是名人</span>
            cand <span class="token operator">=</span> other<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 现在的 cand 是排除的最后结果，验证</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> other <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> other <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> other<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cand <span class="token operator">==</span> other<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">knows</span><span class="token punctuation">(</span>other<span class="token punctuation">,</span> cand<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">knows</span><span class="token punctuation">(</span>cand<span class="token punctuation">,</span> other<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cand<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function C(F,J){const s=l("CodeDemo");return c(),o("div",null,[r,a(s,{id:"code-demo-12",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJyVUctugzAQ/JUVl4CgFbm2pff22iPl4PJIjIwd+cElyb93bRzJJuSQFWLNzszuMj4n32QmyVvSMqIU/AhmNBUczr8cME7mj9EWKNfAzfSlGOGdStsjkXVTN3CQtMtuXBuW2AqD7wrK97g+Yc0KXlnPD/pYAPeFumx8LVAMQkJqZdS1wvQBE6Y8jwZG1HGhjkjlmDaobpcBUjeWNvXYQFXBbr/bZNpwf5PnwWZhdINyvQqgBYzZBusal4LP4Ch7bSRfZvkeHj1JOhPdwyxo56ZF3uNY69CSxrubeM5x64t1uYTLxXnoDhQ+K2zkSnjimV92JVwZWqKhd7yQYykBFPsIOexDL1foy0PUClf3EKIoDFB0GJ/k+g80PszQ"},{default:e(()=>[u]),_:1}),d,v,a(s,{id:"code-demo-21",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJylVE9PGlEQ/ypTThDwDx5V7KmXxkvbI90DyoIPlrdk94GpSGK1tZBqNU210miMSRvLAUt7IlDql2H5c+pX6MxbkF2EVOPLJvt29jfzfjPze5PzPI1kI555z6oWMU14oWsZwXQOuZcccKUzKxpbBcYF6EaEx1XzuS4E43EvmsJKWIG4waK+AZwWYVMQkj+mNZXHxVoAeN8QnlX6toWhx7OMmlEXZcAlMHSBWK6uwzLjSTW6zEyxuOT1LcDMDLQ//elel1q1rW7zqvv2sLOz3fnypl0uWZXD8ErMxA/r57bi5sIzxGZW+nevLtpH1XZxq31atN3I/6jae3fgdjKFmh7xsgq7vY/nuBkiY7oBVAhgNpbBIqTw5fe7KuKCJmxoAqEcX2OgkkMMvLJeTAknFAiFIDgWRwsT9Psd5Rys/F3Czt07LC1s0nQkGvVSm2TfciwAibzdJKtwZl2+t/aOeyfnVuHzf4k5Ph1boipbh+XygaGKjMGxcEPA+hrTVPA+Ii7MfJJKi1deH2ZDFOyTW7X9Vq3eKdf//t7rXnzvfK1j262DH63Gt07jstOo9F7vWx92Z0aU5GYn1bCBTaNzTLahohTdCGI5FUKQzL51fWZVTqxiudUstY+rvV+nE4VGi4R2q8ykOclpKPad5pClQ74TRJa0RZZEkRGt5CSVUetApEjqlF5a17Rb6Q2KQBpHKN5gbHV/H1TGgDGSUKNSZwH08kMQHQJkHhd6BD11HzQRkeHvjJbhx6DHa7CvuoEM4bE9FzAIzMNUsB+j75A2WDYiVMjqLDo42TkkkQFV0X5hhqNT74FDlO4LzZ9Z2NyU00VuGCyFMJA04Y4PbtKI48hMILzbdHMFHY5OBMw5fkycDjf1wseT/weoVBCd"},{default:e(()=>[m]),_:1}),b,k,h,a(s,{id:"code-demo-33",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJylVE1vgzAM/SseJ1DZxK7rmLTrrj3swDikJbRBNFQh0Ept//ucD1gy2CZ1EZIT5z3HfrY4B2+kJ8FTsKlJ28KqqTvJGg7nDw641k1TU8JhR9r3RhSQQknqli7N7aFb12wzguiJtTLc7IjI8ixHNxFFDCspGN/CEenREFYtxiXsMaCGPdSUb+UuBj54siS3TvuYWmUjIFREhrBkieYZ9mgWCy+0B60MtEIoRzMDdQrVifesZZKqYjk9jjf7POO5k8tYRwnhndVnNrRaRdmGVg8lRAwshiqGJB4ei2YiX32Xc3S2gspOjA2yUez9QbCeSAp9wwqdwi+9wZSUrsZgavrEC3qK57TxO4kKaCikqY5lGxdGEz2+5kiKbhgjvxTH6ZR5y7TovLDtCVwuuv96w+AlxVDahTseTd9VxCFTxNmaM5ZnVe7AfYLJQ2NGHZTer9KIMxXDizsvyXRuYAGPenaM4vr0wwzNkO//QUaiYdxK1o//Tf4ui/vHcaYCDX7B9RM4cFoz"},{default:e(()=>[g]),_:1}),f,j,E,a(s,{id:"code-demo-45",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJydVEtvElEU/iu3rCA1tm7b2k1NE00XJl3SWUyZ23J1vIPzMqZt0icFBWRhRS1tQqNNQyxQn9AK/Jm5M8PKv+CZGWCGR4x6QwL3ntf3nfMdNkIPeJ0PzYRiIq8oaFkSNZVIFG2sUARnVZJEzNMoh3SiEBULs2hqClmvL4zrHEuXzdOTXz8znZ02O8iyZMFovrMrJatSGA6W6ENejQdjUx/MN5fm2yrLn5vFtJWrDoSgOK8sPI+JeHaFeoaEtiqSWN8e4+kioUSJhwlVEdWeLEiarGDlFoJ7lIOSCRnL+KnmolYiPT7O6TJBdxHFz/og/RwcFO35esD/yhW4rWpEFNC6zCfi/vsSUdS5+1TF61ieB2CuuZtxidDHWHA8xiZdUf00a5KMXLIEYqdn4WsuwBvuk5PAEvkBznFrRQk3Um5uPhxxx8EOUo7FPKpZN/udw0zn5Mx6v8+qDfuq5OfaGsUBTLCwjtHMHzrtQ3Bco9Mcd5sXhLB7ucP9J4CBjj/SHAzsuGXUL1nju1HPgqbM9DZoyn6xa+02OntN67hut09Bp/Bu3Hy0z3ccDda3jXrZZcNaZdAfqyWH4oxm0ahf299+wNWu7XlB5qcSure4jMx80fp6BlI3vxz965AGGwQsOjtZlkt6LIC8h8Mslu1Ku1Oo2O1DePRgDYaSNRSe6MoZpjyS2jmqzOsYqofdQcB+RAKaHWpt4CegMj+XvNVktSv2qgqtY5WMmcp321RtWRcv/QAZq5pM0URgcwMpEzLReRUjXSKCD2nsargrjPQBMg5RbxWj+ijNXknouSprvcpDhJwUvVbpHNrc7IdFutj7/zXOCbiOZO0jGTX1BQBLAavhiX8M5OGpgHtwLgHcwWJrvKgEGguf0NZv9g0s3g=="},{default:e(()=>[w]),_:1}),y,a(s,{id:"code-demo-106",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJytVMtO20AU/ZWrrByBCt0SyoZF1apSK3WZejHJ3CSjujPpzNhVFbKoVNjxWMAnsERiiUDiawiIv+DOeBzb2GGBGEVKJvd1zrnHnnU+s4x1tjrDhBkD31WSWqEkzH5IoDNQKkEm+zFkwgiLfB2U/MbspFeLw4SZ3b/DBMPfX4Sx25+kxTHqHVCao4YPIPEPReRP5D6+E3UpPS+YpoNEDEFIS6NGQvKvriaiO8j0165KtUGznscpY6pR4+/UQzLdAmxjMmWONZtOaPYgFQn/6C5RtWG9UUDvTqAbUBcylKVxJTdX5MXUMnmkNHheggo2e/S1XaFI97W1GiF3rGYZUjjybEiGKtJ5+VOMICo20Wii0aZaeoxextm8vcnGBtyf3i72z33W/dnlw83/u6uLyhS/JI0mMHb3dmFew5X69kVM+d4178Zoo1V0AyOqCPEQm2qRMYuQKcFL7Vqd4S0FWQ2FUzFfaT+LG/gKfQmh1Wlh+JZFBAdRD9jbW5Z1A+qm1Vxio+cSRzO0FHc4IWvDVk6oDfJz+/iCFZpWB45YYmpg/EYY51HW7TmfLE6OFtfHj/8OF0cHrRt4rnnlKXy7R7v+WnlDK+aCejO2vrpa5CvGEDzkY6StrOZTjnCp/c049tr6y/v4Zc/7utL19OnMnwA3aM7p"},{default:e(()=>[x]),_:1}),B,a(s,{id:"code-demo-239",type:"normal",title:"%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0",code:"eJx9kMFugzAMhl/F4hSkrtqu3cZ9Uw+TuhvjkIEL0bIEOSE7VH33OSms0E61EAjbv/35P2SvMshsk9VaOgc7qwevrIHDhwGOrXL+Kb1ejMcWqSiA0MEzGPzhqvnCJpULkT/OJFM39NJ3t7r74VOr+t89Uus3VrudHajGd0kteqGML6uygpZk3+UTZprEvWvZNOJ+mh3DkwxIDkUSrGBRJPQDmXjQmDyOUKSC9AjBquY8YbF6BfwLbkEQM4aPTQ1rjab13Wyb2oNg59gMuIOHhfIE4xL+0ioRz8rn0GfwWXIEj7G3BJEVAmxOKKWrrrb9uRUuZ186dtWQpITfNuBWMuG8PnLwh5/s+As6NrRd"},{default:e(()=>[_]),_:1}),S])}const A=t(p,[["render",C],["__file","2. 图论.html.vue"]]),z=JSON.parse(`{"path":"/algorithm/Hot100/2.%20%E5%9B%BE%E8%AE%BA.html","title":"图论","lang":"zh-CN","frontmatter":{"title":"图论","order":8,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"图 Hot100 1. 岛屿数量 Floodfill算法，图的DFS 2. 腐烂的橘子 图的BFS，用队列实现 3. 单词搜索 岛屿数量+回溯 使用visited数组防止重复使用，但是可以重复遍历，所以需要回溯退出的时候修改为false 4. 课程表canFinish 图的环检测 应用：编译器的循环引用检测 提示 注意图中并不是所有节点都相连，所以要用...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/KKBlog/algorithm/Hot100/2.%20%E5%9B%BE%E8%AE%BA.html"}],["meta",{"property":"og:site_name","content":"KK's Blog"}],["meta",{"property":"og:title","content":"图论"}],["meta",{"property":"og:description","content":"图 Hot100 1. 岛屿数量 Floodfill算法，图的DFS 2. 腐烂的橘子 图的BFS，用队列实现 3. 单词搜索 岛屿数量+回溯 使用visited数组防止重复使用，但是可以重复遍历，所以需要回溯退出的时候修改为false 4. 课程表canFinish 图的环检测 应用：编译器的循环引用检测 提示 注意图中并不是所有节点都相连，所以要用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-10T05:43:57.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-09-10T05:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-10T05:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\",\\"url\\":\\"https://github.com/Nikki-Gu\\"}]}"]]},"headers":[{"level":2,"title":"Hot100","slug":"hot100","link":"#hot100","children":[{"level":3,"title":"1. 岛屿数量","slug":"_1-岛屿数量","link":"#_1-岛屿数量","children":[]},{"level":3,"title":"2. 腐烂的橘子","slug":"_2-腐烂的橘子","link":"#_2-腐烂的橘子","children":[]},{"level":3,"title":"3. 单词搜索","slug":"_3-单词搜索","link":"#_3-单词搜索","children":[]},{"level":3,"title":"4. 课程表canFinish","slug":"_4-课程表canfinish","link":"#_4-课程表canfinish","children":[]}]},{"level":2,"title":"图的基础知识","slug":"图的基础知识","link":"#图的基础知识","children":[{"level":3,"title":"存储方式","slug":"存储方式","link":"#存储方式","children":[]},{"level":3,"title":"图的DFS基本框架","slug":"图的dfs基本框架","link":"#图的dfs基本框架","children":[]}]},{"level":2,"title":"岛屿系列问题 TODO","slug":"岛屿系列问题-todo","link":"#岛屿系列问题-todo","children":[]},{"level":2,"title":"基础题目","slug":"基础题目","link":"#基础题目","children":[{"level":3,"title":"1. 所有可能的路径","slug":"_1-所有可能的路径","link":"#_1-所有可能的路径","children":[]},{"level":3,"title":"2. 最小生成树 TODO","slug":"_2-最小生成树-todo","link":"#_2-最小生成树-todo","children":[]},{"level":3,"title":"3. 最短路径 TODO","slug":"_3-最短路径-todo","link":"#_3-最短路径-todo","children":[]},{"level":3,"title":"4. 名流问题","slug":"_4-名流问题","link":"#_4-名流问题","children":[]}]}],"git":{"createdTime":1715670016000,"updatedTime":1725947037000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":4}]},"readingTime":{"minutes":7.07,"words":2121},"filePathRelative":"algorithm/Hot100/2. 图论.md","localizedDate":"2024年5月14日","autoDesc":true}`);export{A as comp,z as data};
