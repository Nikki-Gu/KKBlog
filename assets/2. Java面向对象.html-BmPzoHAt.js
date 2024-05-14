import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as l}from"./app-ARawJAy0.js";const i={},s=l('<h3 id="对象引用和对象实例的区别" tabindex="-1"><a class="header-anchor" href="#对象引用和对象实例的区别"><span>对象引用和对象实例的区别</span></a></h3><p>对象实例在堆中、对象引用存放在栈中</p><p>对象引用存储对象实例的内存地址</p><h3 id="构造方法的特点" tabindex="-1"><a class="header-anchor" href="#构造方法的特点"><span>构造方法的特点</span></a></h3><ol><li>方法名和类名相同</li><li>默认无参构造方法（提供有参构造默认无参构造消失）</li><li>生成对象时自动执行，无需调用</li><li>没有返回值，也不能用void声明</li></ol><h3 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征"><span>面向对象三大特征</span></a></h3><ul><li>封装：属性私有；get/set；重载构造方法</li><li>继承：this；super；重写基类方法</li><li>多态：一个对象有多种状态（可以进行类型转换） <ul><li>具体执行的方法在运行时才能确定</li><li>对象能执行的方法看左边声明的类型，不能调用子类独有的方法</li><li>存在条件： <ul><li>继承</li><li>重写</li><li>父类的引用可以指向子类的实例</li></ul></li></ul></li></ul><h3 id="引用拷贝-浅拷贝-深拷贝" tabindex="-1"><a class="header-anchor" href="#引用拷贝-浅拷贝-深拷贝"><span>引用拷贝-浅拷贝-深拷贝</span></a></h3><p>引用拷贝：只复制引用，指向的对象不变</p><p>浅拷贝：在堆上复制对象但是对象里面只复制引用</p><p>深拷贝：完全复制对象</p><p>深拷贝和浅拷贝是指在复制一个对象时，拷贝的深度不同。 区别是<strong>浅拷贝是拷贝了对象的引用，当原对象发生变化的时候，拷贝对象也跟着变化；深拷贝是另外申请了一块内存，内容和原对象一样，更改原对象，拷贝对象不会发生变化</strong></p><h2 id="抽象类和接口" tabindex="-1"><a class="header-anchor" href="#抽象类和接口"><span>抽象类和接口</span></a></h2><h3 id="抽象类和普通类的区别" tabindex="-1"><a class="header-anchor" href="#抽象类和普通类的区别"><span>抽象类和普通类的区别</span></a></h3><ol><li>抽象类可以包含抽象方法，普通类不可以</li><li>抽象类不能实例化，普通类可以</li></ol><p>除此之外，抽象类有和普通类相同的属性和特征</p><p>抽象类是创建类的模版</p><h3 id="接口和普通类的区别" tabindex="-1"><a class="header-anchor" href="#接口和普通类的区别"><span>接口和普通类的区别</span></a></h3><ol><li><p>接口不能实例化对象</p></li><li><p>一个类可以实现多个接口，类不能多继承</p></li><li><p>接口中方法默认为public abstract，类中没有这个默认</p><ol><li>默认为protected abstract</li><li>可以有default和private和static</li></ol></li><li><p>接口中属性只能为public static final，必须初始化，类中没有这个要求</p></li><li><p>接口中没有构造方法，没有静态代码块</p></li></ol><p>接口和抽象类的区别是上述所有除了1</p><blockquote><p>为什么要有接口？抽象类不能满足需求吗？</p><p>​ 接口强调行为，类强调的是所属关系。比如播放视频不需要抽象为一个抽象类，但可以定义一个接口</p></blockquote><h3 id="抽象类和接口的共同点" tabindex="-1"><a class="header-anchor" href="#抽象类和接口的共同点"><span>抽象类和接口的共同点</span></a></h3><ol><li>都不能被实例化</li><li>都可以包含抽象方法，也可以没有</li><li>都可以有默认方法</li></ol><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>Object</span></a></h2><h3 id="object类的11个方法" tabindex="-1"><a class="header-anchor" href="#object类的11个方法"><span>Object类的11个方法</span></a></h3><p>Object是所有类的基类</p><h3 id="tostring-方法" tabindex="-1"><a class="header-anchor" href="#tostring-方法"><span>toString()方法</span></a></h3><p>默认返回格式：<strong>对象的 class 名称 + @ + hashCode 的十六进制字符串</strong></p><h3 id="equals-方法比较的是什么" tabindex="-1"><a class="header-anchor" href="#equals-方法比较的是什么"><span>equals()方法比较的是什么</span></a></h3><p>没有被重写的话比较的是对象的内存地址</p><h3 id="hashcode作用" tabindex="-1"><a class="header-anchor" href="#hashcode作用"><span>hashCode作用</span></a></h3><p>hashCode并不都是 &quot;地址&quot; 或者 &quot;地址转换而来&quot;, 有六种计算方式，其中第五种是地址</p><p>获取对象对应的哈希码（int整数，32位）</p><p>哈希码可以方便确认对象在哈希表中的索引，在将对象加入HashMap、HashSet时效率更高</p><p>重写equals必须重写hashcode方法：因为equals判断相等的两个对象的hashcode必须也是相等的</p>',35),n=[s];function o(r,h){return a(),t("div",null,n)}const d=e(i,[["render",o],["__file","2. Java面向对象.html.vue"]]),u=JSON.parse('{"path":"/backend/java/2.%20Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"面向对象","lang":"zh-CN","frontmatter":{"title":"面向对象","order":2,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"对象引用和对象实例的区别 对象实例在堆中、对象引用存放在栈中 对象引用存储对象实例的内存地址 构造方法的特点 方法名和类名相同 默认无参构造方法（提供有参构造默认无参构造消失） 生成对象时自动执行，无需调用 没有返回值，也不能用void声明 面向对象三大特征 封装：属性私有；get/set；重载构造方法 继承：this；super；重写基类方法 多态：...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/java/2.%20Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"面向对象"}],["meta",{"property":"og:description","content":"对象引用和对象实例的区别 对象实例在堆中、对象引用存放在栈中 对象引用存储对象实例的内存地址 构造方法的特点 方法名和类名相同 默认无参构造方法（提供有参构造默认无参构造消失） 生成对象时自动执行，无需调用 没有返回值，也不能用void声明 面向对象三大特征 封装：属性私有；get/set；重载构造方法 继承：this；super；重写基类方法 多态：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面向对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":3,"title":"对象引用和对象实例的区别","slug":"对象引用和对象实例的区别","link":"#对象引用和对象实例的区别","children":[]},{"level":3,"title":"构造方法的特点","slug":"构造方法的特点","link":"#构造方法的特点","children":[]},{"level":3,"title":"面向对象三大特征","slug":"面向对象三大特征","link":"#面向对象三大特征","children":[]},{"level":3,"title":"引用拷贝-浅拷贝-深拷贝","slug":"引用拷贝-浅拷贝-深拷贝","link":"#引用拷贝-浅拷贝-深拷贝","children":[]},{"level":2,"title":"抽象类和接口","slug":"抽象类和接口","link":"#抽象类和接口","children":[{"level":3,"title":"抽象类和普通类的区别","slug":"抽象类和普通类的区别","link":"#抽象类和普通类的区别","children":[]},{"level":3,"title":"接口和普通类的区别","slug":"接口和普通类的区别","link":"#接口和普通类的区别","children":[]},{"level":3,"title":"抽象类和接口的共同点","slug":"抽象类和接口的共同点","link":"#抽象类和接口的共同点","children":[]}]},{"level":2,"title":"Object","slug":"object","link":"#object","children":[{"level":3,"title":"Object类的11个方法","slug":"object类的11个方法","link":"#object类的11个方法","children":[]},{"level":3,"title":"toString()方法","slug":"tostring-方法","link":"#tostring-方法","children":[]},{"level":3,"title":"equals()方法比较的是什么","slug":"equals-方法比较的是什么","link":"#equals-方法比较的是什么","children":[]},{"level":3,"title":"hashCode作用","slug":"hashcode作用","link":"#hashcode作用","children":[]}]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":2.94,"words":881},"filePathRelative":"backend/java/2. Java面向对象.md","localizedDate":"2024年5月14日","autoDesc":true}');export{d as comp,u as data};
