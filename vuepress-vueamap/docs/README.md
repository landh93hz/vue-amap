# 组件概述
基于 Vue.js 的高德地图 JSAPI 的封装，Vue 版本为 v2.6.10，高德地图 JS API版本为 v1.4.15

<font size=5>**组件特点**</font>

**1. 自动挂载：** 

`amap-map` 组件是使用高德地图的基础组件，该组件支持挂载任意多个子组件，并且如果这些组件同样是 `amap-` 组件，

例如 `amap-marker` (点标记)、`amap-polyline` (折线)、`amap-polygon` (多边形)，以上组件会自动挂载并显示在地图上：

代码：

```vue
<!-- html -->
<amap-map :center="[120.0983, 30.0182]" view-mode="3D" :rotation.sync="mapRotation">
  <amap-marker :position="position"></amap-marker>
  <amap-polyline :path="path"></amap-polyline>
</amap-map>

<script>
export default {
  data() {
    return {
      mapRotation: 10,
      position: new AMap.LngLat(120.0983, 30.0982),
      path: [
        new AMap.LngLat(120.0983, 30.0982),
        new AMap.LngLat(120.0283, 30.0982),
        new AMap.LngLat(120.1983, 29.0982)
      ]
    }
  }
}
</script>
```

**2. 响应式属性:** 

在上面这个例子中我们将地图的中心点设置在了`[120.0983, 30.0182]`，地图效果为`3D`视角，并将地图旋转10°，当`mapRotation`的值变为20时，地图也将旋转到对应角度，同时我们为`rotation`属性添加了`sync`修饰符，允许在地图旋转的同时，修改`mapRotation`的值。类似这种特点的属性可以非常方便的控制地图属性与制作自定义的地图控件。在`amap-map`组件中除了`rotation`之外，还有`center`、`pitch`、`zoom`、`city`、`bounds`
