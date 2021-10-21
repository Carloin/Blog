(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{445:function(n,s,e){"use strict";e.r(s);var t=e(19),o=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"vue项目目录规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue项目目录规范"}},[n._v("#")]),n._v(" Vue项目目录规范")]),n._v(" "),e("blockquote"),n._v(" "),e("p",[n._v("├── dist                        // [生成] 打包目录\n├── src                         // [必选] 开发目录\n│    ├── views                  // [必选] 页面组件，不允许有其他类型组件混入\n│    ├── components             // [必选] 业务组件必须写在这里\n│    ├── libs                   // [可选] 公共库（一般用于对一些库的封装）\n│    ├── utils                  // [可选] 工具库（用于一些函数方法之类的库）\n│    ├── assets                 // [可选] 公共资源（被项目引用的经过webpack处理的资源）\n│    ├── store                  // [可选] 数据存储 vuex\n│    ├── route                  // [可选] 路由\n│    ├── style                  // [可选] 公共样式\n│    ├── App.vue                // [必选] 根组件\n│    └── main.(js|ts)           // [必选] 入口文件\n├── public                      // [必选] 不会被webpack编译的资源\n│    ├── index.html             // [必选] 模板\n│    └── logo.png               // [可选] 项目 logo\n├── config                      // [可选] 配置目录\n├── mock                        // [可选] mock 数据\n├── test                        // [可选] 测试代码\n├── docs                        // [可选] 文档\n│── .gitignore                  // [必选] git 忽略的文件\n│── .editorconfig               // [必选] 编译器配置\n│── .npmignore                  // [可选] 如果是 npm 包是必选\n│── jsconfig.json               // [可选] 用于 vscode 配置\n├── README.md                   // [必选] 导读\n├── package.json                // [必选] 大家都懂\n└── ......                      // [可选] 一些工具的配置，如果 babel.config.js 等")]),n._v(" "),e("h3",{attrs:{id:"components、views-具体职能划分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components、views-具体职能划分"}},[n._v("#")]),n._v(" components、views 具体职能划分")]),n._v(" "),e("p",[n._v("components 只写公共组件，页面附带组件写在 views 内")]),n._v(" "),e("blockquote"),n._v(" "),e("p",[n._v("└── src\n├── views\n│    └── home\n│         ├── index.vue\n│         ├── Banner.vue\n│         └── Card.vue\n├── components\n│    ├── Swiper.vue\n│    └── Button.vue\n├── store                 // 对于较大的项目，建议按业务模块拆分管理\n│    ├── index.js\n│    ├── home.js\n│    └── mine.js\n├── route                 // 对于较大的项目，建议按业务模块拆分管理\n│    ├── index.js\n│    ├── home.js\n│    └── mine.js\n└── assets                // 重复使用的公共资源放在顶层 assets 文件，避免重复定义")]),n._v(" "),e("h2",{attrs:{id:"react项目目录规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react项目目录规范"}},[n._v("#")]),n._v(" React项目目录规范")]),n._v(" "),e("h3",{attrs:{id:"网络上总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络上总结"}},[n._v("#")]),n._v(" 网络上总结")]),n._v(" "),e("blockquote"),n._v(" "),e("p",[n._v("src\n| -- components  // 公共组件\n| -- commonA\n| -- index.jsx\n| -- style.css\n| -- reducers // 公共 reducers\n| -- actions // 公共 actions\n| -- sagas // 公共 sagas，如果需要的话\n| -- containers\n| -- A\n| -- components // 私有组件\n| -- A1\n| -- index.jsx\n| -- style.css\n| -- index.jsx // react 组件\n| -- actions.js // action 文件，可视复杂度成为一个文件夹\n| -- style.css // 样式文件，或者 less / sass\n| -- reducers.js // reducer 文件，可视复杂度成为一个文件夹\n| -- sagas.js // sagas 文件，可视复杂度成为一个文件夹\n| -- B\n| -- index.jsx\n| -- actions\n| -- index.js\n| -- actionA.js\n| -- actionB.js\n| -- style.css\n| -- reducers.js"),e("br"),n._v("\n| -- index.js\n| -- reducerA.js\n| -- reducerB.js\n| -- main.js # 入口文件\n| -- routes.js # 路由，简单的话可以写在 main.js 里")]),n._v(" "),e("p",[n._v("大概这样组织是比较合理的，保证几个原则：")]),n._v(" "),e("ol",[e("li",[n._v("组件的整理：一开始开发项目的时候，因为项目简单，可能不会有公共组件(src/components)，一般都是写在 src/containers/A/components，等你下个 cotainer 再次使用到这个组件的时候，再把它抽出来，放到公共组件里。最好这样做，千万不要使用一个组件就放在公共组件里，这样看似规整，但是一旦需求变化，这个container要删除，你还要在公共组件里找这个组件，删除的时候，你还不知道别的 container 有没有引用。这是很头疼的，如果按照这个原则来做，可以直接把这个 container 文件夹直接删除，不会有任何问题")]),n._v(" "),e("li",[n._v("公共 actions / reducers ：一般放置你在任何 container 中都会使用到的数据，比如用户名、服务器时间等等，否则的话，还是放在对应的 container 里，理由同上。")]),n._v(" "),e("li",[n._v("然后每个 container 中 actions、reducers 都可以是文件(src/containers/A)，或者是文件夹(src/containers/B)，但是要团队约定好，这样每个 container 都会很整齐。")]),n._v(" "),e("li",[n._v("最后，说下 containers 这个文件夹。一般来说，A 、B 这两个 container 是和路由对应的。但是，一旦项目复杂到一个页面需要多个 container 的时候，可以考虑：")])]),n._v(" "),e("blockquote"),n._v(" "),e("p",[n._v("src\n| -- components\n| -- actions\n| -- reducers\n| -- sagas\n| -- pages // 对应路由\n| -- A\n| -- components\n| -- actions.js\n| -- reducers.js\n| -- style.css\n| -- containers\n| -- C1\n| -- C2")]),n._v(" "),e("h3",{attrs:{id:"antd-pro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#antd-pro"}},[n._v("#")]),n._v(" antd-pro")]),n._v(" "),e("blockquote"),n._v(" "),e("p",[n._v("├──config                   // 配置文件\n│   ├── config.js           // 路由定义文件&&代理路径文件\n│   ├── defaultSettings.js  // 主题颜色以及标题配置文件\n│   ├──plugin.config.js     // 没怎么用过的配置文件\n│\n├── mock                     // 本地模拟数据\n├── public\n│   └── favicon.ico          // Favicon\n├── src\n│   ├── assets               // 本地静态资源\n│   ├── common               // 应用公用配置，如导航信息\n│   ├── components           // 业务通用组件\n│   ├── e2e                  // 集成测试用例\n│   ├── layouts              // 通用布局\n│   ├──locales                 // 国际化文件\n│   ├── models               // dva model,全局model文件 定义全局请求函数\n│   ├── routes               // 业务页面入口和常用模板\n│   ├── services             // 后台接口服务,发起请求文件\n│   ├── utils                // 工具库\n│   ├── g2.js                // 可视化图形配置\n│   ├── theme.js             // 主题配置\n│   ├── index.ejs            // HTML 入口模板\n│   ├── index.js             // 应用入口\n│   ├── index.less           // 全局样式\n│   └── router.js            // 路由入口\n├── tests                    // 测试工具\n├── README.md\n└── package.json")]),n._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),e("p",[n._v("https://zhuanlan.zhihu.com/p/350580943")])])}),[],!1,null,null,null);s.default=o.exports}}]);