---
title: 点标记
---
# amap-marker 点标记
#### 基本用法
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-marker :position=position> </amap-marker>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
          position: [121.499358, 31.240171],
        };
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
:::

#### 使用图片自定义点标记
::: demo
```vue

<div class='map-container'>
<amap-map :center='{lng: 121.498586, lat: 31.239637}'>
  <amap-marker :position='position'>
    <div slot='content'>
      <img :src="require('../img/position.png')" style='width:30px;height:30px;' />
    </div>
  </amap-marker>
</amap-map>
</div>
<script>
export default {
  data() {
    return {
      position: [121.499358, 31.240171],
    };
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

#### 属性  Attributes

| 参数             | 类型                   | 说明                                                         |
| :--------------- | ---------------------- | ------------------------------------------------------------ |
| `topWhenClick`   | `Boolean`              | 鼠标点击时marker是否置顶                                     |
| `bubble`         | `Boolean`              | 是否将覆盖物的鼠标或touch等事件冒泡到地图上                  |
| `raiseOnDrag`    | `Boolean`              | 设置拖拽点标记时是否开启点标记离开地图的效果                 |
| `cursor`         | `String`               | 指定鼠标悬停时的鼠标样式                                     |
| `autoRotation`   | `Boolean`              | 是否自动旋转                                                 |
| `anchor`         | `String`               | 设置点标记锚点                                               |
| `offset`         | `Object`               | 点标记显示位置偏移量   默认：`Pixel(-10,-34)`                |
| `icon`           | `Object | String`      | 需在点标记中显示的图标                                       |
| `draggable`      | `Boolean`              | 设置点标记是否可拖拽移动   默认：`false`                     |
| `zIndex`         | `Number`               | 点标记的叠加顺序                                             |
| `angle`          | `Number`               | 点标记的旋转角度                                             |
| `animation`      | `String`               | 点标记的动画效果    默认：` "AMAP_ANIMATION_NONE"`           |
| `title`          | `String`               | 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示   |
| `shadow`         | `Object`               | 点标记阴影，不设置该属性则点标记无阴影                       |
| `content`        | `String | HTMLElement` | 点标记显示内容，可以是HTML要素字符串或者HTML DOM对象         |
| `label`          | `Object | String`      | 添加文本标注                                                 |
| `labelOffset`    | `Object`               | 文本标注偏移量                                               |
| `labelDirection` | `String`               | 文本标注如果设置了 direction，以 direction 方位为基准点进行偏移 |
| `extData`        | `Object`               | 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等 |
| `position`       | `Object`               | 点标记在地图上显示的位置   默认：地图中心点                  |

#### 事件 Events

| 事件名       | 参数                                                         | 说明                                                         |
| ------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| `complete`   | 当前 `Marker`对象                                            | 点标记加载完成后触发                                         |
| `click`      | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键单击事件                                             |
| `dblclick`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键双击事件                                             |
| `rightclick` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标右键单击事件                                             |
| `mousemove`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标移动                                                     |
| `mouseover`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标移近点标记时触发事件                                     |
| `mouseout`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标移出点标记时触发事件                                     |
| `mousedown`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标在点标记上按下时触发事件                                 |
| `mouseup`    | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标在点标记上按下后抬起时触发事件                           |
| `dragstart`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 开始拖拽点标记时触发事件                                     |
| `dragging`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标拖拽移动点标记时触发事件                                 |
| `dragend`    | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 点标记拖拽移动结束触发事件                                   |
| `moving`     | `Object`                                                     | 点标记在执行moveTo，moveAlong动画时触发事件                  |
| `moveend`    |                                                              | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发 |
| `movealong`  |                                                              | 点标记执行moveAlong动画一次后触发事件                        |
| `touchstart` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸开始时触发事件，仅适用移动设备                           |
| `touchmove`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备                     |
| `touchend`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸结束时触发事件，仅适用移动设备                           |