---
title: 比例尺
---
# AmapScale    比例尺
比例尺插件。位于地图右下角，用户可控制其显示与隐藏。
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-scale></amap-scale>
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
| 事件   | 参数 | 说明                       |
| :----- | :--- | :------------------------- |
| `show` |      | 显示比例尺插件时触发的事件 |
| `hide` |      | 隐藏比例尺插件时触发的事件 |