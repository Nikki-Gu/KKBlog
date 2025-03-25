import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as e,a as s,b as l,d as n}from"./app-DQsaqGl9.js";const m={},i=s("h2",{id:"auc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#auc"},[s("span",null,[s("strong",null,"AUC")])])],-1),p=s("h3",{id:"定义和计算",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#定义和计算"},[s("span",null,"定义和计算")])],-1),c=s("p",null,"计算方式/定义有两种，一般计算实现使用第二种。",-1),r=s("ol",null,[s("li",null,[s("p",null,"ROC曲线下的面积"),s("ol",null,[s("li",null,[s("p",null,"ROC曲线：真正率（True Positive Rate，TPR）为纵坐标，假正率（False Positive Rate，FPR）为横坐标，根据模型的预测结果scores和真实标签labels，调整分类阈值，计算不同阈值下的真正率和假正率，得到一系列坐标点，连线得到ROC曲线，AUC是ROC曲线下的面积")]),s("li",null,[s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"TPR"),s("mo",null,"="),s("mfrac",null,[s("mtext",null,"TP"),s("mrow",null,[s("mtext",null,"TP"),s("mo",null,"+"),s("mtext",null,"FN")])])]),s("annotation",{encoding:"application/x-tex"}," \\text{TPR} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"TPR")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1297em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"TP")]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"FN")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"TP")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])])]),s("li",null,[s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"FPR"),s("mo",null,"="),s("mfrac",null,[s("mtext",null,"FP"),s("mrow",null,[s("mtext",null,"FP"),s("mo",null,"+"),s("mtext",null,"TN")])])]),s("annotation",{encoding:"application/x-tex"}," \\text{FPR} = \\frac{\\text{FP}}{\\text{FP} + \\text{TN}} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"FPR")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1297em","vertical-align":"-0.7693em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3603em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"FP")]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"TN")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord"},"FP")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7693em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])])]),s("li",null,[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Score\\label"),s("th",null,"0"),s("th",null,"1")])]),s("tbody",null,[s("tr",null,[s("td",null,"0"),s("td",null,"TN"),s("td",null,"FP")]),s("tr",null,[s("td",null,"1"),s("td",null,"FN"),s("td",null,"TP")])])])]),s("li",null,[s("p",null,"随机猜测的结果是TPR = FPR，AUC = 0.5（三角形的面积）")]),s("li",null,[s("p",null,"所有都预测为负样本，取(FPR, TPR) = (0, 0)")]),s("li",null,[s("p",null,"所有都预测为正样本：取(FPR, TPR) = (1, 1)")])])]),s("li",null,[s("p",null,"随机选出一对正负样本，分类器对于正样本打分大于负样本打分的概率；也就是分类器将正例排在负例前面的概率；所以AUC是一个排序概率："),s("ol",null,[s("li",null,[s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"AUC(P, N)"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("munder",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"p"),s("mo",null,"∈"),s("mi",null,"P")])]),s("munder",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"n"),s("mo",null,"∈"),s("mi",null,"N")])]),s("mn",{mathvariant:"double-struck"},"1"),s("mo",{stretchy:"false"},"("),s("mover",{accent:"true"},[s("mi",null,"p"),s("mo",null,"^")]),s("mo",null,">"),s("mover",{accent:"true"},[s("mi",null,"n"),s("mo",null,"^")]),s("mo",{stretchy:"false"},")")]),s("mrow",null,[s("msub",null,[s("mi",null,"N"),s("mo",null,"+")]),s("mo",null,"⋅"),s("msub",null,[s("mi",null,"N"),s("mo",null,"−")])])])]),s("annotation",{encoding:"application/x-tex"}," \\text{AUC(P, N)} = \\frac{\\sum_{p \\in P} \\sum_{n \\in N} \\mathbb{1}(\\hat{p} > \\hat{n})}{N_+ \\cdot N_-} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"AUC(P, N)")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4701em","vertical-align":"-0.8943em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5758em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2583em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"+")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"⋅"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2583em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.109em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mbin mtight"},"−")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.8258em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1786em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"p"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.13889em"}},"P")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.4358em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[s("span",{class:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1786em"}},[s("span",{style:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3271em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mopen"},"("),s("span",{class:"mord accent"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"p")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.1667em"}},[s("span",{class:"mord"},"^")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1944em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},">"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord accent"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6944em"}},[s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord mathnormal"},"n")]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"accent-body",style:{left:"-0.25em"}},[s("span",{class:"mord"},"^")])])])])])]),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8943em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])])]),s("li",null,[s("p",null,"分母：一共有MxN种正负样本组合，所以分母是正样本数✖️负样本数")]),s("li",null,[s("p",null,"但是AUC计算的具体实现也不是使用上面的公式，而是基于")])]),s("p",null,"Mann-Whitney U Test："),s("p",null,"对概率得分从小到大排序，得到所有正样本的rank index和，减去两个正样本组合的情况"),s("figure",null,[s("img",{src:"https://pq18uqc90b.feishu.cn/space/api/box/stream/download/asynccode/?code=NWU3ZDI0OTY2ZWNjYjQ2ODljN2Q3MTZkNmRkNjFkZThfa1o0TFdsUWFmUU9DZ1I3cHZGZ24xaFZDRlZLT1VSY0tfVG9rZW46WHVXWWJLTndUbzF0MzR4NmloOWNtNDRsbkVmXzE3NDI4OTk1NDc6MTc0MjkwMzE0N19WNA",alt:"img",tabindex:"0",loading:"lazy"}),s("figcaption",null,"img")]),s("ol",{start:"4"},[s("li",null,[s("p",null,[s("strong",null,"Mann-Whitney U Test")]),s("ul",null,[s("li",null,"定义：是一种统计检验方法：用于比较两个独立样本的中位数是否存在显著差异。这个检验方法适用于两组样本，其中样本不满足正态分布假设或方差齐性假设。它是对独立样本t检验的一种非参数替代方法。"),s("li",null,[l("基本思想：将"),s("strong",null,"两组数据合并"),l("起来，然后按照"),s("strong",null,"数值的大小进行排序"),l("，接着计算每个样本中的秩次（rank），然后根据rank计算U值，进行检验。U值的计算公式如下： "),s("ul",null,[s("li",null,[s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"U"),s("mn",null,"1"),s("mo",null,"="),s("mi",null,"R"),s("mn",null,"1"),s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("mi",null,"n"),s("mn",null,"1"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"}," U1 = R1 - \\frac{n1*(n1 + 1)}{2} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.113em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.427em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])])])])]),s("li",null,"R1是一组样本在整体上的rank之和，后面的项是R1自身排序后的rank之和（等差数列求和公式）"),s("li",null,[l("选择"),s("strong",null,"U1"),l(" 和"),s("strong",null,"U2"),l(" 中最小者与临界值"),s("strong",null,"Uα"),l(" 比较，当"),s("strong",null,"U < Uα[查表得到]"),l(" 时，拒绝"),s("strong",null,"H0[无显著差别]"),l("，接受"),s("strong",null,"H1[有显著差别]")])])]),s("li")])])])])],-1),o=n('<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><ul><li>AUC衡量的是一种排序能力，因此特别适合排序类业务评估</li><li>AUC对正负样本均衡情况并不敏感。因此在样本不均衡的情况下，也可以做出合理的评估</li><li>AUC不受阈值影响，其他指标比如precision，recall，F1，根据区分正负样本阈值的变化会有不同的结果，而AUC是对不同阈值取值得到结果的一种整体衡量</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>AUC的评估比较整体，无法反映召回率、精确率等在实际业务中经常关心的指标</li><li>AUC只关注正负样本之间的排序，没有衡量正样本/负样本内部的排序，因此无法衡量样本内部的好坏程度</li></ul><h2 id="auc-线下线上不一致问题" tabindex="-1"><a class="header-anchor" href="#auc-线下线上不一致问题"><span>AUC 线下线上不一致问题</span></a></h2><p>定义：离线AUC 很高（或提升很多）但 CTR 效果不理想；或 AUC 提升幅度不大，但 CTR 提升幅度很大的情况</p><p>原因：</p><ol><li>离线和在线特征不一致 <ol><li>ETL（数据生产的过程：Extract-Transform-Load）不一致</li><li>线上特征更新延迟</li></ol></li><li>数据泄漏 <ol><li>特征穿越（时序数据中使用预测事件后的特征） <ul><li>如何排查特征穿越问题 <ul><li>寻找与目标标签或者值高度相关的特征，相关性非常高的特征可能是泄露特征</li><li>训练模型之后看特征重要性分析，重要程度特别高的可能是泄露特征</li><li>假设检验：对随机试验的AB组数据做特征分布的T检验</li></ul></li></ul></li></ol></li><li>数据分布不一致 <ol><li>大促、季节变化等</li><li>数据有偏</li></ol></li><li>用户之间差距过大，没有按照用户Session分组：GAUC</li></ol><p>AUC只关注排序，没有量化</p><p>没有衡量正样本/负样本内部的排序，因此无法衡量样本内部的好坏程度</p><p>解决方法</p><p>解决（特征穿越，数据分布改变，大促活动）；AUC异常处理</p><p><a href="https://zhuanlan.zhihu.com/p/360765777" target="_blank" rel="noopener noreferrer">讲得很清楚的AUC八股</a></p><p><a href="https://zhuanlan.zhihu.com/p/42521586/" target="_blank" rel="noopener noreferrer">AUC线上线下不一致问题</a></p>',14),h=[i,p,c,r,o];function u(g,d){return e(),t("div",null,h)}const b=a(m,[["render",u],["__file","5.AUC.html.vue"]]),x=JSON.parse(`{"path":"/deeplearning/ml-basic/5.AUC.html","title":"AUC","lang":"zh-CN","frontmatter":{"title":"AUC","order":5,"copyright":"<a href=\\"https://creativecommons.org/licenses/by-nc/4.0/\\">CC BY-NC 4.0协议</a>","description":"AUC 定义和计算 计算方式/定义有两种，一般计算实现使用第二种。 ROC曲线下的面积 ROC曲线：真正率（True Positive Rate，TPR）为纵坐标，假正率（False Positive Rate，FPR）为横坐标，根据模型的预测结果scores和真实标签labels，调整分类阈值，计算不同阈值下的真正率和假正率，得到一系列坐标点，连线得...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/KKBlog/deeplearning/ml-basic/5.AUC.html"}],["meta",{"property":"og:site_name","content":"KK's Blog"}],["meta",{"property":"og:title","content":"AUC"}],["meta",{"property":"og:description","content":"AUC 定义和计算 计算方式/定义有两种，一般计算实现使用第二种。 ROC曲线下的面积 ROC曲线：真正率（True Positive Rate，TPR）为纵坐标，假正率（False Positive Rate，FPR）为横坐标，根据模型的预测结果scores和真实标签labels，调整分类阈值，计算不同阈值下的真正率和假正率，得到一系列坐标点，连线得..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pq18uqc90b.feishu.cn/space/api/box/stream/download/asynccode/?code=NWU3ZDI0OTY2ZWNjYjQ2ODljN2Q3MTZkNmRkNjFkZThfa1o0TFdsUWFmUU9DZ1I3cHZGZ24xaFZDRlZLT1VSY0tfVG9rZW46WHVXWWJLTndUbzF0MzR4NmloOWNtNDRsbkVmXzE3NDI4OTk1NDc6MTc0MjkwMzE0N19WNA"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-25T10:49:33.000Z"}],["meta",{"property":"article:author","content":"KK"}],["meta",{"property":"article:modified_time","content":"2025-03-25T10:49:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AUC\\",\\"image\\":[\\"https://pq18uqc90b.feishu.cn/space/api/box/stream/download/asynccode/?code=NWU3ZDI0OTY2ZWNjYjQ2ODljN2Q3MTZkNmRkNjFkZThfa1o0TFdsUWFmUU9DZ1I3cHZGZ24xaFZDRlZLT1VSY0tfVG9rZW46WHVXWWJLTndUbzF0MzR4NmloOWNtNDRsbkVmXzE3NDI4OTk1NDc6MTc0MjkwMzE0N19WNA\\"],\\"dateModified\\":\\"2025-03-25T10:49:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"KK\\",\\"url\\":\\"https://github.com/Nikki-Gu\\"}]}"]]},"headers":[{"level":2,"title":"AUC","slug":"auc","link":"#auc","children":[{"level":3,"title":"定义和计算","slug":"定义和计算","link":"#定义和计算","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"AUC 线下线上不一致问题","slug":"auc-线下线上不一致问题","link":"#auc-线下线上不一致问题","children":[]}],"git":{"createdTime":1742899773000,"updatedTime":1742899773000,"contributors":[{"name":"Nikki-Gu","email":"394632208@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1163},"filePathRelative":"deeplearning/ml-basic/5.AUC.md","localizedDate":"2025年3月25日","autoDesc":true}`);export{b as comp,x as data};
