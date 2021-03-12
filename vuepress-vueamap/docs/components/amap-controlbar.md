---
title: 地图控件
---
# amap-controlbar 地图控件
组合了旋转、倾斜、复位、缩放在内的地图控件，在3D地图模式下会显示（自V1.4.0版本新增）
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-controlbar></amap-controlbar>
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
| MaptypeOptions | 类型      | 说明                                                         |
| :------------- | :-------- | :----------------------------------------------------------- |
| `defaultType`  | `Number`  | 初始化默认图层类型。 取值为0：默认底图 取值为1：卫星图 默认值：0 |
| `showTraffic`  | `Boolean` | 叠加实时交通图层 默认值：`false`                             |
| `showRoad`     | `Boolean` | 叠加路网图层 默认值：`false`                                 |
| `visible`      | `Boolean` | 图层是否显示 默认值：`true`                                  |