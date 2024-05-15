import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as n,d as t}from"./app-C8LDM16F.js";const e={},p=t(`<h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>Mybatis</span></a></h1><h3 id="orm对象关系映射" tabindex="-1"><a class="header-anchor" href="#orm对象关系映射"><span>ORM对象关系映射</span></a></h3><p>Object Relation Mapper</p><p>将数据库表映射为持久化类，作为应用程序和数据库之间的中间层</p><p>以面向对象的方式来操作持久化对象（数据库）</p><p>优点：隐藏了数据访问细节，数据库交互更简单</p><p>缺点：牺牲部分性能</p><h3 id="mybatis-1" tabindex="-1"><a class="header-anchor" href="#mybatis-1"><span>Mybatis</span></a></h3><p>基于Java的持久层框架，内部封装了JDBC；支持通过xml和注解配置sql语句，执行 sql 并将结果映射为 java 对象</p><p>Mybatis不是ORM框架，只是ResultSet映射框架，所以称为半自动ORM框架，具体表现在：</p><ul><li>MyBatis不会将表映射到类，没有持久化类的概念</li><li>ResultSet是select查询语句的返回值，Mybatis会将ResultSet的每一行映射为Java类（通过resultType或者resultMap指定）</li><li>可以直接编写SQL语句，但也支持动态SQL</li><li>没有对象关系映射：不会建立对象之间关系，需要开发者手动控制</li><li>支持延迟加载</li></ul><p>Hibernate是全自动 ORM 映射工具：</p><ul><li>查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取</li><li>封装了SQL语句，不需要手动编写SQL</li></ul><h3 id="项目代码结构" tabindex="-1"><a class="header-anchor" href="#项目代码结构"><span>项目代码结构</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── nikki
│   │   │           ├── MyBatisUtil.java // 读取配置文件、获取 sqlsession对象等连接相关的操作
│   │   │           ├── dao
│   │   │           │   └── UserDao.java // 对User表的数据库操作
│   │   │           └── model
│   │   │               └── User.java // User实体表的Java类映射
│   │   └── resources
│   │       ├── mapper
│   │       │   └── UserDao.xml // 也就是mapper文件，和UserDao名字必须相同，定义UserDao中对应操作的SQL语句
│   │       ├── jdbc.properties // 连接数据库参数，包括driver、url、username、password
│   │       └── mybatis-config.xml // mybatis 的主配置文件，所有的配置都在 configuration 标签里面
│   └── test
│       └── java
│           └── com
│               └── nikki
│                   └── UserTest.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mybatis-config-xml" tabindex="-1"><a class="header-anchor" href="#mybatis-config-xml"><span>mybatis-config.xml</span></a></h3><ol><li><p>定义别名</p><p>给全路径名起别名，一般name是实体类所在包的全路径，配置完成后在UserDao.xml中就可以直接用user代替com.xxl.model.User了，大小写不敏感</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;typeAliases&gt;
    &lt;package name=&quot;com.xxl.model&quot;/&gt;
&lt;/typeAliases&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置数据源（连接的数据库）</p><p>为了更好地管理连接，一般将连接参数放在jdbc.properties 文件中，在&lt;configuration&gt;下面（顺序重要！）使用如下配置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;properties resource=&quot;jdbc.properties&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在datasource中使用<code>\${jdbc.driver}</code>的形式调用配置的参数</p></li><li><p>配置查找mapper文件的路径</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapper/UserDao.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置事务</p><p>使用 JDBC 的事务管理机制， MyBatis 默认将自动提交功能关闭了，所以在业务逻辑代码中要手动commit和rollback</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;transactionManager type=&quot;JDBC&quot;&gt;&lt;/transactionManager&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在MyBatisUtil中设置自动提交事务：</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>SqlSession sqlSession = factory.openSession(True);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="mapper" tabindex="-1"><a class="header-anchor" href="#mapper"><span>Mapper</span></a></h3><p>作用：Java的POJO对象和数据库中记录的转换</p><p>如果不用Mybatis，定义完xxxDao接口之后，还要定义一个它的实现类 DaoImpl（一般名称为xxxMapper类），需要开发者手动编写大量的SQL语句和映射代码来将数据库中的数据映射到Java对象上</p><p>Mybatis 框架可以根据接口定义自动生成实现类，返回一个代理对象。相当于将Dao和DaoImpl合并了，程序员只需要定义操作数据库的接口代码和具体的SQL代码，中间的对象和记录的转换由框架完成</p><p>有两种具体的实现方式：</p><ol><li><p><code>mapper.xml</code>：配置文件；在主配置文件<code>mybatis-config.xml</code>中使用<code>UserDao.xml</code>作为mapper生成来源</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 指定映射配置文件的位置--&gt;
&lt;mappers&gt;
    &lt;mapper resource=&quot;mapper/UserDao.xml&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注解式开发</p><p>去掉UserDao.xml文件，直接在主配置文件<code>mybatis-config.xml</code>中使用<code>com.xx.dao</code>作为mapper来源</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 指定映射配置文件的位置--&gt;
&lt;mappers&gt;
    &lt;mapper resource=&quot;com.nikki.UserDao&quot;/&gt;
&lt;/mappers&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>UserDao</code>接口文件中使用注解添加sql语句：<code>@Select(&quot;select * from user&quot;)</code></p><p>但是这种方式不支持动态SQL，复杂的查询还是应该使用xml配置的方式来实现</p></li></ol><p>什么时候使用注解/XML配置文件：</p><ul><li>静态的简单的SQL语句使用注解</li><li>其他的使用配置（动态的）</li></ul><h4 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果"><span>输出结果</span></a></h4><ol><li><p>简单类型：</p><p>String —— <code>resultType=&quot;java.lang.String&quot;</code></p></li><li><p>对象类型：</p><p>User ——<code>resultType=&quot;user&quot;</code></p></li><li><p>Map类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@MapKey(&quot;id&quot;)
Map&lt;String,Object&gt; getUser();

&lt;select id=&quot;getUser&quot; resultType=&quot;java.util.Map&quot;&gt;
    select * from user
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>resultMap：使用 resultMap 自定义 sql 的结果和 java 对象属性的映射关系</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;resultMap id=&quot;userMap&quot; type=&quot;com.xxl.model.User&quot;&gt;
   &lt;id column=&quot;s_id&quot; property=&quot;id&quot;/&gt;
    &lt;result column=&quot;s_name&quot; property=&quot;name&quot;/&gt;
    &lt;result column=&quot;s_age&quot; property=&quot;age&quot;/&gt;
    &lt;result column=&quot;s_sex&quot; property=&quot;sex&quot;/&gt;
&lt;/resultMap&gt;

&lt;select id=&quot;getAll&quot; resultMap=&quot;userMap&quot;&gt;
    select s_id,s_name,s_age,s_sex from user
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加/修改处理 null 值</p><p>添加修改时，要想使某个列的值为空，必须添加 jdbcType 属性</p><p>比如：<code>#{name,jdbcType=VARCHAR}</code></p></li></ol><h4 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数"><span>传递参数</span></a></h4><p>#{param} ：占位符方式</p><p>\${param}：拼接sql语句的方式，有sql注入的风险</p><ol><li>一个参数：可以使用任意名字获取参数值</li><li>多个参数：在接口参数位置用**@Param(&quot;userName&quot;)**指定mapper中使用的参数名</li><li>传递JavaBean对象：直接通过属性名</li><li>传递Map：通过key的名字</li></ol><h4 id="动态sql" tabindex="-1"><a class="header-anchor" href="#动态sql"><span>动态SQL</span></a></h4><p>动态 SQL 是 MyBatis 强大特性之一，主要用于解决<code>查询条件不确定</code>的情况，它可以极大的简化我们拼装 SQL 的操作。</p><p>作用：实现在 xml 映射文件内，以标签的形式编写动态 sql，完成逻辑判断和动态拼接 sql 的功能</p><h5 id="where-if" tabindex="-1"><a class="header-anchor" href="#where-if"><span>where if:</span></a></h5><p>and要放在每个&lt;if&gt;语句中字段的前面</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>select <span class="token operator">*</span> from employee
where <span class="token number">1</span><span class="token operator">=</span><span class="token number">1</span>
     <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;id != null&quot;</span> and <span class="token string">&quot;id != &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
        and id <span class="token operator">=</span> #<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;name != null and name != &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
        and name like <span class="token function">concat</span><span class="token punctuation">(</span><span class="token char">&#39;%&#39;</span><span class="token punctuation">,</span>#<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token char">&#39;%&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>where<span class="token operator">&gt;</span>

<span class="token comment">// 等价于</span>
select <span class="token operator">*</span> from employee
<span class="token generics"><span class="token punctuation">&lt;</span>where<span class="token punctuation">&gt;</span></span>
     <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;id != null&quot;</span> and <span class="token string">&quot;id != &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
        and id <span class="token operator">=</span> #<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;name != null and name != &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
        and name like <span class="token function">concat</span><span class="token punctuation">(</span><span class="token char">&#39;%&#39;</span><span class="token punctuation">,</span>#<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token char">&#39;%&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>where<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set</span></a></h5><p>动态修改/更新</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token operator">&lt;</span>update id<span class="token operator">=</span><span class="token string">&quot;update&quot;</span> parameterType<span class="token operator">=</span><span class="token string">&quot;Employee&quot;</span><span class="token operator">&gt;</span>
    update employee
    <span class="token generics"><span class="token punctuation">&lt;</span>set<span class="token punctuation">&gt;</span></span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;name != null&quot;</span><span class="token operator">&gt;</span>name <span class="token operator">=</span> #<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;username != null&quot;</span><span class="token operator">&gt;</span>username <span class="token operator">=</span> #<span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;password != null&quot;</span><span class="token operator">&gt;</span>password <span class="token operator">=</span> #<span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;phone != null&quot;</span><span class="token operator">&gt;</span>phone <span class="token operator">=</span> #<span class="token punctuation">{</span>phone<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;sex != null&quot;</span><span class="token operator">&gt;</span>sex <span class="token operator">=</span> #<span class="token punctuation">{</span>sex<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;idNumber != null&quot;</span><span class="token operator">&gt;</span>id_Number <span class="token operator">=</span> #<span class="token punctuation">{</span>idNumber<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;updateTime != null&quot;</span><span class="token operator">&gt;</span>update_Time <span class="token operator">=</span> #<span class="token punctuation">{</span>updateTime<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;updateUser != null&quot;</span><span class="token operator">&gt;</span>update_User <span class="token operator">=</span> #<span class="token punctuation">{</span>updateUser<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">&quot;status != null&quot;</span><span class="token operator">&gt;</span>status <span class="token operator">=</span> #<span class="token punctuation">{</span>status<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>set<span class="token operator">&gt;</span>
    where id <span class="token operator">=</span> #<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>update<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>trim</li><li>choose when otherwise</li><li>set</li><li>foreach</li><li>sql标签</li></ul><h3 id="关联关系" tabindex="-1"><a class="header-anchor" href="#关联关系"><span>关联关系</span></a></h3><h4 id="一对一关系association" tabindex="-1"><a class="header-anchor" href="#一对一关系association"><span>一对一关系association</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>        <span class="token comment">&lt;!--
            association: 用来处理一对一关系属性封装
            property : 关系属性名
            javaType: 关系属性的类型
         --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xxl.model.UserInfo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>address<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一对多关系collection" tabindex="-1"><a class="header-anchor" href="#一对多关系collection"><span>一对多关系collection</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>        <span class="token comment">&lt;!--
            collection 用来处理集合类型的属性  ，用来处理一对多关系
            property:  关系属性名
            javaType:  关系属性类型
            ofType  :  集合中泛型类型：类的全路径名
         --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>employeeList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.xxl.model.Employee<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span>  <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pagehelper" tabindex="-1"><a class="header-anchor" href="#pagehelper"><span>PageHelper</span></a></h3><p>依赖：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;!-- 分页插件 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;
    &lt;artifactId&gt;pagehelper&lt;/artifactId&gt;
    &lt;version&gt;5.1.4&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在mybatis中配置插件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;plugins&gt;
    &lt;plugin interceptor=&quot;com.github.pagehelper.PageInterceptor&quot; /&gt;
&lt;/plugins&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>      Page page = PageHelper.startPage(2, 3);
      List&lt;User&gt; userList = userDao.getUser();
      System.out.println(&quot;当前页：&quot;+page.getPageNum());
      System.out.println(&quot;每页条数：&quot;+page.getPageSize());
      System.out.println(&quot;总条数：&quot;+page.getTotal());
      System.out.println(&quot;总页数：&quot;+page.getPages());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h3><p><a href="https://juejin.cn/post/7051910683264286750#heading-10" target="_blank" rel="noopener noreferrer">MyBatis最全使用指南</a></p>`,55),l=[p];function o(i,c){return n(),s("div",null,l)}const d=a(e,[["render",o],["__file","Mybatis.html.vue"]]),k=JSON.parse(`{"path":"/backend/frameworks/Mybatis.html","title":"Mybatis","lang":"zh-CN","frontmatter":{"description":"Mybatis ORM对象关系映射 Object Relation Mapper 将数据库表映射为持久化类，作为应用程序和数据库之间的中间层 以面向对象的方式来操作持久化对象（数据库） 优点：隐藏了数据访问细节，数据库交互更简单 缺点：牺牲部分性能 Mybatis 基于Java的持久层框架，内部封装了JDBC；支持通过xml和注解配置sql语句，执行 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/KKBlog/backend/frameworks/Mybatis.html"}],["meta",{"property":"og:site_name","content":"KK's Blog"}],["meta",{"property":"og:title","content":"Mybatis"}],["meta",{"property":"og:description","content":"Mybatis ORM对象关系映射 Object Relation Mapper 将数据库表映射为持久化类，作为应用程序和数据库之间的中间层 以面向对象的方式来操作持久化对象（数据库） 优点：隐藏了数据访问细节，数据库交互更简单 缺点：牺牲部分性能 Mybatis 基于Java的持久层框架，内部封装了JDBC；支持通过xml和注解配置sql语句，执行 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:39:54.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:39:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:39:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\",\\"url\\":\\"https://github.com/Nikki-Gu\\"}]}"]]},"headers":[{"level":3,"title":"ORM对象关系映射","slug":"orm对象关系映射","link":"#orm对象关系映射","children":[]},{"level":3,"title":"Mybatis","slug":"mybatis-1","link":"#mybatis-1","children":[]},{"level":3,"title":"项目代码结构","slug":"项目代码结构","link":"#项目代码结构","children":[]},{"level":3,"title":"mybatis-config.xml","slug":"mybatis-config-xml","link":"#mybatis-config-xml","children":[]},{"level":3,"title":"Mapper","slug":"mapper","link":"#mapper","children":[]},{"level":3,"title":"关联关系","slug":"关联关系","link":"#关联关系","children":[]},{"level":3,"title":"PageHelper","slug":"pagehelper","link":"#pagehelper","children":[]},{"level":3,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715672394000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":2}]},"readingTime":{"minutes":5.72,"words":1715},"filePathRelative":"backend/frameworks/Mybatis.md","localizedDate":"2024年5月14日","autoDesc":true}`);export{d as comp,k as data};