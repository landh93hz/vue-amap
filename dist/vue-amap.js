!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.amap=e():t.amap=e()}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e,o){var i=o(2),n=o(5);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},function(t,e,o){var i=o(2),n=o(7);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1},s=(i(t.i,n,r),n.locals?n.locals:{});t.exports=s},function(t,e,o){"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),s={};function a(t,e,o){for(var i=0;i<e.length;i++){var n={css:e[i][1],media:e[i][2],sourceMap:e[i][3]};s[t][i]?s[t][i](n):s[t].push(f(n,o))}}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=o.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var h,u=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function d(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var r=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function c(t,e,o){var i=o.css,n=o.media,r=o.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,g=0;function f(t,e){var o,i,n;if(e.singleton){var r=g++;o=p||(p=l(e)),i=d.bind(null,o,r,!1),n=d.bind(null,o,r,!0)}else o=l(e),i=c.bind(null,o,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e,o){return(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=n()),t=o.base?t+o.base:t,e=e||[],s[t]||(s[t]=[]),a(t,e,o),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){s[t]||(s[t]=[]),a(t,e,o);for(var i=e.length;i<s[t].length;i++)s[t][i]();s[t].length=e.length,0===s[t].length&&delete s[t]}}}},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var n=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[o].concat(r).concat([n]).join("\n")}var s,a,l;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i=0;i<t.length;i++){var n=[].concat(t[i]);o&&(n[2]?n[2]="".concat(o," and ").concat(n[2]):n[2]=o),e.push(n)}},e}},function(t,e,o){"use strict";var i=o(0);o.n(i).a},function(t,e,o){(e=o(3)(!1)).push([t.i,".hidden-box[data-v-c8ccd62a]{display:none}\n",""]),t.exports=e},function(t,e,o){"use strict";var i=o(1);o.n(i).a},function(t,e,o){(e=o(3)(!1)).push([t.i,".hidden-box[data-v-13c2c04f]{display:none}\n",""]),t.exports=e},function(t,e,o){"use strict";o.r(e);var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:"number"==typeof this.width?this.width+"px":this.width,height:"number"==typeof this.height?this.height+"px":this.height}},[this._t("default")],2)};function n(t,e,o){return new Promise((i,n)=>{if(window[t])i(window[t]);else{const r=document.createElement("script"),s=e+"?";let{plugins:a}=o;a&&(delete o.plugins,Array.isArray(a)&&(a=a.map(t=>{if("string"==typeof t)return 1===t.split(".").length?`AMap.${t}`:t;throw new Error("member of plugins must be string")}),o.plugin=a.join(",")),"string"==typeof a&&(o.plugin=a));let l="";for(const t in o)l+=`${t}=${o[t]}&`;l.slice(0,l.length-1),r.src=s+l,document.head.append(r),r.onload=function(){window[t]?i(window[t]):n(void 0)}}})}i._withStripped=!0;function r(t){const e=!1;let o,i;const r=new Promise((t,e)=>{o=t,i=e});return r.init=async function(r,s){if(e)throw new Error(`Reapted loading API of ${this.name}`);try{const e=await n(t,r,s);o&&o(e)}catch(e){throw i&&i(`Failed to load ${t} API at given ${r}`),new Error(`${e}`)}},r}const s=r("AMap"),a=r("Loca");var l={data:()=>({target:null,events:[],handleMap:{}}),mounted(){this.checkTarget()},beforeDestroy(){for(const t in this.handleMap)t&&this.target&&this.target.off(t,this.handleMap[t])},methods:{checkTarget(){this.target?(this.initEvents(),this.complete()):setTimeout(this.checkTarget,50)},initEvents(){for(const t of this.events){let e=e=>{this.$emit(t,e)};const o=Object.getOwnPropertyDescriptor(this,t);o&&"function"==typeof o.value&&(e=e=>{o.value.call(null,e),this.$emit(t,e)}),this.handleMap[t]=e,this.target.on(t,e)}},complete(){this.$emit("complete",this.target)}}};function h(t,e,o,i,n,r,s,a){var l,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=o,h._compiled=!0),i&&(h.functional=!0),r&&(h._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=l):n&&(l=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(h.functional){h._injectStyles=l;var u=h.render;h.render=function(t,e){return l.call(e),u(t,e)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:h}}var u=h({mixins:[l],name:"amap-map",provide(){return{getMap:this.getMap}},props:{height:{type:[Number,String],default:"100%"},width:{type:[Number,String],default:"100%"},layers:{type:Array},zooms:{type:Array},lang:{type:String},animateEnable:{type:Boolean,default:!0},isHotspot:{type:Boolean,default:!1},rotateEnable:{type:Boolean,default:!0},resizeEnable:{type:Boolean,default:!0},showIndoorMap:{type:Boolean,default:!0},expandZoomRange:{type:Boolean,default:!0},dragEnable:{type:Boolean,default:!0},zoomEnable:{type:Boolean,default:!0},doubleClickZoom:{type:Boolean,default:!0},keyboardEnable:{type:Boolean,default:!0},jogEnable:{type:Boolean,default:!0},scrollWheel:{type:Boolean,default:!0},touchZoom:{type:Boolean,default:!0},mapStyle:{type:String},features:{type:Array},showBuildingBlock:{type:Boolean,default:!0},pitchEnable:{type:Boolean,default:!0},buildingAnimation:{type:Boolean,default:!0},skyColor:{type:String},mask:{type:Array},zoom:{type:Number,default:13},pitch:{type:Number,default:0},rotation:{type:Number,default:0},center:{type:[Object,Array]},bounds:{type:Object},city:{type:String},limitBounds:{type:Boolean},mapStatus:{type:Object},defaultCursor:{type:String},showLabel:{type:Boolean,default:!0},crs:{type:String,default:"EPSG3857",validator:t=>-1!==["EPSG3857","EPSG3395","EPSG4326"].indexOf(t)},viewMode:{type:String,default:"2D",validator:t=>-1!==["2D","3D"].indexOf(t)}},data:()=>({target:null,timer:null,events:["click","dbclick","mapmove","hotspotclick","hotspotover","hotspotout","movestart","moveend","zoomchange","zoomstart","zoomend","mousemove","mousewheel","mouseover","mouseout","mouseup","mousedown","rightclick","dragstart","dragging","dragend","resize","touchstart","touchmove","touchend"]}),created(){},mounted(){const t=Object.keys(this.$props),e={};for(const o of t)void 0!==this.$props[o]&&(e[o]=this.$props[o]);s.then(t=>{let o;if(Array.isArray(this.center))o=this.center;else if(this.center){const{lng:e,lat:i}=this.center;o=new t.LngLat(e,i)}e.center=o,this.target=new t.Map(this.$el,e),this.city&&this.target.setCity(this.city),this.target.on("complete",()=>{this.updateCity()})})},watch:{rotation(t){this.target&&this.target.setRotation(t),this.updateBounds()},pitch(t){this.target&&this.pitchEnable&&this.target.setPitch(t),this.updateBounds()},zoom(t){this.target&&this.zoomEnable&&this.target.setZoom(t),this.updateBounds()},lang(t){this.target&&this.target.setLang(t)},city(t){this.target&&this.target.setCity(t)},limitBounds(t){if(!this.bounds)throw new Error("Make sure to set bounds when limitBounds is true");t?this.target.setLimitBounds(this.bounds):this.target.clearLimitBounds()},mapStatus:{deep:!0,immediate:!1,handler(t,e){const o=Object.keys(t),i={};for(const n in o)"boolean"==typeof t[n]&&t[n]!==e[n]&&(i[n]=t[n]);Object.keys(i).length>0&&this.target.setStatus(i)}},defaultCursor(t){this.target&&this.target.setDefaultCursor(t)},features(t){this.target&&this.target.setFeatures(t)},mapStyle(t){this.target&&this.target.setMapStyle(t)}},methods:{mousedown(){this.timer&&(clearInterval(this.timer),this.timer=null),this.timer||(this.timer=setInterval(()=>{this.$emit("update:pitch",this.target&&this.target.getPitch()),this.$emit("update:rotation",this.target&&this.target.getRotation())},100))},mouseup(){this.timer&&(clearInterval(this.timer),this.timer=null)},zoomchange(){this.$emit("update:zoom",this.target.getZoom()),this.updateBounds()},moveend(){this.$emit("update:center",this.target.getCenter()),this.updateBounds(),this.updateCity()},getMap(t){this.target?t(this.target):setTimeout(()=>{this.getMap(t)},50)},updateBounds(){let t;if("2D"===this.viewMode)t=this.target.getBounds();else{const e=this.target.getBounds();"AMap.ArrayBounds"===e.CLASS_NAME&&(t=e.toBounds())}this.$emit("update:bounds",t)},updateCity(){this.target.getCity(t=>{const{city:e}=t;this.$emit("update:city",e),this.$emit("getCity",t)})}},beforeDestroy(){},destroyed(){this.target.destroy(),this.target=null},deactivated(){}},i,[],!1,null,null,null);u.options.__file="package/elements/map.vue";var d=u.exports,c=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"hiddenBox",staticClass:"hidden-box"},[this._t("content"),this._v(" "),this._t("label")],2)};c._withStripped=!0;var p={props:{visible:{type:[Boolean,Function],default:!0}},inject:["getMap"],data:()=>({target:null,options:null}),watch:{visible(t){this.target&&(t?this.target.show():this.target.hide())}},created(){!this.options&&(this.options={});const t=Object.keys(this.$props);for(const e of t)"visible"!==e&&void 0!==this.$props[e]&&(this.options[e]=this.$props[e])},beforeMount(){this.getMap(this.mapGetter)},beforeDestroy(){this.target&&this.target.setMap(null),this.target=null,this.$emit("destroy")},methods:{mapGetter(t){setTimeout(()=>{if(this.target&&this.target.setMap){if(this.visible||this.target.hide(),"AMAp.InfoWindow"===this.target.CLASS_NAME)return;this.target.setMap(t)}},0)}}},g={name:"amap-marker",mixins:[p,l],props:{topWhenClick:Boolean,bubble:Boolean,raiseOnDrag:Boolean,cursor:String,autoRotation:Boolean,anchor:String,offset:Object,icon:[Object,String],draggable:Boolean,zIndex:Number,angle:Number,animation:String,title:String,shadow:Object,content:[String,HTMLElement],label:[Object,String],labelOffset:Object,labelDirection:String,extData:Object,position:Object},data:()=>({events:["click","dblclick","rightclick","mousemove","mouseover","mouseout","mousedown","mouseup","dragstart","dragging","dragend","moving","moveend","movealong","touchstart","touchmove","touchend"]}),watch:{position(t){this.target&&this.target.setPosition(t)},label(t){const e=document.createElement("div");e.textContent=t,this.target&&this.target.setLabel({content:e.outerHTML})}},mounted(){s.then(t=>{this.target=new t.Marker(this.options),this.visible||this.target.hide();const{label:e}=this;if("string"==typeof e){const t=document.createElement("div");t.textContent=e,this.target&&this.target.setLabel({content:t.outerHTML})}this.renderSlot()})},methods:{renderSlot(){const{content:t,label:e}=this;if(t)return this.target.setContent(t);if(e){let t=e;return"string"==typeof e&&(t={offset:this.labelOffset,content:e,direction:this.labelDirection||"right"}),this.target.setLabel(t)}const{content:o,label:i}=this.$slots;if(o){if(o.length>1)throw new Error("multi content slots in single marker");const t=this.$refs.hiddenBox.firstElementChild;if(t)return this.target.setContent(t)}if(i){if(i.length>1)throw new Error("multi label slots in single marker");const t=this.$refs.hiddenBox.firstElementChild;if(t){const e={offset:this.labelOffset,content:t,direction:this.labelDirection||"right"};return this.target.setLabel(e)}}}}},f=(o(4),h(g,c,[],!1,null,"c8ccd62a",null));f.options.__file="package/elements/marker.vue";var m=f.exports,y={name:"amap-polyline",mixins:[l,p],data:()=>({target:null,options:{},events:["click","dblclick","rightclick","hide","show","mousedown","mouseup","mouseover","mouseout","change","touchstart","touchmove","touchend"]}),props:{zIndex:Number,bubble:Boolean,cursor:String,geodesic:Boolean,isOutline:Boolean,outlineColor:String,strokeColor:String,strokeOpacity:String,strokeWeight:Number,strokeStyle:{type:String,default:"solid",validator:t=>-1!==["solid","dashed"].indexOf(t)},strokeDasharray:Array,lineJoin:String,lineCap:String,draggable:Boolean,showDir:Boolean,extData:Object,path:{type:Array,required:!0}},watch:{path(t){this.target&&this.target.setPath(t)},polylineOptions:{deep:!0,immediate:!1,handler(t){this.target&&this.target.setOptions(t)}}},computed:{polylineOptions(){return{showDir:this.showDir||!1,strokeColor:this.strokeColor||"green",strokeOpacity:this.strokeOpacity||1,strokeWeight:this.strokeWeight||2,draggable:this.draggable||!1,lineJoin:this.lineJoin||"miter",lineCap:this.lineCap||"butt",strokeDasharray:this.strokeDasharray||[],strokeStyle:this.strokeStyle||"solid",isOutline:this.isOutline||!1,borderWeight:this.borderWeight||0}}},created(){s.then(t=>{this.target=new t.Polyline(this.options)})},render(){return this.$slots.default}},b=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"hiddenBox",staticClass:"hidden-box"},[this._t("default",null,{data:this.data})],2)};b._withStripped=!0;var v={name:"amap-infowindow",mixins:[p,l],props:{isCustom:Boolean,autoMove:Boolean,closeWhenClickMap:{type:Boolean,default:!0},content:[String,HTMLDivElement],size:Object,anchor:String,offset:Object,position:{type:Object,required:!0},showShadow:Boolean,data:[String,Number,Object]},data:()=>({target:null,options:{},events:["open","change","close"]}),watch:{position(t){this.target&&this.target.setPosition(t)},visible(t){this.target&&(t?this.getMap(t=>{!this.target.getIsOpen()&&this.target.open(t,this.position)}):this.target.getIsOpen()&&this.target.close())}},created(){s.then(t=>{this.target=new t.InfoWindow(this.options),this.getMap(t=>{this.visible?this.target.open(t,this.position):this.target.close(),this.renderContent()})})},methods:{renderContent(){const t=this.$refs.hiddenBox;if(!t.firstChild)return;const e=t.firstChild;this.target.setContent(e)}}},w=(o(6),h(v,b,[],!1,null,"13c2c04f",null));w.options.__file="package/elements/infowindow.vue";var B=w.exports,S={name:"amap-massmarks",mixins:[p,l],render(){return this.$slots.default},props:{zIndex:Number,opacity:Number,cursor:String,zooms:Array,alwaysRender:{type:Boolean,default:!0},data:{required:!0,type:Array},bubble:Boolean,pointStyle:{type:[Object,Array,Function],required:!0}},data:()=>({options:{},target:null,events:["complete","click","dblclick","mouseout","mouseup","mousedown","touchstart","touchend"]}),created(){this.options.style=this.pointStyle,delete this.options.pointStyle,delete this.options.data,s.then(t=>{this.target=new t.MassMarks(this.data,this.options),this.visible||this.target.hide()})},watch:{data(t){this.target&&this.target.setData(t)}}},k={name:"amap-polygon",mixins:[p,l],render(){return this.$slots.default},props:{zIndex:Number,bubble:Boolean,cursor:String,strokeColor:String,strokeStyle:String,strokeWeight:Number,fillColor:String,fillOpacity:Number,draggable:Boolean,extData:[Number,String,Object],strokeDasharray:Array,path:{type:Array,required:!0}},watch:{path(t){this.target&&this.target.setPath(t)},polygonOptions:{deep:!0,immediate:!1,handler(t){this.target&&this.target.setOptions(t)}}},computed:{polygonOptions(){return{strokeColor:this.strokeColor||"green",fillColor:this.fillColor,fillOpacity:this.fillOpacity,strokeStyle:this.strokeStyle,strokeWeight:this.strokeWeight}}},data:()=>({target:null,options:{},events:["click","dblclick","rightclick","hide","show","mousedown","mouseup","mouseover","mouseout","change","touchstart","touchmove","touchend"]}),created(){s.then(t=>{this.target=new t.Polygon(this.options)})},methods:{dragend(){this.target&&this.draggable&&this.$emit("update:path",this.target.getPath())}}},O={name:"loca-heatmap",mixins:[l,p],render(){return this.$slots.default},props:{value:{type:String,default:"value"},dataType:String,eventSupport:Boolean,fitView:Boolean,zIndex:Number,lnglat:{type:[String,Function],default:"lnglat"},radius:{type:Number,required:!0},color:{type:Object,required:!0},opacity:{type:Array,default:()=>[0,1]},points:{type:Array,required:!0},visible:{type:Boolean,default:!0}},data:()=>({target:null,options:{},events:[]}),watch:{points(t){this.target&&(this.target.setData(t,this.dataOptions),this.target.setOptions({style:this.styleOptions}),this.target.render())}},computed:{styleOptions(){const{radius:t,color:e,opacity:o}=this;return{radius:t,color:e,opacity:o}},dataOptions(){const{lnglat:t,value:e,dataType:o}=this;return{lnglat:t,value:e,type:o}}},methods:{delayedRender(){this.target.getMap()?(this.target.render(),this.visible?this.target.show():this.target.hide()):setTimeout(this.delayedRender,50)}},created(){a.then(t=>{const e=new t.HeatmapLayer({});e.setData(this.points,this.dataOptions),e.setOptions({style:this.styleOptions}),this.target=e})},mounted(){this.delayedRender()}},C=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)};C._withStripped=!0;var x=h({name:"MapBounds",data:()=>({bounds:null}),provide(){return{getBounds:this.getBounds,setBounds:this.setBounds,areaBounds:this.bounds}},methods:{getBounds(){return this.bounds},setBounds(t){this.bounds=t}}},C,[],!1,null,null,null);x.options.__file="package/widgets/bounds.vue";x.exports;var M=function(t,e,o={}){return{name:e,props:o={...{zIndex:Number,opacity:Number,zooms:Array,detectRetina:Boolean},...o},mixins:[p,l],render(){return this.$slots.default},data:()=>({options:{},target:null}),created(){t instanceof Promise||t.then?t.then(t=>{this.createTarget(t)}):"function"==typeof t&&this.createTarget(t)},methods:{createTarget(t){if("function"!=typeof t)throw new TypeError("Ctor must be a constructor or Promise instance of constructor");this.target=new t(this.options),!this.visible&&this.target.hide()}}}};const _=new Promise(t=>{s.then(e=>{t(e.TileLayer.Satellite)})}),j=new Promise(t=>{s.then(e=>{t(e.TileLayer.RoadNet)})}),$=new Promise(t=>{s.then(e=>{t(e.TileLayer.Traffic)})}),E={autoRefsh:{type:Boolean,default:!1},interval:{type:Number,default:180}},T=new Promise(t=>{s.then(e=>{t(e.TileLayer)})}),A=new Promise(t=>{s.then(e=>{t(e.Buildings)})}),N={heightFactor:Number,merge:Boolean,sort:Boolean},L=M(_,"amap-satellite"),P=M(j,"amap-roadnet"),D=M($,"amap-traffic",E),R=M(T,"amap-tilelayer"),z=M(A,"amap-buildings",N);var I={props:{visible:{type:Boolean,default:!0}},inject:["getMap"],data:()=>({target:null,options:null,key:""}),watch:{visible(t){this.target&&(t?this.showTarget():this.hideTarget())}},created(){!this.options&&(this.options={});const t=Object.keys(this.$props);for(const e of t)"visible"!==e&&void 0!==this.$props[e]&&(this.options[e]=this.$props[e]);const e=this.key;s.then(t=>{const o=t[e];if(!o)throw new Error(`${e} is a plugin, you have to add it before invoked`);this.createTarget(o)})},beforeMount(){this.getMap(this.mapGetter)},render(){return this.$slots.default},methods:{createTarget(t){this.target=new t(this.options)},mapGetter(t){setTimeout(()=>{this.target&&(t.addControl(this.target),this.visible||this.hideTarget())},0)},addControl(t){this.target&&t.addControl(this.target)},removeControl(t){try{this.target&&t&&t.removeControl(this.target)}catch(t){}},showTarget(){try{this.target.show()}catch(t){this.getMap(this.addControl)}},hideTarget(){try{this.target.hide()}catch(t){this.getMap(this.removeControl)}}},destroyed(){this.getMap(this.removeControl),this.target=null}},W={name:"amap-controlbar",mixins:[I,l],data:()=>({key:"ControlBar"}),props:{position:Object,showZoomBar:{type:Boolean,default:!0},showControlButton:{type:Boolean,default:!0}}},q={name:"amap-maptype",mixins:[I,l],data:()=>({key:"MapType"}),props:{defaultType:Number,showTraffic:Boolean,showRoad:Boolean}},F={name:"amap-overview",mixins:[I,l],props:{tileLayer:Object,isOpen:Boolean},data:()=>({key:"OverView",events:["show","hide","open","close"]}),watch:{isOpen(t){t?this.target.open():this.target.close()}}};const G=[d,m,y,k,P,L,R,D,W,q,{name:"amap-scale",mixins:[I,l],data:()=>({key:"Scale",events:["show","hide"]})},{name:"amap-toolbar",mixins:[I,l],props:{offset:Object,position:String,ruler:{type:Boolean,default:!0},noIpLocate:{type:Boolean,default:!1},locate:Boolean,liteStyle:Boolean,direction:Boolean,autoPosition:Boolean,locationMarker:Object,useNative:Boolean},data:()=>({key:"ToolBar",events:["show","hide","location","zoomchanged"]}),watch:{ruler(t){this.target&&t?this.target.showRuler:this.target.hideRuler},offset(t){this.target&&this.target.setOffset(t)},direction(t){this.target&&t?this.target.showDirection():this.target.hideDirection()},locate(t){this.target&&t?this.target.showLocation():this.target.hideLocation()}}},F,z,S,B,O],H=[O];e.default={install(t,e={}){if(s.init("https://webapi.amap.com/maps",e),G.forEach(e=>{t.component(e.name,e)}),e.enableLoca){const o="https://webapi.amap.com/loca",i={key:e.key,v:"1.3.0"};a.init(o,i),H.forEach(e=>{t.component(e.name,e)})}}}}])}));