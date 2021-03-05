---
title: 交通图层
---
# AmapTraffic   交通图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-traffic ></amap-traffic>
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
