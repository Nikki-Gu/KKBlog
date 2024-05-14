import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,e as n}from"./app-ARawJAy0.js";const i={},t=n('<h3 id="maven的作用" tabindex="-1"><a class="header-anchor" href="#maven的作用"><span>Maven的作用</span></a></h3><ol><li>提供标准的、跨平台的自动化项目构建方式</li><li>方便依赖管理，避免版本冲突</li><li>提供统一项目开发结构，方便上手</li></ol><p>POM：project object model项目对象模型</p><h3 id="maven坐标" tabindex="-1"><a class="header-anchor" href="#maven坐标"><span>Maven坐标</span></a></h3><p>用于唯一标识一个项目依赖/第三方库/构件</p><p>基本坐标：</p><ul><li>groupId：逆向域名；项目的组织</li><li>artifactId：项目模块</li><li>version：版本，三位数字</li></ul><p>可选坐标：</p><ul><li><p>type=packaging：依赖的类型</p></li><li><p>scope：依赖的作用域，默认值是 compile</p><p>编译、测试、运行时的依赖包不完全相同，有的只在一个环节使用，比如JUnit，所以可以设置依赖作用域来控制依赖什么时候被引入</p></li><li><p>optional</p></li><li><p>exclusions：用于排除传递性依赖</p></li></ul><h4 id="依赖冲突处理" tabindex="-1"><a class="header-anchor" href="#依赖冲突处理"><span>依赖冲突处理</span></a></h4><ol><li><p>若相同类型但版本不同的依赖存在于同一个 pom 文件，只会引入后一个声明的依赖。</p></li><li><p>项目的两个依赖同时引入了一个不同版本的依赖，需要进行依赖调解，遵循如下两个原则</p><ol><li>最短路径优先</li><li>声明顺序优先</li></ol></li><li><p>Maven无法完成依赖冲突处理的情况下，需要手动排除依赖</p><p>常见：<code>NoClassDefFoundError</code>和<code>NoSuchMethodError</code>错误</p><p>通过<code>exclusion</code>手动排除依赖</p><p>一般优先保留版本高的，升级优化上层依赖</p></li></ol><h3 id="maven仓库" tabindex="-1"><a class="header-anchor" href="#maven仓库"><span>Maven仓库</span></a></h3><p>存放项目所使用的jar包以及Maven使用的jar包</p><p>分为两种：</p><ul><li>本地仓库：Maven项目所需要的jar包；<code>/Users/nikki/.m2/repository</code></li><li>远程仓库：（按顺序查找） <ul><li>私服</li><li>中央仓库镜像</li><li>中央仓库</li></ul></li></ul><h3 id="maven的生命周期" tabindex="-1"><a class="header-anchor" href="#maven的生命周期"><span>Maven的生命周期</span></a></h3><p>为了对所有的构建过程进行抽象和统一</p><p>三个生命周期，彼此独立，每个周期包含有序的多个阶段phase（有序是指后一个依赖前一个）</p><ul><li>default：23个阶段；主要生命周期，用于构建应用程序</li><li>clean：3个阶段；清理项目 <ul><li>执行 <code>mvn clean</code> 的时候，会执行 clean 生命周期中的 pre-clean 和 clean 阶段（前两个阶段）</li></ul></li><li>site：4个阶段；建立发布站点</li></ul><h3 id="maven插件" tabindex="-1"><a class="header-anchor" href="#maven插件"><span>Maven插件</span></a></h3><p>Maven 本质上是一个插件执行框架，插件可以理解为一组任务的集合</p><p>本地插件位置：<code>/Users/nikki/.m2/repository/org/apache/maven/plugins</code></p>',22),o=[t];function p(r,c){return a(),l("div",null,o)}const m=e(i,[["render",p],["__file","maven.html.vue"]]),h=JSON.parse('{"path":"/backend/devtools/maven.html","title":"","lang":"zh-CN","frontmatter":{"description":"Maven的作用 提供标准的、跨平台的自动化项目构建方式 方便依赖管理，避免版本冲突 提供统一项目开发结构，方便上手 POM：project object model项目对象模型 Maven坐标 用于唯一标识一个项目依赖/第三方库/构件 基本坐标： groupId：逆向域名；项目的组织 artifactId：项目模块 version：版本，三位数字 可...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/backend/devtools/maven.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:description","content":"Maven的作用 提供标准的、跨平台的自动化项目构建方式 方便依赖管理，避免版本冲突 提供统一项目开发结构，方便上手 POM：project object model项目对象模型 Maven坐标 用于唯一标识一个项目依赖/第三方库/构件 基本坐标： groupId：逆向域名；项目的组织 artifactId：项目模块 version：版本，三位数字 可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T07:00:16.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2024-05-14T07:00:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-14T07:00:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\"}]}"]]},"headers":[{"level":3,"title":"Maven的作用","slug":"maven的作用","link":"#maven的作用","children":[]},{"level":3,"title":"Maven坐标","slug":"maven坐标","link":"#maven坐标","children":[]},{"level":3,"title":"Maven仓库","slug":"maven仓库","link":"#maven仓库","children":[]},{"level":3,"title":"Maven的生命周期","slug":"maven的生命周期","link":"#maven的生命周期","children":[]},{"level":3,"title":"Maven插件","slug":"maven插件","link":"#maven插件","children":[]}],"git":{"createdTime":1715670016000,"updatedTime":1715670016000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"backend/devtools/maven.md","localizedDate":"2024年5月14日","autoDesc":true}');export{m as comp,h as data};
