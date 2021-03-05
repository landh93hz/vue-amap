---
title: 标准图层
---
# AmapTilelayer  标准图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :zoom=13 @complete="AmapTileLayer">
    <amap-tilelayer></amap-tilelayer>
  </amap-map>
</div>
<script>
  export default {
    methods: {
      AmapTileLayer(target){
        // let xx = new AMap.TileLayer()
        // xx.setMap(target)
      }
    }
  }
</script>
<style>
.map-container {
  height: 400px;
  width: 100%
}
</style>
```
:::
