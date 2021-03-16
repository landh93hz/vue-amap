---
title: 楼块图层
---
# amap-buildings   楼块图层
将 `amap-buildings`组件放置到 `amap-map`组件中即可

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 116.397428, lat:39.90923}" view-mode="3D" :pitch="30" :zoom="16" >
    <amap-buildings :heightFactor="2"></amap-buildings>
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
| `BuildingsOptions` | 类型                 | 说明                                   |
| :----------------- | :------------------- | :------------------------------------- |
| `zooms `             | `Array` | 可见级别范围                           |
| `opacity`          | `Number`             | 不透明度                               |
| `heightFactor`     | `Number`             | 高度比例系数，可控制3D视图下的楼块高度 |
| `visible`          | `Boolean`            | 是否可见                               |
| `zIndex`           | `Number`             | 层级，默认8                            |

#### 事件 Events
| 事件       | 参数 | 说明                 |
| :--------- | :--- | :------------------- |
| `complete` |      | 图块切片加载完成事件 |
