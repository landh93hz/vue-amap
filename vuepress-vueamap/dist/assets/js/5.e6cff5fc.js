(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e(98),e(33),e(25),e(317),e(99),e(100),e(177),e(318),e(175);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){s(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}},317:function(t,a,e){var s=e(0),n=e(1),r=e(15),p=e(26).f,o=e(6),c=n((function(){p(1)}));s({target:"Object",stat:!0,forced:!o||c,sham:!o},{getOwnPropertyDescriptor:function(t,a){return p(r(t),a)}})},318:function(t,a,e){var s=e(0),n=e(6);s({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:e(176)})},359:function(t,a,e){},416:function(t,a,e){t.exports=e.p+"assets/img/position.7179998a.png"},417:function(t,a,e){"use strict";e(359)},456:function(t,a,e){"use strict";e.r(a);var s=e(316),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"map-container"},[a("amap-map",{attrs:{center:{lng:121.498586,lat:31.239637}}},[a("amap-marker",{attrs:{position:this.position}})],1)],1)])},staticRenderFns:[]},{data:function(){return{position:[121.499358,31.240171]}}}),"render-demo-1":Object(s.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"map-container"},[a("amap-map",{attrs:{center:{lng:121.498586,lat:31.239637}}},[a("amap-marker",{attrs:{position:this.position}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:e(416)}})])])],1)],1)])},staticRenderFns:[]},{data:function(){return{position:[121.499358,31.240171]}}})}},r=(e(417),e(24)),p=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"amap-marker-点标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amap-marker-点标记"}},[t._v("#")]),t._v(" amap-marker 点标记")]),t._v(" "),e("h4",{attrs:{id:"基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),e("p",[t._v("将 "),e("code",[t._v("amap-marker")]),t._v("组件放置到 "),e("code",[t._v("amap-map")]),t._v("组件中即可，可以给 "),e("code",[t._v("amap-marker")]),t._v("的"),e("code",[t._v("position")]),t._v("设置初始值，若不设置，则默认为地图的中心点。")]),t._v(" "),e("p",[t._v("示例如下：")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-0")]],2),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-map")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{lng: 121.498586, lat: 31.239637}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-marker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":position")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("position")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-marker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          position"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("121.499358")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.240171")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".map-container")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),e("h4",{attrs:{id:"使用图片自定义图标标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用图片自定义图标标记"}},[t._v("#")]),t._v(" 使用图片自定义图标标记")]),t._v(" "),e("p",[t._v("除了官方提供的自定义图标标记的方式，我们提供了通过使用"),e("strong",[t._v("插槽"),e("code",[t._v("prop")])]),t._v(", "),e("code",[t._v("slot='content'")]),t._v("方式来传入图片，达到自定义图标标记的效果")]),t._v(" "),e("p",[t._v("示例如下：")]),t._v(" "),e("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[e("template",{slot:"demo"},[[e("render-demo-1")]],2),t._v(" "),e("template",{slot:"source"},[e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("map-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-map")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("{lng: 121.498586, lat: 31.239637}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-marker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":position")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("content"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("require("),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("../img/position.png"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token special-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),e("span",{pre:!0,attrs:{class:"token value css language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("30px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("30px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-marker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      position"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("121.499358")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.240171")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".map-container")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),e("h4",{attrs:{id:"属性-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-attributes"}},[t._v("#")]),t._v(" 属性  Attributes")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("topWhenClick")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[t._v("鼠标点击时marker是否置顶")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bubble")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[t._v("是否将覆盖物的鼠标或touch等事件冒泡到地图上")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("raiseOnDrag")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[t._v("设置拖拽点标记时是否开启点标记离开地图的效果")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("cursor")])]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("指定鼠标悬停时的鼠标样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("autoRotation")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[t._v("是否自动旋转")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("anchor")])]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("设置点标记锚点")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("offset")])]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",[t._v("点标记显示位置偏移量   默认："),e("code",[t._v("Pixel(-10,-34)")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("icon")])]),t._v(" "),e("td",[e("code",[t._v("Object | String")])]),t._v(" "),e("td",[t._v("需在点标记中显示的图标")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("draggable")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")])]),t._v(" "),e("td",[t._v("设置点标记是否可拖拽移动   默认："),e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("zIndex")])]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td",[t._v("点标记的叠加顺序")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("angle")])]),t._v(" "),e("td",[e("code",[t._v("Number")])]),t._v(" "),e("td",[t._v("点标记的旋转角度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("animation")])]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("点标记的动画效果    默认："),e("code",[t._v('"AMAP_ANIMATION_NONE"')])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("title")])]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("shadow")])]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",[t._v("点标记阴影，不设置该属性则点标记无阴影")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("content")])]),t._v(" "),e("td",[e("code",[t._v("String | HTMLElement")])]),t._v(" "),e("td",[t._v("点标记显示内容，可以是HTML要素字符串或者HTML DOM对象")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("label")])]),t._v(" "),e("td",[e("code",[t._v("Object | String")])]),t._v(" "),e("td",[t._v("添加文本标注")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("labelOffset")])]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",[t._v("文本标注偏移量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("labelDirection")])]),t._v(" "),e("td",[e("code",[t._v("String")])]),t._v(" "),e("td",[t._v("文本标注如果设置了 direction，以 direction 方位为基准点进行偏移")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("extData")])]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",[t._v("用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("position")])]),t._v(" "),e("td",[e("code",[t._v("Object | Array")])]),t._v(" "),e("td",[t._v("点标记在地图上显示的位置   默认：地图中心点")])])])]),t._v(" "),e("h4",{attrs:{id:"事件-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件-events"}},[t._v("#")]),t._v(" 事件 Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("complete")])]),t._v(" "),e("td",[t._v("当前 "),e("code",[t._v("Marker")]),t._v("对象")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点标记加载完成后触发")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("click")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键单击事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dblclick")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键双击事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rightclick")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标右键单击事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mousemove")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移动")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mouseover")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移近点标记时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mouseout")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移出点标记时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mousedown")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标在点标记上按下时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mouseup")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标在点标记上按下后抬起时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dragstart")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("开始拖拽点标记时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dragging")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标拖拽移动点标记时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("dragend")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点标记拖拽移动结束触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("moving")])]),t._v(" "),e("td",[e("code",[t._v("Object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点标记在执行moveTo，moveAlong动画时触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("moveend")])]),t._v(" "),e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("movealong")])]),t._v(" "),e("td"),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("点标记执行moveAlong动画一次后触发事件")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("touchstart")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("触摸开始时触发事件，仅适用移动设备")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("touchmove")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("触摸移动进行中时触发事件，仅适用移动设备")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("touchend")])]),t._v(" "),e("td",[e("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MapsEvent")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("触摸结束时触发事件，仅适用移动设备")])])])])],1)}),[],!1,null,null,null);a.default=p.exports}}]);