(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(t,e,a){var s=a(0),n=a(1),r=a(15),p=a(26).f,c=a(6),o=n((function(){p(1)}));s({target:"Object",stat:!0,forced:!c||o,sham:!c},{getOwnPropertyDescriptor:function(t,e){return p(r(t),e)}})},314:function(t,e,a){var s=a(0),n=a(6);s({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:a(173)})},315:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a(95),a(31),a(25),a(313),a(96),a(97),a(174),a(314),a(172);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},340:function(t,e,a){},394:function(t,e,a){"use strict";a(340)},444:function(t,e,a){"use strict";a.r(e);var s=a(315),n={name:"component-doc",components:{"render-demo-0":Object(s.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"map-container"},[e("amap-map",{attrs:{center:this.center}},[e("amap-circle",{attrs:{center:this.center,radius:1e3,fillColor:"#FF33FF",strokeColor:"pink",fillOpacity:"0.5",strokeWeight:2}})],1)],1)])},staticRenderFns:[]},{data:function(){return{center:[116.39,39.9]}}})}},r=(a(394),a(24)),p=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"amap-circle-圆形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amap-circle-圆形"}},[t._v("#")]),t._v(" amap-circle 圆形")]),t._v(" "),a("p",[a("code",[t._v("amap-circle")]),t._v(" 为矢量图形类，随地图的缩放会改变大小")]),t._v(" "),a("h4",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("amap-circle")]),t._v("组件放置到 "),a("code",[t._v("amap-map")]),t._v("组件中即可，其中圆心属性 "),a("code",[t._v("center")]),t._v("与圆半径 "),a("code",[t._v("radius")]),t._v("为"),a("strong",[t._v("必传值")])]),t._v(" "),a("p",[t._v("示例如下：")]),t._v(" "),a("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[a("template",{slot:"demo"},[[a("render-demo-0")]],2),t._v(" "),a("template",{slot:"source"},[a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("amap-circle")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":radius")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillColor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#FF33FF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("strokeColor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillOpacity")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":strokeWeight")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-circle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("amap-map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          center"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".map-container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),a("h4",{attrs:{id:"属性-attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性-attributes"}},[t._v("#")]),t._v(" 属性  Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("center")])]),t._v(" "),a("td",[a("code",[t._v("Object | Array")])]),t._v(" "),a("td",[a("strong",[t._v("为必填值")]),t._v("，圆心位置")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("zIndex")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[t._v("叠加顺序  默认："),a("code",[t._v("10")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("bubble")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("是否将覆盖物的鼠标或touch等事件冒泡到地图上")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("cursor")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("指定鼠标悬停时的鼠标样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("radius")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[a("strong",[t._v("为必填值")]),t._v(", 圆半径，单位:米")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strokeColor")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("线条颜色，使用16进制颜色代码赋值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strokeWeight")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[t._v("轮廓线宽度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strokeStyle")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("轮廓线样式，实线:solid，虚线:dashed   默认："),a("code",[t._v("solid")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("strokeDasharray")])]),t._v(" "),a("td",[a("code",[t._v("Array")])]),t._v(" "),a("td",[t._v("勾勒形状轮廓的虚线和间隙的样式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fillColor")])]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[t._v("圆形填充颜色")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("fillOpacity")])]),t._v(" "),a("td",[a("code",[t._v("Number")])]),t._v(" "),a("td",[t._v("圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("draggable")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("设置圆形是否可拖拽移动")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("extData")])]),t._v(" "),a("td",[a("code",[t._v("Number | String | Object")])]),t._v(" "),a("td",[t._v("用户自定义属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("isEditor")])]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[t._v("是否开启编辑功能， 默认："),a("code",[t._v("false")])])])])]),t._v(" "),a("h4",{attrs:{id:"事件-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件-events"}},[t._v("#")]),t._v(" 事件 Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("complete")])]),t._v(" "),a("td",[t._v("当前 "),a("code",[t._v("circle")]),t._v(" 对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("覆盖物加载完成后触发")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("click")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键单击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dblclick")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标左键双击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("rightclick")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标右键单击事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hide")])]),t._v(" "),a("td",[a("code",[t._v("{type, target}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("隐藏")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("show")])]),t._v(" "),a("td",[a("code",[t._v("{type, target}")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mousedown")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标按下")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseup")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标抬起")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseover")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标经过")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mouseout")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("鼠标移出")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("change")])]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("属性发生变化时")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchstart")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸开始时触发事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchmove")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸移动进行中时触发事件，仅适用移动设备")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("touchend")])]),t._v(" "),a("td",[a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("MapsEvent")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("触摸结束时触发事件，仅适用移动设备")])])])])],1)}),[],!1,null,null,null);e.default=p.exports}}]);