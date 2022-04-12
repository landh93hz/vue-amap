# VueAmap
- 项目介绍
`vue-amap`是一个将高德地图用 `Vue` 进行封装，可以更便利的在 `Vue`项目中使用高德 `JS API`的组件库。

- 文档
具体使用方法及相关示例请参见 [VueAmap 使用指南](https://landh93hz.github.io/vue-amap/)

# 使用方法
- 安装
```
npm install -S @wintoo/vue-amap
```
- 快速上手

在`Vue`项目文件入口中引入 `@wintoo/vue-amap`
```
// main.js
import VueAMap from '@wintoo/vue-amap';
const options = {
  key: 'YOUR_KEY',
  v: '1.4.15',
  plugins: []
};
Vue.use(VueAMap, options);
```
在组件中引入地图组件, 注意，地图组件父元素需设置宽高，地图才能正常显示
```
<template>
	<div class="map-container">
      <amap-map></amap-map>
    </div>
</template>
<style>
.map-container {
    height: 400px;
    width: 100%
}
</style>
```

# 组件列表总览
## 已实现的组件
### 地图
- 地图组件 `amap-map`
```
<div class="map-container">
  <amap-map></amap-map>
</div>
```
### 覆盖物
- 点标记 `amap-marker`
- 文本标记 `amap-text`
- 圆形 `amap-circle`
- 圆点标记 `amap-circle-marker`
- 折线 `amap-polyline`
- 多边形 `amap-polygon`
- 信息窗体 `amap-infowindow`
- 矩形 `amap-rectangle`
- 椭圆 `amap-ellipse`
- 海量点标记 `mass-marks`
- 标注及标注图层 `amap-labels-layer`、`amap-label-marker`

### 图层
- 路网图层 `amap-roadnet`
- 卫星图层 `amap-satellite`
- 标准图层 `amap-tilelayer`
- 交通图层 `amap-traffic`
- 楼快图层 `amap-buildings`

### 插件
- 地图控件 `amap-controlbar`
- 图层切换 `amap-maptype`
- 比例尺 `amap-scale`
- 工具条 `amap-toolbar`
- 鹰眼 `amap-overview`
- 折线编辑插件 `amap-polyline-editor`
- 多边形编辑插件 `amap-polygon-editor`
- 矩形编辑插件 `amap-rectangle-editor`
- 圆形编辑插件 `amap-circle-editor`
- 椭圆编辑插件 `amap-ellipse-editor`

### Loca 数据可视化
- 图层的容器和控制器 `loca`
- 基本热力图 `loca-heatmap`
- 蜂窝热力图 `loca-hexagon`

## 未实现的组件


# 支持的高德版本与Vue的版本
- 高德 JSAPI 版本

支持高德地图JS API v1.4.15 及 JS API v2.0 版本
- Loca 版本

支持 Loca 数据可视化 API 1.3.x 版本及 API 2.0版本，具体与 JS API 版本对应关系请参见 [高德官方文档](https://lbs.amap.com/api/loca-v2/intro)

**注意：新版Loca API 2.0和Loca 1.3.x版本不兼容，它们是针对不同的JS API版本进行的封装。 因此如果您需要使用JS API 1.4.x，那么只能使用Loca API 1.3.x；如果您需要使用JS API 2.0，那么只能使用Loca API 2.0。**
- Vue 版本

现阶段仅支持 `Vue 2.x` 版本

# 高德地图 JS API 加载
- 顺序同步加载

与高德官方一致，在 `Vue`项目 `public/index.html`文件中引入
```
<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script>
```
- 异步加载

不在`public/index.html`文件中引入，在 `main.js` 中，此时会以异步的方式加载 `JS API`
```
import Vue from 'vue';
import AmapVue  from 'amap';

import VueAMap from '@wintoo/vue-amap';
const options = {
  key: 'YOUR_KEY',
  v: '1.4.15',
  plugins: []
};
Vue.use(VueAMap, options);
```

# VueAmap API
- `AMap` 对象获取, `amapLoader`
```
<script>
  import { amapLoader } from 'amap'
  export default {
    mounted(){
      amapLoader.then(AMap => {
        // code
        console.log(AMap)
      })
    }
  }
</script>
```
- `Loca` 对象获取
```
<script>
  import { locaLoader } from 'amap'
  export default {
    mounted(){
      locaLoader.then(Loca => {
        // code
        console.log(Loca)
      })
    }
  }
</script>
```

