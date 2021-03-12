---
title: 楼块图层
---
# amap-buildings   楼块图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 116.397428, lat:39.90923}">
    <amap-buildings></amap-buildings>
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
| 参数      | 类型      | 说明                       |
| :-------- | --------- | -------------------------- |
| `visible` | `Boolean` | 图层是否显示  默认：`true` |