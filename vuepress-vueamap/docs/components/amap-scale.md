---
title: 比例尺
---
# amap-scale   比例尺
比例尺插件，位于地图右下角，用户可控制其显示与隐藏。

示例如下：
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
#### 属性  Attributes
| ControlBarOptions   | 类型      | 说明                                                        |
| :------------------ | :-------- | :---------------------------------------------------------- |
| `position`          | `Object`  | 控制显示位置，如 `{top:'10px',right:'10px'}`                |
| `showZoomBar`       | `Boolean` | 是否显示缩放按钮。移动端默认为false，PC端为默认为true       |
| `showControlButton` | `Boolean` | 是否显示倾斜、旋转按钮。移动端默认为false，PC端为默认为true |

#### 事件 Events
| 事件   | 参数 | 说明                       |
| :----- | :--- | :------------------------- |
| `show` |      | 显示比例尺插件时触发的事件 |
| `hide` |      | 隐藏比例尺插件时触发的事件 |