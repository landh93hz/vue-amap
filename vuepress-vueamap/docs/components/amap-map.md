---
title: 地图
---
# amap-map 地图组件
#### 基本用法

::: demo  
``` vue
<template>
	<div class="map-container">
      <amap-map></amap-map>
    </div>
</template>
<style>
.map-container {
    height: 400px;
    width: 100%
}
</style>
```
:::
#### 带参数
::: demo
``` vue
<template>
	<div class="map-container">
      <amap-map
        :center="center" 
        :zoom="zoom" 
        :resizeEnable="resizeEnable" >
       </amap-map>
    </div>
</template>
<script>
export default {
  data() {
    return {
      center: [116.397428, 39.90923],
      zoom: 11,
      resizeEnable: true,
    };
  },
};
</script>
<style>
.map-container {
    height: 400px;
    width: 100%
}
</style>
```
:::
#### 属性 Attributes
> `*` 标注的属性均为响应式属性，同时支持`.sync`修饰符同步属性值与地图状态值

| 参数                  | 类型                                                         | 说明                                                         |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `height`              | `Number | String`                                            | 地图高度  默认：`100%`                                       |
| `width`               | `Number | String`                                            | 地图宽度  默认：`100%`                                       |
| `*zoom`               | `Number`                                                     | 地图显示的缩放级别                                           |
| `*pitch`              | `Number`                                                     | 设置地图的俯仰角  默认：`0`   , ` 2D`地图下无效              |
| `*rotation`           | `Number`                                                     | 旋转角度  默认：`0`                                          |
| `*center`             | [AMap.LngLat](https://lbs.amap.com/api/javascript-api/reference/core#LngLat) \| `Array` | 地图中心坐标值                                               |
| `*city`               | `String`                                                     | 城市                                                         |
| `*bounds`             | `Object`                                                     | 限制地图的显示范围                                           |
| `view-mode`           | `String`                                                     | 地图显示效果  默认：`2D`                                     |
| `default-cursor`      | `String`                                                     | 地图默认鼠标样式 `String` ，参数 `defaultCursor` 应符合` CSS `的 `cursor `属性规范 |
| `layers`              | `Array`                                                      | 地图图层数组                                                 |
| `zooms`               | `Array[number]`                                              | 地图显示的缩放级别范围  默认：`[3,18]`                       |
| `lang`                | `String`                                                     | 地图语言类型   默认：`zh_cn`                                 |
| `animate-enable`      | `Boolean`                                                    | 地图平移过程中是否使用动画  默认：`true`                     |
| `is-hotspot`          | `Boolean`                                                    | 是否开启地图热点和 `hover` 效果  默认：`false`               |
| `rotate-enable`       | `Boolean`                                                    | 地图是否开启旋转    默认：`true`    <br />3D视角下默认为为`true`，2D 视角下默认为`false` |
| `resize-enable`       | `Boolean`                                                    | 是否监控地图容器尺寸变化  默认：`true`                       |
| `show-indoor-map`     | `Boolean`                                                    | 是否显示室内地图   默认：`true`                              |
| `expand-room-range`   | `Boolean`                                                    | 是否支持可以扩展最大缩放级别   默认：`true`<br />该属性开启时，PC支持`zooms`的范围最大级别为20 |
| `draggable`           | `Boolean`                                                    | 地图是否可以通过鼠标平移拖拽    默认：`true`                 |
| `zoom-enable`         | `Boolean`                                                    | 地图是否可以缩放   默认：`true`                              |
| `double-click-zoom`   | `Boolean`                                                    | 地图是否可以通过双击放大   默认：`true`                      |
| `keyboard-enable`     | `Boolean`                                                    | 地图是否可以通过键盘控制     默认：`true`                    |
| `jog-enable`          | `Boolean`                                                    | 地图是否使用缓动效果    默认：`true`                         |
| `scroll-wheel`        | `Boolean`                                                    | 地图是否可以通过滚轮缩放   默认：`true`                      |
| `touch-zoom`          | `Boolean`                                                    | 地图在移动端是否可以通过多指控制缩放    默认：`true`         |
| `touch-zoom-center`   | `Number`                                                     | 当 touch-zoom-center 为1时，手机端双指缩放以地图为中心       |
| `map-style`           | `String`                                                     | 设置地图的显示样式   <br />可以使用[地图自定义平台](https://lbs.amap.com/dev/mapstyle/index)定之的地图样式，或者使用其它模板 |
| `features`            | `Array`                                                      | 设置地图上显示的元素种类                                     |
| `show-building-block` | `Boolean`                                                    | 是否显示 3D 楼块效果   默认：`true`                          |
| `pitch-enable`        | `Boolean`                                                    | 是否允许设置俯仰角   默认：`true `    2D效果下无效           |
| `building-animation`  | `Boolean`                                                    | 楼块出现和消失时是否显示动画   默认：`true`                  |
| `sky-color`           | `String`                                                     | 调整天空颜色     3D视图时有效                                |
| `mask`                | `Array`                                                      | 为Map实例设置掩膜的路径                                      |
| `showLabel`           | `Boolean`                                                    | 默认：`true`                                                 |
| `crs`                 | `String`                                                     | 地图显示的参考坐标系    默认：`EPSG3857`                     |

#### 事件 Events

以下只列举了部分地图事件，更多事件见[地图事件](!https://lbs.amap.com/api/javascript-api/reference/map)

| 事件名     | 参数                                                         | 说明                       |
| ---------- | ------------------------------------------------------------ | -------------------------- |
| `complete` |                                                              | 地图图块加载完成后触发事件 |
| `click`    | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键单击事件           |
