(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{340:function(t,s,a){t.exports=a.p+"assets/img/14.de9064b9.jpg"},554:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("Visitors",{attrs:{mydate:"2021-04-12"}}),t._v(" "),n("h1",{attrs:{id:"二叉搜索树与双向链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树与双向链表"}},[t._v("#")]),t._v(" 二叉搜索树与双向链表")]),t._v(" "),n("h2",{attrs:{id:"描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),n("p",[t._v("输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。")]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("举例说明：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(340),alt:""}})]),t._v(" "),n("p",[t._v("二叉搜索树如上图所示，我们将其转换为配需双向链表。")]),t._v(" "),n("p",[t._v("根据二叉搜索树的特点：左结点的值<根结点的值<右结点的值，我们不难发现，使用二叉树的中序遍历出来的数据的数序，就是排序的顺序。因此，首先，确定了二叉搜索树的遍历方法。")]),t._v(" "),n("p",[t._v("接下来，我们看下图，我们可以把树分成三个部分：值为 10 的结点、根结点为 6 的左子树、根结点为 14 的右子树。根据排序双向链表的定义，值为 10 的结点将和它的左子树的最大一个结点链接起来，同时它还将和右子树最小的结点链接起来。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(340),alt:""}})]),t._v(" "),n("p",[t._v("按照中序遍历的顺序，当我们遍历到根结点时，它的左子树已经转换成一个排序的好的双向链表了，并且处在链表中最后一个的结点是当前值最大的结点。我们把值为 8 的结点和根结点链接起来，10 就成了最后一个结点，接着我们就去遍历右子树，并把根结点和右子树中最小的结点链接起来。")]),t._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回最左边的头节点，并且此时左双向链表的最后一个节点也是该节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pRootOfTree "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" pRootOfTree "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  leftLast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构建左子树为双向链表，返回链表头节点left")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Convert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//若左子树存在，则将左双向链表最后一个节点与当前节点连接起来")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里，leftLast和left的存在与否并不完全一致哦！")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  leftLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" leftLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//那么此时不论有没有left，左双向链表的最后一个节点都是当前root啦")]),t._v("\nleftLast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//构建右子树为双向链表，返回链表头结点right")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Convert")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将右双向链表头节点和当前节点连接起来")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//若有左子树，返回的永远是最左边的叶子节点（也就是最小的节点），若无左子树，则根节点就是最小的节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pRootOfTree"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);