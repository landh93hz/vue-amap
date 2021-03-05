---
title: 图层
---
# AmapRoadnet   路网图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-roadnet></amap-roadnet>
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
# AmapSatellite  卫星图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-satellite></amap-satellite>
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
# AmapTilelayer  标准图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-tilelayer></amap-tilelayer>
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
# AmapTraffic   交通图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-traffic :visible = "false"></amap-traffic>
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
# AmapBuildings   楼块图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
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