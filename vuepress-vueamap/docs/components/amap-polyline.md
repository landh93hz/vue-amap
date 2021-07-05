---
title: 折线
---
# amap-polyline 折线覆盖物
#### 基本用法
将 `amap-polyline`组件放置到 `amap-map`组件中即可，其中路径属性 `path`为**必传值**

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-polyline  :path="path"></amap-polyline>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
           path: [
            [121.535579, 31.250004], 
            [121.520473, 31.247656],
            [121.503135, 31.245748],        
            [121.49438, 31.242666],
            [121.494209, 31.234887]
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

| 参数              | 类型      | 说明                                                  |
| :---------------- | --------- | ----------------------------------------------------- |
| `path`            | `Array`   | **为必填值**，折线的节点坐标数组                      |
| `zIndex`          | `Number`  | 折线覆盖物的叠加顺序   默认：`50`                     |
| `bubble`          | `Boolean` | 是否将覆盖物的鼠标或touch等事件冒泡到地图上           |
| `cursor`          | `String`  | 指定鼠标悬停时的鼠标样式                              |
| `geodesic`        | `Boolean` | 是否绘制成大地线                                      |
| `isOutline`       | `Boolean` | 线条是否带描边                                        |
| `outlineColor`    | `String`  | 线条描边颜色，此项仅在 `isOutline` 为 true 时有效     |
| `strokeColor`     | `String`  | 线条颜色，使用16进制颜色代码赋值                      |
| `strokeOpacity`   | `String`  | 线条透明度，取值范围[0,1]，0表示完全透明，1表示不透明 |
| `strokeWeight`    | `Number`  | 线条宽度，单位：像素                                  |
| `strokeStyle`     | `String`  | 线样式，实线:solid，虚线:dashed  默认：`solid`        |
| `strokeDasharray` | `Array`   | 勾勒形状轮廓的虚线和间隙的样式                        |
| `lineJoin`        | `String`  | 折线拐点的绘制样式                                    |
| `lineCap`         | `String`  | 折线两端线帽的绘制样式                                |
| `draggable`       | `Boolean` | 设置折线是否可拖拽移动                                |
| `showDir`         | `Boolean` | 是否延路径显示白色方向箭头                            |
| `extData`         | `Object`  | 用户自定义属性                                        |
| `isEditor`        | `Boolean`                  | 是否开启编辑功能， 默认：`false`                             |

#### 事件 Events

| 事件名       | 参数                                                         | 说明                                     |
| ------------ | ------------------------------------------------------------ | :--------------------------------------- |
| `complete`   | 当前 `Polyline `对象                                         | 点标记加载完成后触发                     |
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