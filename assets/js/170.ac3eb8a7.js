(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{641:function(t,e,v){"use strict";v.r(e);var a=v(27),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("Visitors",{attrs:{mydate:"2021-10-14"}}),t._v(" "),v("h1",{attrs:{id:"前端代码管理规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前端代码管理规范"}},[t._v("#")]),t._v(" 前端代码管理规范")]),t._v(" "),v("ol",[v("li",[t._v("确定一下分支管理的内容。")])]),t._v(" "),v("ul",[v("li",[t._v("主分支：主分支是正式发布的分支，在真正开发完全前，都不应该合并到主分支上。")]),t._v(" "),v("li",[t._v("测试分支：测试情况下使用的分支，一般来说除了发布的域名与主分支不同外，应该都与主分支相同。")]),t._v(" "),v("li",[t._v("DEV 分支：开发情况下的分支，可以每隔半天或者一天左右可以定期预览在某个服务器上。一般来说不用。\n这几个是分支管理的几个内容，正常情况开发会直接 push 到 DEV 分支上，这其实不太好，也有点问题。")])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("code",[t._v("Code Review")])])]),t._v(" "),v("h2",{attrs:{id:"单独分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单独分支"}},[t._v("#")]),t._v(" 单独分支")]),t._v(" "),v("p",[t._v("也就是说，假设现在我们有个版本 v1.0 的初版，就应该从 dev 上检出一个新的分支用作初版的开发，然后同学在在这个分支上继续检出，然后提交，请求负责人进行 code Review ，通过的代码在进行合并。")]),t._v(" "),v("p",[t._v("这里为什么不直接在 v1.0 版本上开发？如果直接在 v1.0 版本上开发，很容易导致代码风格不一，从而导致维护困难。通过这样子的方法，通过申请合并的方式，然后审核，修改，很大程度上可以规避上诉说的团队风格问题。")]),t._v(" "),v("h2",{attrs:{id:"代码自动化检测"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码自动化检测"}},[t._v("#")]),t._v(" 代码自动化检测")]),t._v(" "),v("p",[t._v("除了通过 code Review 的方式来统一代码，我们需要也更应该将一些重复繁杂、成效低的劳作交给自动化来做。")]),t._v(" "),v("p",[t._v("比如："),v("code",[t._v("JS、TS")]),t._v(" 文件命名规范、import 导入规范（不允许重复导入）、define but never use")]),t._v(" "),v("p",[t._v("这些不是 code Review 也不应该是该阶段所需要注意的，我们将这些能够自动化检测的内容交给脚本去做，让 code Review 更加注重于业务逻辑、复杂的交互上面。")]),t._v(" "),v("p",[t._v("前端这一块向来做的不错，有着 TypeScript 、Eslint 这一类的插件，还能自定义规范，编写脚本。")]),t._v(" "),v("h2",{attrs:{id:"最佳实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),v("p",[t._v("工程中自带 prettier 和 eslint ，并且有一套专属于自己的规则（参考大厂的也可以）")]),t._v(" "),v("p",[t._v("如果涉及到 TypeScript 的项目，一定要也只能使用 .ts 结尾的文件。\n代码管理，在 push 代码前，一定要通过钩子跑一遍自定义脚本（ husky、precommit ），规范一下代码。")]),t._v(" "),v("h2",{attrs:{id:"个人一些总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#个人一些总结"}},[t._v("#")]),t._v(" 个人一些总结")]),t._v(" "),v("ol",[v("li",[t._v("单个 JS 文件不应该超过 250 行代码（不包含注释）")])]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[t._v("https://zhuanlan.zhihu.com/p/399424496")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);