---
title: 圆点标记
---
# amap-circle-marker 圆点标记
圆点标记，`amap-circle-marker` 不随着地图级别变化发生大小改变，`redius` 的单位为 `px`
#### 基本用法
::: demo
```vue
<div class="map-container">
  <amap-map :center="center">
    <amap-circle-marker 
      :center="center"
      fillOpacity="0.5"
      strokeOpacity="0.5"
      :radius="50" > 
    </amap-circle-marker>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
          center: [121.499358, 31.240171],
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



#### 属性  Attributes

| 参数             | 类型                   | 说明                                                         |
| :--------------- | ---------------------- | ------------------------------------------------------------ |
| `radius`          | `Number`              | **为必填值** 圆点半径，单位:px          |
| `center`         | `Object`               | **为必填值** 圆心位置                             |
| `zIndex`         | `Number`               | 层叠顺序,默认zIndex:10     |
| `bubble`          | `Boolean`             | 是否将覆盖物的鼠标或touch等事件冒泡到地图上, 默认值：false  |
| `strokeColor`    | `String`               | 线条颜色，使用16进制颜色代码赋值。默认值为#006600             |
| `strokeOpacity` | `String`                | 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9|
| `strokeWeight`       | `Number`           | 轮廓线宽度点                  |
| `fillColor`       | `String`           | 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600   |
| `fillOpacity`       | `String`           | 	圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9|
| `extData`        | `Object`               | 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等 |

#### 事件 Events

| 事件名       | 参数                                                         | 说明                                                         |
| ------------ | ------------------------------------------------------------ | :----------------------------------------------------------- |
| `click`      | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键单击事件                                             |
| `dblclick`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键双击事件                                             |
| `rightclick` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标右键单击事件                                             |
| `hide`  | `{type, target}` | 隐藏，矢量图形调用 hide()方法后触发                                                |
| `show`  |` {type, target} `| 显示，矢量图形调用 show()方法后触发                                                 |
| `mousedown`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标按下                                 |
| `mouseup`    | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标抬起                           |
| `mouseover`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标经过                                     |
| `mouseout`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标移出                                    |
| `change`  | `{type, target}` | 属性发生变化时                                                  |
| `touchstart` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸开始时触发事件，仅适用移动设备                           |
| `touchmove`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备                     |
| `touchend`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸结束时触发事件，仅适用移动设备                           |