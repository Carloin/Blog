(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{631:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一-浏览器渲染机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-浏览器渲染机制"}},[t._v("#")]),t._v(" 一. 浏览器渲染机制")]),t._v(" "),a("ul",[a("li",[t._v("浏览器采用流式布局模型（"),a("code",[t._v("Flow Based Layout")]),t._v("）")]),t._v(" "),a("li",[t._v("浏览器会把"),a("code",[t._v("HTML")]),t._v("解析成"),a("code",[t._v("DOM")]),t._v("，把"),a("code",[t._v("CSS")]),t._v("解析成"),a("code",[t._v("CSSOM")]),t._v("，"),a("code",[t._v("DOM")]),t._v("和"),a("code",[t._v("CSSOM")]),t._v("合并就产生了渲染树（"),a("code",[t._v("Render Tree")]),t._v("）。")]),t._v(" "),a("li",[t._v("有了"),a("code",[t._v("RenderTree")]),t._v("，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。")]),t._v(" "),a("li",[t._v("由于浏览器使用流式布局，对"),a("code",[t._v("Render Tree")]),t._v("的计算通常只需要遍历一次就可以完成，"),a("strong",[t._v("但"),a("code",[t._v("table")]),t._v("及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用"),a("code",[t._v("table")]),t._v("布局的原因之一")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"二-重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-重绘"}},[t._v("#")]),t._v(" 二. 重绘")]),t._v(" "),a("p",[t._v("由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如"),a("code",[t._v("outline")]),t._v(", "),a("code",[t._v("visibility")]),t._v(", "),a("code",[t._v("color")]),t._v("、"),a("code",[t._v("background-color")]),t._v("等，重绘的代价是高昂的，因为浏览器必须验证 DOM 树上其他节点元素的可见性。")]),t._v(" "),a("h2",{attrs:{id:"三-回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-回流"}},[t._v("#")]),t._v(" 三. 回流")]),t._v(" "),a("p",[t._v("回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及 DOM 中紧随其后的节点、祖先节点元素的随后的回流。")]),t._v(" "),a("div",{staticClass:"language-Html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我的组件"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误："),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误的描述…"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("错误纠正"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("第一步"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("第二步"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("在上面的 HTML 片段中，对该段落("),a("code",[t._v("<p>")]),t._v("标签)回流将会引发强烈的回流，因为它是一个子节点。这也导致了祖先的回流（"),a("code",[t._v("div.error")]),t._v("和"),a("code",[t._v("body")]),t._v(" – 视浏览器而定）。此外，"),a("code",[t._v("<h5>")]),t._v("和"),a("code",[t._v("<ol>")]),t._v("也会有简单的回流，因为其在 DOM 中在回流元素之后。"),a("strong",[t._v("大部分的回流将导致页面的重新渲染。")])]),t._v(" "),a("p",[a("strong",[t._v("回流必定会发生重绘，重绘不一定会引发回流。")])]),t._v(" "),a("h2",{attrs:{id:"四-浏览器优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-浏览器优化"}},[t._v("#")]),t._v(" 四. 浏览器优化")]),t._v(" "),a("p",[t._v("现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即 16.6ms）才会清空队列，但当你"),a("strong",[t._v("获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值")]),t._v("。")]),t._v(" "),a("p",[t._v("主要包括以下属性或方法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("offsetTop")]),t._v("、"),a("code",[t._v("offsetLeft")]),t._v("、"),a("code",[t._v("offsetWidth")]),t._v("、"),a("code",[t._v("offsetHeight")])]),t._v(" "),a("li",[a("code",[t._v("scrollTop")]),t._v("、"),a("code",[t._v("scrollLeft")]),t._v("、"),a("code",[t._v("scrollWidth")]),t._v("、"),a("code",[t._v("scrollHeight")])]),t._v(" "),a("li",[a("code",[t._v("clientTop")]),t._v("、"),a("code",[t._v("clientLeft")]),t._v("、"),a("code",[t._v("clientWidth")]),t._v("、"),a("code",[t._v("clientHeight")])]),t._v(" "),a("li",[a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("li",[a("code",[t._v("getComputedStyle()")])]),t._v(" "),a("li",[a("code",[t._v("getBoundingClientRect()")])])]),t._v(" "),a("p",[t._v("所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。")]),t._v(" "),a("h2",{attrs:{id:"五-减少重绘与回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-减少重绘与回流"}},[t._v("#")]),t._v(" 五. 减少重绘与回流")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("CSS")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("使用 "),a("code",[t._v("transform")]),t._v(" 替代 "),a("code",[t._v("top")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用  "),a("code",[t._v("visibility")]),t._v("  替换  "),a("code",[t._v("display: none")])]),t._v(" ，因为前者只会引起重绘，后者会引发回流（改变了布局")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免使用"),a("code",[t._v("table")]),t._v("布局")]),t._v("，可能很小的一个小改动会造成整个  "),a("code",[t._v("table")]),t._v("  的重新布局。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("尽可能在"),a("code",[t._v("DOM")]),t._v("树的最末端改变"),a("code",[t._v("class")])]),t._v("，回流是不可避免的，但可以减少其影响。尽可能在 DOM 树的最末端改变 class，可以限制了回流的范围，使其影响尽可能少的节点。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免设置多层内联样式")]),t._v("，CSS 选择符"),a("strong",[t._v("从右往左")]),t._v("匹配查找，避免节点层级过多。")]),t._v(" "),a("div",{staticClass:"language-Html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > a > span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("对于第一种设置样式的方式来说，浏览器只需要找到页面中所有的  "),a("code",[t._v("span")]),t._v("  标签然后设置颜色，但是对于第二种设置样式的方式来说，浏览器首先需要找到所有的  "),a("code",[t._v("span")]),t._v("  标签，然后找到  "),a("code",[t._v("span")]),t._v("  标签上的  "),a("code",[t._v("a")]),t._v("  标签，最后再去找到  "),a("code",[t._v("div")]),t._v("  标签，然后给符合这种条件的  "),a("code",[t._v("span")]),t._v("  标签设置颜色，这样的递归过程就很复杂。所以我们应该尽可能的避免写"),a("strong",[t._v("过于具体")]),t._v("的 CSS 选择器，然后对于 HTML 来说也尽量少的添加无意义标签，保证"),a("strong",[t._v("层级扁平")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("将动画效果应用到"),a("code",[t._v("position")]),t._v("属性为"),a("code",[t._v("absolute")]),t._v("或"),a("code",[t._v("fixed")]),t._v("的元素上")]),t._v("，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 "),a("code",[t._v("requestAnimationFrame")]),t._v("，详情参考"),a("a",{attrs:{href:"https://github.com/LuNaHaiJiao/blog/issues/30",target:"_blank",rel:"noopener noreferrer"}},[t._v("探讨 requestAnimationFrame"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("避免使用"),a("code",[t._v("CSS")]),t._v("表达式")]),t._v("，可能会引发回流。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("将频繁重绘或者回流的节点设置为图层")]),t._v("，图层能够阻止该节点的渲染行为影响别的节点，例如"),a("code",[t._v("will-change")]),t._v("、"),a("code",[t._v("video")]),t._v("、"),a("code",[t._v("iframe")]),t._v("等标签，浏览器会自动将该节点变为图层。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("CSS3 硬件加速（GPU 加速）")]),t._v("，使用 css3 硬件加速，可以让"),a("code",[t._v("transform")]),t._v("、"),a("code",[t._v("opacity")]),t._v("、"),a("code",[t._v("filters")]),t._v("这些动画不会引起回流重绘 。但是对于动画的其它属性，比如"),a("code",[t._v("background-color")]),t._v("这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。")])])])]),t._v(" "),a("li",[a("p",[t._v("JavaScript")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("避免频繁操作样式")]),t._v("，最好一次性重写"),a("code",[t._v("style")]),t._v("属性，或者将样式列表定义为"),a("code",[t._v("class")]),t._v("并一次性更改"),a("code",[t._v("class")]),t._v("属性。")]),t._v(" "),a("li",[a("strong",[t._v("避免频繁操作"),a("code",[t._v("DOM")])]),t._v("，创建一个"),a("code",[t._v("documentFragment")]),t._v("，在它上面应用所有"),a("code",[t._v("DOM操作")]),t._v("，最后再把它添加到文档中。")]),t._v(" "),a("li",[a("strong",[t._v("避免频繁读取会引发回流/重绘的属性")]),t._v("，如果确实需要多次使用，就用一个变量缓存起来。")]),t._v(" "),a("li",[a("strong",[t._v("对具有复杂动画的元素使用绝对定位")]),t._v("，使它脱离文档流，否则会引起父元素及后续元素频繁回流。")])])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("[1] https://www.pzijun.cn/blog/6/1.2.html")])])}),[],!1,null,null,null);s.default=e.exports}}]);