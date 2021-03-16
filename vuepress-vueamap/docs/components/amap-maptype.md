---
title: 图层切换
---
# amap-maptype   图层切换
地图类型切换插件，用来切换固定的几个常用图层

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-maptype></amap-maptype>
  </amap-map>
</div>
<style>
.map-container {
  height: 400px;
  width: 100%
}
</style>
```
:::
#### 属性  Attributes
| MaptypeOptions | 类型      | 说明                                                         |
| :------------- | :-------- | :----------------------------------------------------------- |
| `defaultType`  | `Number`  | 初始化默认图层类型。 取值为0：默认底图 取值为1：卫星图 默认值：0 |
| `showTraffic`  | `Boolean` | 叠加实时交通图层 默认值：`false`                             |
| `showRoad`     | `Boolean` | 叠加路网图层 默认值：`false`                                 |
| `visible`      | `Boolean` | 图层控件是否显示 默认值：`true`                                  |