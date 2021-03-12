---
title: 鹰眼
---
# amap-overview   鹰眼
地图鹰眼插件
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-overview></amap-overview>
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
| OverViewOptions | 类型                                                         | 说明                        |
| :-------------- | :----------------------------------------------------------- | :-------------------------- |
| `tileLayer`     | [`TileLayer `](https://lbs.amap.com/api/javascript-api/reference/layer#TileLayer) | 鹰眼窗体中需显示的切片图层  |
| `isOpen`        | `Boolean`                                                    | 鹰眼是否展开，默认为`false` |
| `visible`       | `Boolean`                                                    | 鹰眼是否显示，默认为`true`  |