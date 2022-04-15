---
title: Loca 图层的容器和控制器
---
# Loca 
图层的容器和控制器，可以控制光照、视角变换、图层渲染等。<font color="#409EFF">在 Loca 版本为 2.0 版本中，所有可视化图层都要挂载在 loca 上，再由 loca 添加到地图上。</font>
:::warning
  `loca`组件仅在 Loca 版本为 2.0 版本中才需要用到作为数据可视化的容器。
:::
```vue
<div class="map-container">
  <amap-map :center="center">
    <loca @complete="locaComplete"></loca>
  </amap-map>
</div>
<script>
export default {
    data() {
      return {
        center: [121.499358, 31.240171],
      };
    },
  methods: {
    heatmapComplete(loca){
      console.log(loca)
    }
  },
}
</script>
<style>
.map-container {
  height: 400px;
  width: 100%
}
</style>
```
#### 可传入的`prop`值

| prop 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `ambLight  `   | `Object`                  | 环境光，对于可以接受光照的图层（PolygonLayer 等）会增加环境光的影响 |
| `dirLight  `   | `Object`                  | 平行光，对于可以接受光照的图层（PolygonLayer 等）会增加平行光的影响。平行光一般用来模拟太阳的光照。它的方向由 position 射向 target。position和target的坐标是一个位置加 z 值（单位米）高度决定。比如: [1, 1, 1000] 代表x:1, y:1, 高度1000米。
如果模拟一个从正南方向的平行光，可以设置target: [0,0,0], position: [0,-1,0] |
| `pointLight`   | `Object`                  | 点光，对于可以接受光照的图层（PolygonLayer 等）会增加点光的影响。点光源通常用来突出展示场景中的某些物体。它的位置和平行光不太一样，x和y是地图上的经纬度位置，z是高度米，比如北京上空一万米的位置放一个点光源：position: [116.39079, 39.90624, 10000]。
光照的distance代表光能照射的最远距离是多少。|

#### 成员函数
| 方法       | 参数 | 返回值 | 说明                                                         |
| :--------- | :----- | :----- | :----------------------------------------------------------- |
| ` requestRender()`   |    | |主动触发地图渲染 |
| `add(layer)`   | `layer (Layer = null)`  |  | 将一个图层添加到地图上|
| `remove(layer)`   |  `layer (Layer = null)`  |  | 将一个图层从地图上移除|
| ` getControlContainer()` |      |  | 获取控件的 dom 容器                                                |
| ` destroy()` |      |  |销毁 `Loca` 实例，如果希望同时销毁 `map`，那么需要先销毁 `Loca` 实例，然后销毁 `Map` 实例。                                            |