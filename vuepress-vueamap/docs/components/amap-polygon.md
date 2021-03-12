---
title: 多边形
---
# amap-polygon 多边形
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}" :zoom=11>
    <amap-polygon  :path="boundaries"></amap-polygon>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
           boundaries: [
             [121.460391, 31.270695],
             [121.475154, 31.228282],
             [121.49026, 31.21184],
             [121.552917, 31.216098],
             [121.583301, 31.241345],
             [121.55841, 31.270841],
             [121.501247, 31.282432]
      	],
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

| 参数              | 类型                       | 说明                                                        |
| :---------------- | -------------------------- | ----------------------------------------------------------- |
| `path`            | `Array`                    | **为必填值**，多边形轮廓线的节点坐标数组                    |
| `zIndex`          | `Number`                   | 多边形覆盖物的叠加顺序  默认：`10`                          |
| `bubble`          | `Boolean`                  | 是否将覆盖物的鼠标或touch等事件冒泡到地图上                 |
| `cursor`          | `String`                   | 指定鼠标悬停时的鼠标样式                                    |
| `strokeColor`     | `String`                   | 线条颜色，使用16进制颜色代码赋值                            |
| `strokeWeight`    | `Number`                   | 轮廓线宽度                                                  |
| `strokeStyle`     | `String`                   | 轮廓线样式，实线:solid，虚线:dashed   默认：`solid`         |
| `strokeDasharray` | `Array`                    | 勾勒形状轮廓的虚线和间隙的样式                              |
| `fillColor`       | `String`                   | 多边形填充颜色                                              |
| `fillOpacity`     | `Number`                   | 多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明 |
| `draggable`       | `Boolean`                  | 设置多边形是否可拖拽移动                                    |
| `extData`         | `Number | String | Object` | 用户自定义属性                                              |
| `isEditor`        | `Boolean`                  | 是否开启编辑功能， 默认：`false`                             |

#### 事件 Events

| 事件名       | 参数                                                         | 说明                                     |
| ------------ | ------------------------------------------------------------ | :--------------------------------------- |
| `complete`   | 当前 `Polygon` 对象                                          | 多边形加载完成后触发                     |
| `click`      | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键单击事件                         |
| `dblclick`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标左键双击事件                         |
| `rightclick` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标右键单击事件                         |
| `hide`       | `{type, target}`                                             | 隐藏                                     |
| `show`       | `{type, target}`                                             | 显示                                     |
| `mousedown`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标按下                                 |
| `mouseup`    | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标抬起                                 |
| `mouseover`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标经过                                 |
| `mouseout`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标移出                                 |
| `change`     |                                                              | 属性发生变化时                           |
| `touchstart` | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸开始时触发事件，仅适用移动设备       |
| `touchmove`  | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备 |
| `touchend`   | [`MapsEvent`](https://lbs.amap.com/api/javascript-api/reference/event#MapsEvent) | 触摸结束时触发事件，仅适用移动设备       |