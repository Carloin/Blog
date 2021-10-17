(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{521:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),a("p",[t._v("使用原生"),a("code",[t._v("JS")]),t._v("实现"),a("code",[t._v("call")]),t._v("和"),a("code",[t._v("apply")]),t._v("函数，充分了解其内部原理。"),a("code",[t._v("call")]),t._v("和"),a("code",[t._v("apply")]),t._v("都是为了解决改变"),a("code",[t._v("this")]),t._v("的指向。作用都相同，只是传参的方式不同。除了第一个参数外，"),a("code",[t._v("call")]),t._v("可以接受一个参数列表，"),a("code",[t._v("apply")]),t._v("只接受一个参数数组。")]),t._v(" "),a("h2",{attrs:{id:"_2-call-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-call-函数"}},[t._v("#")]),t._v(" 2. call 函数")]),t._v(" "),a("h3",{attrs:{id:"_2-1-描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-描述"}},[t._v("#")]),t._v(" 2.1 描述")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("call()")])]),t._v(" 方法使用一个指定的 "),a("code",[t._v("this")]),t._v(" 值和单独给出的一个或多个参数来调用一个函数。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-语法"}},[t._v("#")]),t._v(" 2.2 语法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-3-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-参数"}},[t._v("#")]),t._v(" 2.3 参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("thisArg")]),t._v("：可选的。在 "),a("em",[t._v("fun")]),t._v(" 函数运行时指定的 "),a("code",[t._v("this")]),t._v(" 值*。*需要注意的是，指定的 "),a("code",[t._v("this")]),t._v(" 值并不一定是该函数执行时真正的 "),a("code",[t._v("this")]),t._v(" 值，如果这个函数在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("非严格模式")]),a("OutboundLink")],1),t._v("下运行，则指定为 "),a("code",[t._v("null")]),t._v("和 "),a("code",[t._v("undefined")]),t._v("的 "),a("code",[t._v("this")]),t._v(" 值会自动指向全局对象（浏览器中就是 window 对象），同时值为原始值（数字，字符串，布尔值）的 "),a("code",[t._v("this")]),t._v(" 会指向该原始值的自动包装对象。")]),t._v(" "),a("li",[a("strong",[t._v("arg1, arg2, ...")]),t._v(":可选的。指定的参数列表。")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-返回值"}},[t._v("#")]),t._v(" 2.4 返回值")]),t._v(" "),a("p",[t._v("使用调用者提供的 "),a("code",[t._v("this")]),t._v(" 值和参数调用该函数的返回值。若该方法没有返回值，则返回 "),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-5-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-实现"}},[t._v("#")]),t._v(" 2.5 实现")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myCall")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过参数伪数组将context后面的参数取出来")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除 fn")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("实现思路：")]),t._v(" "),a("ul",[a("li",[t._v("首先，判断调用"),a("code",[t._v("mycall")]),t._v("的是不是函数，如果不是，则直接抛出异常；")]),t._v(" "),a("li",[t._v("接着，判断是否传入了第一个参数"),a("code",[t._v("context")]),t._v("，也就是要指定的"),a("code",[t._v("this")]),t._v("值，如果没有传入，则默认为"),a("code",[t._v("window")]),t._v("全局对象；")]),t._v(" "),a("li",[t._v("然后，谁将来调用"),a("code",[t._v("mycall")]),t._v("，那么"),a("code",[t._v("this")]),t._v("就是谁，将其赋给"),a("code",[t._v("context.fn")]),t._v(";")]),t._v(" "),a("li",[t._v("然后，通过参数伪数组将"),a("code",[t._v("context")]),t._v("后面的参数取出来,并传给"),a("code",[t._v("context.fn")]),t._v("获得执行结果"),a("code",[t._v("result")]),t._v("；")]),t._v(" "),a("li",[t._v("最后，删除掉"),a("code",[t._v("context.fn")]),t._v("，并将"),a("code",[t._v("result")]),t._v("返回；")])]),t._v(" "),a("h2",{attrs:{id:"_3-aplly-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-aplly-函数"}},[t._v("#")]),t._v(" 3. aplly 函数")]),t._v(" "),a("h3",{attrs:{id:"_3-1-描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-描述"}},[t._v("#")]),t._v(" 3.1 描述")]),t._v(" "),a("p",[a("strong",[t._v("apply()")]),t._v(" 方法调用一个具有给定"),a("code",[t._v("this")]),t._v("值的函数，以及作为一个数组（或"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections##Working_with_array-like_objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("类似数组对象"),a("OutboundLink")],1),t._v("）提供的参数。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-语法"}},[t._v("#")]),t._v(" 3.2 语法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("argsArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-3-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-参数"}},[t._v("#")]),t._v(" 3.3 参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("thisArg")]),t._v(":可选的。在 "),a("em",[t._v("func")]),t._v(" 函数运行时使用的 "),a("code",[t._v("this")]),t._v(" 值。请注意，"),a("code",[t._v("this")]),t._v("可能不是该方法看到的实际值：如果这个函数处于"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("非严格模式"),a("OutboundLink")],1),t._v("下，则指定为 "),a("code",[t._v("null")]),t._v(" 或 "),a("code",[t._v("undefined")]),t._v(" 时会自动替换为指向全局对象，原始值会被包装。")]),t._v(" "),a("li",[a("strong",[t._v("argsArray")]),t._v(":可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 "),a("code",[t._v("func")]),t._v(" 函数。如果该参数的值为 "),a("code",[t._v("null")]),t._v("或 "),a("code",[t._v("undefined")]),t._v("，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。")])]),t._v(" "),a("h3",{attrs:{id:"_3-4-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-返回值"}},[t._v("#")]),t._v(" 3.4 返回值")]),t._v(" "),a("p",[t._v("调用有指定"),a("code",[t._v("**this**")]),t._v("值和参数的函数的结果。")]),t._v(" "),a("h3",{attrs:{id:"_3-5-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-实现"}},[t._v("#")]),t._v(" 3.5 实现")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myApply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断是否存在第二个参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果存在就将第二个参数也展开")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("实现思路：")]),t._v(" "),a("ul",[a("li",[t._v("首先，判断调用"),a("code",[t._v("myapply")]),t._v("的是不是函数，如果不是，则直接抛出异常；")]),t._v(" "),a("li",[t._v("接着，判断是否传入了第一个参数"),a("code",[t._v("context")]),t._v("，也就是要指定的"),a("code",[t._v("this")]),t._v("值，如果没有传入，则默认为"),a("code",[t._v("window")]),t._v("全局对象；")]),t._v(" "),a("li",[t._v("然后，谁将来调用"),a("code",[t._v("myapply")]),t._v("，那么"),a("code",[t._v("this")]),t._v("就是谁，将其赋给"),a("code",[t._v("context.fn")]),t._v(";")]),t._v(" "),a("li",[t._v("然后，判断是否传入了第二个参数，如果传入了则将其使用展开运算符"),a("code",[t._v("...")]),t._v("传给"),a("code",[t._v("context.fn")]),t._v("获得执行结果"),a("code",[t._v("result")]),t._v("，如果没有传入，则直接调用"),a("code",[t._v("context.fn")]),t._v("获得执行结果"),a("code",[t._v("result")]),t._v("；")]),t._v(" "),a("li",[t._v("最后，删除掉"),a("code",[t._v("context.fn")]),t._v("，并将"),a("code",[t._v("result")]),t._v("返回；")])]),t._v(" "),a("h2",{attrs:{id:"_4-bind-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-bind-函数"}},[t._v("#")]),t._v(" 4. bind 函数")]),t._v(" "),a("h3",{attrs:{id:"_4-1-描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-描述"}},[t._v("#")]),t._v(" 4.1 描述")]),t._v(" "),a("p",[t._v("**"),a("code",[t._v("bind()")]),a("strong",[t._v("方法创建一个新的函数，在")]),a("code",[t._v("bind()")]),t._v("**被调用时，这个新函数的"),a("code",[t._v("this")]),t._v("被"),a("code",[t._v("bind")]),t._v("的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-语法"}},[t._v("#")]),t._v(" 4.2 语法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thisArg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-3-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-参数"}},[t._v("#")]),t._v(" 4.3 参数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("**thisArg:**调用绑定函数时作为"),a("code",[t._v("this")]),t._v("参数传递给目标函数的值。 如果使用"),a("code",[t._v("new")]),t._v("运算符构造绑定函数，则忽略该值。当使用"),a("code",[t._v("bind")]),t._v("在"),a("code",[t._v("setTimeout")]),t._v("中创建一个函数（作为回调提供）时，作为"),a("code",[t._v("thisArg")]),t._v("传递的任何原始值都将转换为"),a("code",[t._v("object")]),t._v("。如果"),a("code",[t._v("bind")]),t._v("函数的参数列表为空，执行作用域的"),a("code",[t._v("this")]),t._v("将被视为新函数的"),a("code",[t._v("thisArg")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("**arg1, arg2, ...😗*当目标函数被调用时，预先添加到绑定函数的参数列表中的参数。")])])]),t._v(" "),a("h3",{attrs:{id:"_4-4-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-返回值"}},[t._v("#")]),t._v(" 4.4 返回值")]),t._v(" "),a("p",[t._v("返回一个原函数的拷贝，并拥有指定的"),a("strong",[t._v("this")]),t._v("值和初始参数。")]),t._v(" "),a("h3",{attrs:{id:"_4-5-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-实现"}},[t._v("#")]),t._v(" 4.5 实现")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mybind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _this "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回一个函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this是否是F的实例 也就是返回的F是否通过new调用")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("实现思路：")]),t._v(" "),a("ul",[a("li",[t._v("首先，判断调用"),a("code",[t._v("mybind")]),t._v("的是不是函数，如果不是，则直接抛出异常；")]),t._v(" "),a("li",[t._v("接着，谁将来调用"),a("code",[t._v("mybind")]),t._v("，那么"),a("code",[t._v("this")]),t._v("就是谁，将其赋给"),a("code",[t._v("_this")]),t._v("，缓存一下;")]),t._v(" "),a("li",[t._v("然后，通过参数伪数组将"),a("code",[t._v("context")]),t._v("后面的参数(预先添加到绑定函数的参数)取出来，记作"),a("code",[t._v("args")]),t._v(",")]),t._v(" "),a("li",[t._v("然后，返回一个函数，并判断如果使用"),a("code",[t._v("new")]),t._v("运算符构造绑定函数，则忽略传入的第一个参数"),a("code",[t._v("context")]),t._v("，并将预先添加到绑定函数的参数"),a("code",[t._v("args")]),t._v("和将来传入新函数的参数"),a("code",[t._v("arguments")]),t._v("分别通过展开运算符"),a("code",[t._v("...")]),t._v("依次传入给调用"),a("code",[t._v("mybind")]),t._v("的调用者，并将结果返回。")]),t._v(" "),a("li",[t._v("最后，如果不是使用"),a("code",[t._v("new")]),t._v("运算符构造绑定函数，则对调用者使用"),a("code",[t._v("apply")]),t._v("方法，将传入的第一个参数以及预先添加到绑定函数的参数"),a("code",[t._v("args")]),t._v("和将来传入新函数的参数"),a("code",[t._v("arguments")]),t._v("分别通过展开运算符"),a("code",[t._v("...")]),t._v("依次传入给调用"),a("code",[t._v("mybind")]),t._v("的调用者，并将结果返回；")])])])}),[],!1,null,null,null);s.default=e.exports}}]);