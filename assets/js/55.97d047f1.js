(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{470:function(t,_,v){"use strict";v.r(_);var a=v(27),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"一-格式化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一-格式化"}},[t._v("#")]),t._v(" 一. 格式化")]),t._v(" "),v("p",[t._v("每次提交，Commit message 都包括两个核心部分：标题 和 内容。")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("<类型>(可选): <主题>\n// 空一行\n<内容>\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("p",[t._v("其中，"),v("code",[t._v("标题")]),t._v("是必需的，"),v("code",[t._v("内容")]),t._v("无需过多描述的话，"),v("code",[t._v("正文")]),t._v("内容部分可以省略。")]),t._v(" "),v("p",[t._v("不管是哪一个部分，任何一行都不得超过 "),v("code",[t._v("72")]),t._v(" 个字符（或 "),v("code",[t._v("100")]),t._v("个字符）。这是为了避免自动换行影响美观。")]),t._v(" "),v("h2",{attrs:{id:"二-标题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二-标题"}},[t._v("#")]),t._v(" 二.标题")]),t._v(" "),v("p",[t._v("标题部分只有一行，包括字段："),v("code",[t._v("类型")]),t._v(" 和 "),v("code",[t._v("主题")]),t._v("。(标题限制总字数在 50 个字符以内，以保证容易阅读。)")]),t._v(" "),v("h3",{attrs:{id:"_1-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型"}},[t._v("#")]),t._v(" 1.类型")]),t._v(" "),v("p",[v("strong",[t._v("1.1 "),v("code",[t._v("类型")]),t._v(" 用于说明 "),v("code",[t._v("commit")]),t._v(" 的类别，只允许使用下面 7 个标识。")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("init：")]),t._v(" 项目初始化（用于项目初始化或其他某种行为的开始描述，不影响代码）")]),t._v(" "),v("li",[v("strong",[t._v("feat：")]),t._v(" 新功能（feature）")]),t._v(" "),v("li",[v("strong",[t._v("fix：")]),t._v(" 修补 bug")]),t._v(" "),v("li",[v("strong",[t._v("docs：")]),t._v(" 文档（documentation）")]),t._v(" "),v("li",[v("strong",[t._v("opt：")]),t._v(" 优化和改善，比如弹窗进行确认提示等相关的，不会改动逻辑和具体功能等")]),t._v(" "),v("li",[v("strong",[t._v("style：")]),t._v(" 格式（不影响代码运行的变动）")]),t._v(" "),v("li",[v("strong",[t._v("refactor：")]),t._v(" 重构（即不是新增功能，也不是修改 bug 的代码变动）")]),t._v(" "),v("li",[v("strong",[t._v("test：")]),t._v(" 增加测试")]),t._v(" "),v("li",[v("strong",[t._v("save：")]),t._v(" 单纯地保存记录")]),t._v(" "),v("li",[v("strong",[t._v("other：")]),t._v(" 用于难以分类的类别（不建议使用，但一些如删除不必要的文件，更新.ignore 之类的可以使用）")])]),t._v(" "),v("p",[v("strong",[t._v("1.2 "),v("code",[t._v("（可选）")]),t._v(" 类型后面可以加上括号，括号内填写主要变动的范围")])]),t._v(" "),v("p",[t._v("比如按功能模块分，某模块；或按项目三层架构模式分，分数据层、控制层之类的。")]),t._v(" "),v("ul",[v("li",[t._v("#：表示模块")])]),t._v(" "),v("ul",[v("li",[t._v("#student --\x3e 表示 学生模块 （具体的模块开头字母小写，驼峰命名）")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("#ALL --\x3e 表示 所有模块 （特殊含义如 ALL 表所有，MOST 表大部分，用大写字母表示）")])]),t._v(" "),v("li",[v("p",[t._v("#MOST --\x3e 表示 大部分模块")])])]),t._v(" "),v("p",[t._v("e.g.")]),t._v(" "),v("blockquote",[v("p",[t._v("feat(#student): 新增添加学生的功能 —— 表示 student 模块新增功能，功能是添加学生")])]),t._v(" "),v("h3",{attrs:{id:"_2-主题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-主题"}},[t._v("#")]),t._v(" 2.主题")]),t._v(" "),v("p",[v("code",[t._v("主题")]),t._v("是"),v("code",[t._v("commit")]),t._v("目的的简短描述，不超过 50 个字符。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes")])]),t._v(" "),v("li",[v("p",[t._v("第一个字母小写")])]),t._v(" "),v("li",[v("p",[t._v("结尾不加句号（.）")])])]),t._v(" "),v("h2",{attrs:{id:"三-内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三-内容"}},[t._v("#")]),t._v(" 三.内容")]),t._v(" "),v("p",[t._v("内容部分是对本次 commit 的详细描述，可以分成多行，正文在 72 个字符处换行。")]),t._v(" "),v("p",[t._v("使用正文解释是什么(what)和为什么(why)，而不是如何做，以及与以前行为的对比。")]),t._v(" "),v("p",[t._v("e.g：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("balabala : balabala\n\nwhat:\nbalabala\n\nwhy:\nbalabala\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br")])]),v("h2",{attrs:{id:"四-好处"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四-好处"}},[t._v("#")]),t._v(" 四.好处")]),t._v(" "),v("ol",[v("li",[t._v("提供更多的历史信息，方便快速浏览")])]),t._v(" "),v("p",[t._v("使用"),v("code",[t._v("git log")]),t._v("可得到历史"),v("code",[t._v("commit")]),t._v("的信息")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("可以过滤某些 commit（比如文档改动），便于快速查找信息")])]),t._v(" "),v("p",[t._v("关于更多 git log 的输出格式，可参考："),v("a",{attrs:{href:"https://github.com/geeeeeeeeek/git-recipes/wiki/5.3-Git-log-%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95#%E8%BF%87%E6%BB%A4%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2",target:"_blank",rel:"noopener noreferrer"}},[t._v("个性化你的 Git Log 的输出格式"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"五-总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五-总结"}},[t._v("#")]),t._v(" 五.总结")]),t._v(" "),v("p",[t._v("正确的 git 提交建议：")]),t._v(" "),v("p",[t._v("1、不同的要分别分次提交，（这里不同指,如：不同的修改类型，不同的模块，不同的功能等）")]),t._v(" "),v("p",[t._v("2、提交的信息要进行一定程度的格式化。")]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("p",[t._v("[1] https://www.cnblogs.com/deng-cc/p/6322122.html")]),t._v(" "),v("p",[t._v("[2] http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html")])])}),[],!1,null,null,null);_.default=e.exports}}]);