---
title: 路网图层
---
# amap-roadnet  路网图层
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map  @complete="addRoadnetLayer">
    <amap-roadnet></amap-roadnet>
  </amap-map>
</div>
<script>
  export default {
    methods: {
      addRoadnetLayer(target){
        // let xx = new AMap.TileLayer.RoadNet()
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
| 参数      | 类型      | 说明                       |
| :-------- | --------- | -------------------------- |
| `visible` | `Boolean` | 图层是否显示  默认：`true` |