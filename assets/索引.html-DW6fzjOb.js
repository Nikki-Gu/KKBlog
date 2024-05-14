import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as a,c as n,a as e,b as o,d as r,e as d}from"./app-ARawJAy0.js";const p={},c=d('<h2 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储"><span>文件存储</span></a></h2><p>表数据可以放在共享表空间文件和独占表空间文件中</p><p>现在MySQL默认设置是一张数据库表保存在对应的<code>table_name.idb</code>文件中，这个文件也被称为独占表空间文件</p><p><strong>表空间由段（segment）、区（extent）、页（page）、行（row）组成</strong></p><ul><li>row：row_format（一条数据的存储结构）</li><li>page：数据页；读取/管理数据的基本单位，16KB</li><li>extent：1MB的大小，64个连续的页</li><li>segment：索引段、数据段、回滚段</li></ul><p>一个表就是按照主键索引B+树的结构组织起来存储的</p><h4 id="页格式" tabindex="-1"><a class="header-anchor" href="#页格式"><span>页格式</span></a></h4><p>B+树中每个结点是一个数据页</p><p>数据页包括7个部分：文件头、页头、最小记录、最大记录、用户记录、页目录、文件尾</p><p>文件头：最重要的信息是有两个指针 PAGE_NEXT 和 PAGE_PRE，分别指向后一个数据页和前一个数据页。将多个数据页组成双向链表</p><p>最小记录、最大记录和用户记录都是行格式存储的</p><p>最小记录：链表的头结点；record_type=2</p><p>最大记录：链表的尾结点；record_type=3</p><p>用户记录：</p><ul><li>行格式拼接组成，记录行的存放没有逻辑顺序，但是会按照主键值对记录行组织成一条单向升序链表</li><li>链表指针存放在：记录行-行格式-记录头信息-next_record中</li><li>如果当前页是非叶子结点：record_type=1</li><li>如果当前页是叶子结点，record_type=0</li></ul><p>页目录：数组结构；加快一个数据页中找到目标记录行的效率；将上面的记录行的有序链表分为多个组，每个组内最后一条记录的指针存放在目录中（页目录中中每一项指向的是<strong>当前分组的最后一条记录</strong>）</p><p>页分裂：需要保证页面有序组织，插入元素到一个已经满的页面时需要页分裂，移动插入后面的记录到新的数据页中，很耗时；</p><p>避免页面分裂：主键应该保持升序，避免页分裂操作，这样插入的时候只需要在数据页最后插入/用新的数据页面存放插入数据</p><h4 id="行格式类型" tabindex="-1"><a class="header-anchor" href="#行格式类型"><span>行格式类型</span></a></h4><p>InnoDB提供了四种行格式，5.7之后默认Dynamic格式</p><ul><li>Redundant</li><li>Compact</li><li>Dynamic：基于Compact改进</li><li>Compressed：基于Compact改进</li></ul><h4 id="compact行格式" tabindex="-1"><a class="header-anchor" href="#compact行格式"><span>Compact行格式</span></a></h4><p>一行记录的存储 = 记录的额外信息 + 记录的真实数据</p><h5 id="记录的额外信息" tabindex="-1"><a class="header-anchor" href="#记录的额外信息"><span>记录的额外信息</span></a></h5><ul><li>变长字段长度列表（0-2字节）：保存变长字段的真实数据占用的字节数，按照列的顺序逆序排列 <ul><li>如果表定义了没有变长字段，就没有这一块信息</li><li>如果变长字段允许存储的最大字节数小于等于 255 字节，就会用 1 字节表示「变长字段长度」</li><li>如果变长字段允许存储的最大字节数大于 255 字节，就会用 2 字节表示「变长字段长度」</li></ul></li><li>NULL值列表（0字节往上）：1字节不够时使用2字节，以此类推 <ul><li>如果表定义了所有字段都是NOT NULL，没有这一块信息</li><li>如果有一个列可以为NULL，则每个列都对应一个bit，按照列的顺序逆序排列 <ul><li>二进制位的值为<code>1</code>时，代表该列的值为NULL</li><li>二进制位的值为<code>0</code>时，代表该列的值不为NULL</li></ul></li></ul></li><li>记录头信息：5个字节 <ul><li>比如：delete_mask、record_type、next_record、n_owned（页目录指向的最后一条记录存放当前组的行记录条数）</li></ul></li></ul><h5 id="记录的真实数据" tabindex="-1"><a class="header-anchor" href="#记录的真实数据"><span>记录的真实数据</span></a></h5><ul><li>隐藏字段： <ul><li>row_id：没有主键或者唯一约束列时候的主键；不是必须的，占用6个字节</li><li>trx_id：事务id，表示这个数据是由哪个事务生成的。 trx_id是必需的，占用 6 个字节</li><li>roll_pointer：记录上一个版本的指针。roll_pointer 是必需的，占用 7 个字节</li></ul></li><li>真实数据</li></ul><h4 id="varchar-n-中-n-最大取值为多少" tabindex="-1"><a class="header-anchor" href="#varchar-n-中-n-最大取值为多少"><span>varchar(n) 中 n 最大取值为多少？</span></a></h4><p>n是可以存储的字符数，使用ascii字符集，1个字符占用1个字节，</p><p><strong>MySQL 规定除了 TEXT、BLOBs 这种大对象类型之外，【变长字段长度列表+NULL值列表+真实数据】不能超过65535个字节</strong></p><p>如果设置为NOT NULL，只有varchar一个列，则n最大取值为65535 - 2 = 65533</p><p>在UTF-8 字符集下，一个字符最多需要三个字节，则n最大取值为65533/2</p><h3 id="行溢出怎么处理" tabindex="-1"><a class="header-anchor" href="#行溢出怎么处理"><span>行溢出怎么处理</span></a></h3><p>一个页的大小一般是 <code>16KB</code>，也就是 <code>16384字节</code>，一个 varchar(n) 类型的列最多可以存储 <code>65532字节</code></p><p>行溢出：一个页存储不下一条记录的情况</p><p>解决：剩余数据放到溢出页中</p><ul><li>Compact 行格式：记录的真实数据处保存该列的一部分数据，用20字节存储指向溢出页的地址</li><li>Compressed 和 Dynamic：记录的真实数据处只存储 20 个字节的指针来指向溢出页</li></ul><h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点"><span>优缺点</span></a></h3><p>优点：加快检索速度；创建唯一性索引可以保证数据唯一性</p><p>缺点：维护索引耗费时间；存储索引耗费空间</p><h3 id="索引数据结构选择" tabindex="-1"><a class="header-anchor" href="#索引数据结构选择"><span>索引数据结构选择</span></a></h3><ul><li>Hash：等值查询最快，但是不支持顺序查询和范围查询</li><li>二叉查找树：退化为斜树，不平衡时查找效率低下O(n)</li><li>AVL树：维护平衡开销大，查询开销为O(log2n);</li><li>红黑树：二叉树，一个节点不能存储多个值，深度更大，查找次数更多</li><li>B树：多叉树，一个节点可以存储多个值，深度不大，更胖，减少查找次数；适合大量的单个索引查询</li><li>B+树：MyISAM和InnoDB使用；O(logdn); <ul><li>B+树与 B 树相比： <ul><li>单点查询：存储数据量相同的情况（不用在非叶子节点存非索引数据），具备更少的 IO 次数、更稳定的查询效率</li><li>范围查询：双向链表，非常适合范围查询</li><li>插入和删除效率更高：存在很多冗余节点，删除根节点不会发生剧烈变形</li></ul></li></ul></li></ul><table><thead><tr><th>-</th><th>B树</th><th>B+树</th></tr></thead><tbody><tr><td>内节点存放</td><td>key, data（不会在叶子节点中再出现）</td><td>key（还会在叶子节点中出现）</td></tr><tr><td>叶子结点存放</td><td>key, data</td><td>key, data</td></tr><tr><td>叶子结点之间关系</td><td>独立</td><td>相互连接，支持范围查找</td></tr><tr><td>查找效率</td><td>不稳定（可能没到叶子结点就找到了）；找索引时会读入非索引数据，增加磁盘IO消耗</td><td>稳定（均要查找到叶子结点）</td></tr></tbody></table><p>MySQL中B+树的每一层都是通过双向链表连接起来的</p><h3 id="索引类型-底层存储方式" tabindex="-1"><a class="header-anchor" href="#索引类型-底层存储方式"><span>索引类型（底层存储方式）</span></a></h3><ul><li>聚集索引：索引文件里面直接存放对应数据 <ul><li>比如：InnoDB的主键索引的实现是聚集索引</li><li>优点：查询速度快；排序查找和范围查找优化</li><li>缺点：依赖有序数据；更新代价大</li></ul></li><li>非聚集索引/二级索引/辅助索引：索引文件里面存放指向数据的指针 <ul><li>比如： <ul><li>MyISAM的所有索引</li><li>InnoDB普通索引（叶子结点存放的数据是主键，如果查询的不是主键，还要用主键回表二次查询，也就是查询主键索引、B+树）</li></ul></li><li>优点：更新代价小</li><li>缺点：依赖有序数据；可能回表（二次查询）</li></ul></li></ul><h3 id="索引类型-应用方式" tabindex="-1"><a class="header-anchor" href="#索引类型-应用方式"><span>索引类型（应用方式）</span></a></h3><ul><li>主键索引：不能有null；加速+唯一</li><li>唯一索引：可以有null；加速+唯一</li><li>普通索引：加速</li><li>覆盖索引：索引包含需要查询字段的值</li><li>联合索引：多个字段创建索引 <ul><li>假设有一个联合索引<code>(column1, column2, column3)</code>，相当于创建了 3 个索引： <ul><li><code>(column1)</code></li><li><code>(column1, column2)</code></li><li><code>(column1, column2, column3)</code></li></ul></li><li>实际上就是创建的一个索引，但是这个索引的B+树是先按照column1来排序的，column1相同的才按照column2顺序组织</li><li>联合索引当遇到范围查询 (&gt;、&lt;) 就会停止匹配</li><li>最左前缀匹配原则：从左到右依次匹配查询条件中的字段，只有匹配到了才能用上索引查询</li></ul></li></ul><h3 id="索引下推icp-index-condition-pushdown" tabindex="-1"><a class="header-anchor" href="#索引下推icp-index-condition-pushdown"><span>索引下推ICP（Index Condition Pushdown）</span></a></h3><p>定义：在索引遍历的过程中执行部分where子句的判断条件，直接过滤掉不满足条件的记录</p><p>作用：减少<strong>二级索引</strong>在查询时的回表操作，提高查询的效率，因为它将 Server 层部分负责的事情，交给存储引擎层去处理</p><ul><li>不使用ICP：每找到一条满足一个条件的记录就回表查询，将结果返回给Server，Server去判断是否满足其他条件</li><li>使用ICP：每找到一条满足一个条件的记录，先通过索引判断条件是否成立，不成立直接跳过，成立则执行回表查询，将结果返回给Server</li></ul>',53),s={href:"https://zhuanlan.zhihu.com/p/639042049",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const l=t("ExternalLinkIcon");return a(),n("div",null,[c,e("p",null,[e("a",s,[o("记录行与数据页"),r(l)])])])}const y=i(p,[["render",h],["__file","索引.html.vue"]]),b=JSON.parse('{"path":"/backend/database/%E7%B4%A2%E5%BC%95.html","title":"索引","lang":"zh-CN","frontmatter":{"title":"索引","order":2,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"文件存储 表数据可以放在共享表空间文件和独占表空间文件中 现在MySQL默认设置是一张数据库表保存在对应的table_name.idb文件中，这个文件也被称为独占表空间文件 表空间由段（segment）、区（extent）、页（page）、行（row）组成 row：row_format（一条数据的存储结构） page：数据页；读取/管理数据的基本单位，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/database/%E7%B4%A2%E5%BC%95.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"文件存储 表数据可以放在共享表空间文件和独占表空间文件中 现在MySQL默认设置是一张数据库表保存在对应的table_name.idb文件中，这个文件也被称为独占表空间文件 表空间由段（segment）、区（extent）、页（page）、行（row）组成 row：row_format（一条数据的存储结构） page：数据页；读取/管理数据的基本单位，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":2,"title":"文件存储","slug":"文件存储","link":"#文件存储","children":[{"level":3,"title":"行溢出怎么处理","slug":"行溢出怎么处理","link":"#行溢出怎么处理","children":[]}]},{"level":2,"title":"索引","slug":"索引","link":"#索引","children":[{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":3,"title":"索引数据结构选择","slug":"索引数据结构选择","link":"#索引数据结构选择","children":[]},{"level":3,"title":"索引类型（底层存储方式）","slug":"索引类型-底层存储方式","link":"#索引类型-底层存储方式","children":[]},{"level":3,"title":"索引类型（应用方式）","slug":"索引类型-应用方式","link":"#索引类型-应用方式","children":[]},{"level":3,"title":"索引下推ICP（Index Condition Pushdown）","slug":"索引下推icp-index-condition-pushdown","link":"#索引下推icp-index-condition-pushdown","children":[]}]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":7.6,"words":2279},"filePathRelative":"backend/database/索引.md","localizedDate":"2024年5月14日","autoDesc":true}');export{y as comp,b as data};
