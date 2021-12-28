(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{373:function(s,t,a){s.exports=a.p+"assets/img/03.43d8db47.png"},374:function(s,t,a){s.exports=a.p+"assets/img/04.3c0499db.png"},482:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("Visitors"),s._v(" "),n("h2",{attrs:{id:"_2021-12-01"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2021-12-01"}},[s._v("#")]),s._v(" 📆 2021.12.01")]),s._v(" "),n("h3",{attrs:{id:"问题一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题一"}},[s._v("#")]),s._v(" 问题一：")]),s._v(" "),n("ol",[n("li",[s._v("问题描述：在 antd pro v5 项目中管理代码，使用 gitlab 上传代码，到 git commit 步骤报错")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("stylelint "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("syntax less found some errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Please fix them and "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" committing again\nnpm run lint"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("staged"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("js found some errors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Please fix them and "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" committing again\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("原因：在使用 antd pro v5 创建项目时候，开启 eslint 的检测机制，所以如果提交的代码不符合检测机制，上传失败")])]),s._v(" "),n("li",[n("p",[s._v("解决：")])])]),s._v(" "),n("ul",[n("li",[s._v("解决一：在"),n("code",[s._v("git commit")]),s._v("时，加上"),n("code",[s._v("--no-verify")]),s._v("跳过检测机制,例如")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git commit --no-verify -m'you git message'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("解决二：到根目录中的.eslintignore 文件，将 src 放入其中，以便 git 提交时跳过 src 目录中所有文件的 eslint 检测机制。如下")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("lambda")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("scripts\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("history\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("\ndist\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("umi\nmock\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("src")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("将 src 放入这里"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"问题二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题二"}},[s._v("#")]),s._v(" 问题二：")]),s._v(" "),n("ol",[n("li",[s._v("问题描述：在父组件中有个 header 子组件，在 header 子组件中有个 modal,想实现如果没有选择数据或者选了多条数据，是不能弹出 modal，因为取消 modal 操作在 header 子组件中，所以，就需要在父组件中去调用子组件中的函数")]),s._v(" "),n("li",[s._v("方法：")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("方法一：ref")])]),s._v(" "),n("li",[n("p",[s._v("方法二：")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ChildCmpt "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./ChildCmpt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FatherCmpt")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("React"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Component")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fnc")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 父组件调用子组件的handleMdfModal方法")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ChildCmpt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("childFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" FatherCmpt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"问题三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题三"}},[s._v("#")]),s._v(" 问题三")]),s._v(" "),n("ol",[n("li",[s._v("问题描述：在向后端请求数据的时候，出现以下的报错，其大概意思就是出现跨域问题。\n"),n("img",{attrs:{src:a(373),alt:""}})]),s._v(" "),n("li",[s._v("原因：后端已实现跨域，所以问题可能在前端的配置这里")]),s._v(" "),n("li",[s._v("解决：\n方法一：找到将/utils/request 文件，注释掉 credentials\n"),n("img",{attrs:{src:a(374),alt:""}}),s._v("\n方法二：不用 antd pro 封装的，直接用 fetch")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的url请求地址"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"res"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_2021-12-10"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2021-12-10"}},[s._v("#")]),s._v(" 📆 2021.12.10")]),s._v(" "),n("h3",{attrs:{id:"问题一-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题一-2"}},[s._v("#")]),s._v(" 问题一")]),s._v(" "),n("ol",[n("li",[s._v("问题描述："),n("code",[s._v("<InputNumber>")]),s._v(" 交互 bug，输入了错误值，然后直接确认，给人错觉的，以为是错误值也保存成功了。")]),s._v(" "),n("li",[s._v("解决：改用"),n("code",[s._v("<Input />")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);