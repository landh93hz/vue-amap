(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{313:function(t,e,a){var s=a(0),n=a(1),r=a(15),o=a(26).f,p=a(6),v=n((function(){o(1)}));s({target:"Object",stat:!0,forced:!p||v,sham:!p},{getOwnPropertyDescriptor:function(t,e){return o(r(t),e)}})},314:function(t,e,a){var s=a(0),n=a(6);s({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:a(173)})},315:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a(95),a(31),a(25),a(313),a(96),a(97),a(174),a(314),a(172);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},358:function(t,e,a){},413:function(t,e,a){"use strict";a(358)},462:function(t,e,a){"use strict";a.r(e);var s=a(315),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"map-container"},[e("amap-map",{attrs:{center:this.position}},[e("amap-text",{attrs:{text:"这是一条文本标记",textStyle:this.textStyle,position:this.position}})],1)],1)])},staticRenderFns:[]},{data:function(){return{textStyle:{padding:".75rem 1.25rem","margin-bottom":"1rem","border-radius":".25rem","background-color":"white",width:"15rem","border-width":0,"box-shadow":"0 2px 6px 0 rgba(114, 124, 245, .5)","text-align":"center","font-size":"20px",color:"blue"},position:[121.499358,31.240171]}}})}},r=(a(413),a(24)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"amap-text-文本标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amap-text-文本标记"}},[t._v("#")]),t._v(" amap-text 文本标记")]),t._v(" "),a("h4",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("amap-text")]),t._v("组件放置到 "),a("code",[t._v("amap-map")]),t._v("组件中即可，可以给 "),a("code",[t._v("amap-text")]),t._v("的"),a("code",[t._v("position")]),t._v("设置初始值，若不设置，则默认为地图的中心点。\n属性 "),a("strong",[t._v("text 为必填值")])]),t._v(" "),a("p",[t._v("示例如下：")]),t._v(" "),a("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[a("template",{slot:"demo"},[[a("render-demo-0")]],2),t._v(" "),a("template",{slot:"source"},[a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("这是一条文本标记"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":textStyle")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("textStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":position")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          textStyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'padding'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.75rem 1.25rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'margin-bottom'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border-radius'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.25rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'background-color'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'border-width'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box-shadow'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 2px 6px 0 rgba(114, 124, 245, .5)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-align'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'font-size'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("121.499358")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.240171")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".map-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),a("h4",{attrs:{id:"属性-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性-attributes"}},[t._v("#")]),t._v(" 属性  Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("text")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[a("strong",[t._v("必填值")]),t._v("\t标记显示的文本内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("position")])]),t._v(" "),a("td",[a("code",[t._v("Object | String")])]),t._v(" "),a("td",[t._v("点标记在地图上显示的位置，默认为地图中心点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("anchor")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("设置点标记锚点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("点标记显示位置偏移量   默认："),a("code",[t._v("Pixel(0,0)")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("topWhenClick")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("鼠标点击时是否置顶，默认false ，不置顶")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bubble")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("是否将覆盖物的鼠标或touch等事件冒泡到地图上,默认值：false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("draggable")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("设置点标记是否可拖拽移动   默认："),a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("raiseOnDrag")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("设置拖拽点标记时是否开启点标记离开地图的效果")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("cursor")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("指定鼠标悬停时的鼠标样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("zIndex")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[t._v("点标记的叠加顺序,默认zIndex：100")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("angle")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[t._v("点标记的旋转角度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("autoRotation")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("是否自动旋转")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("animation")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("点标记的动画效果    默认："),a("code",[t._v('"AMAP_ANIMATION_NONE"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("shadow")])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("点标记阴影，不设置该属性则点标记无阴影")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("title")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("clickable")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("点标记是否可点击")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("textStyle")])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("用来自定义文本得样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("extData")])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",[t._v("用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等")])])])]),t._v(" "),a("h4",{attrs:{id:"事件-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件-events"}},[t._v("#")]),t._v(" 事件 Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("complete")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点标记加载完成后触发")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("click")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键单击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dblclick")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键双击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("rightclick")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标右键单击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mousemove")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移动")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseover")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移近点标记时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseout")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移出点标记时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mousedown")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标在点标记上按下时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseup")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标在点标记上按下后抬起时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dragstart")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开始拖拽点标记时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dragging")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标拖拽移动点标记时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dragend")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点标记拖拽移动结束触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("moving")])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点标记在执行moveTo，moveAlong动画时触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("moveend")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("movealong")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点标记执行moveAlong动画一次后触发事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchstart")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸开始时触发事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchmove")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸移动进行中时触发事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchend")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸结束时触发事件，仅适用移动设备")])])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);