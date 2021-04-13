## Map 组件

### 基本用法

```html
<amap-map></amap-map>
```

### 属性Attributes

| 参数 | 说明 | 类型  | 可选值   | 默认 | 备注  |
|-----|------|-------|---------|------|-----|
| height| 地图高度     | number/string    | --     | `100%`   |     |
| width  | 地图宽度    | number/string    | --     | `100%`   |     |
| *zoom   | 地图显示的缩放级别    | number     | --    |     |       |
| *pitch | 设置地图的俯仰角 | number | -- | `0` | 2D地图下无效 |
| *rotation  | 旋转角度 | number | -- | `0` |  |
| *center | 地图中心坐标值| [AMap.LngLat](https://lbs.amap.com/api/javascript-api/reference/core#LngLat)/Array | -- |  --|     |
| *city | 城市 | string | -- | -- | |
| *bounds | 限制地图的显示范围 | Object | -- |  -- |  |
| view-mode | 地图显示效果 | string | `2D`, `3D` | `2D` |  |
| default-cursor | 地图默认鼠标样式 | string | -- | 参数defaultCursor应符合CSS的cursor属性规范 |
| layers   | 地图图层数组   | Array     | --   | --    | [图层](https://lbs.amap.com/api/javascript-api/reference/layer#TileLayer) |
| zooms   | 地图显示的缩放级别范围 | Array[number]    | --   | `[3,18]` |    |
| lang   | 地图语言类型    | string | `zh_cn`,`en`,`zh_en` | `zh_cn`  |     |
| animate-enable   | 地图平移过程中是否使用动画 | boolean   | --  | `true`   |       |
| is-hotspot        | 是否开启地图热点和hover效果   | boolean    | --  | `false`  |       |
| rotate-enable     | 地图是否开启旋转      | boolean    | --  | `true`   | 3D视角下默认为为`true`，2D视角下默认为`false`   |
| resize-enable     | 是否监控地图容器尺寸变化    | boolean    | --  | `true`   |       |
| show-indoor-map   | 是否显示室内地图       | boolean    | --  | `true`   |       |
| expand-room-range | 是否支持可以扩展最大缩放级别   | boolean    | --  | `true`   | 该属性开启时，PC支持`zooms`的范围最大级别为20   |
| drag-enable         | 地图是否可以通过鼠标平移拖拽   | boolean    | --  | `true`   |    |
| zoom-enable       | 地图是否可以缩放     | boolean    | --  | `true`   |     |
| double-click-zoom | 地图是否可以通过双击放大     | boolean    | --  | `true`   |    |
| keyboard-enable   | 地图是否可以通过键盘控制    | boolean    | --  | `true`   |       |
| jog-enable        | 地图是否使用缓动效果       | boolean    | --  | `true`   |       |
| scrool-wheel      | 地图是否可以通过滚轮缩放       | boolean    | --  | `true`   |       |
| touch-zoom        | 地图在移动端是否可以通过多指控制缩放 | boolean    | --  | `true`   |       |
| touch-zoom-center | 当touch-zoom-center为1时，手机端双指缩放以地图为中心 | number     | --  | --       |       |
| map-style  | 设置地图的显示样式   | string     | --  | --       | 可以使用[地图自定义平台](https://lbs.amap.com/dev/mapstyle/index)定之的地图样式，或者使用其它模板  |
| features | 设置地图上显示的元素种类 | Array | `bg`,`point`, `road`, `building` | -- | |
| show-building-block | 是否显示3D楼块效果 | boolean | `true` | |
| pitch-enable | 是否允许设置俯仰角 | boolean | `true` | 2D效果下无效 |
| building-animation | 楼块出现和消失时是否显示动画 | boolean | `true` | |
| sky-color | 调整天空颜色 | string | -- | -- | 3D视图时有效 |
| mask | 为Map实例设置掩膜的路径 | Array | -- | -- | |


> `*`标注的属性均为响应式属性，同时支持`.sync`修饰符同步属性值与地图状态值

### 事件Events

详情参见[地图事件](!https://lbs.amap.com/api/javascript-api/reference/map)


### 组件特点

#### 自动挂载

`amap-map`组件是使用高德地图的基础组件，该组件支持挂载任意多个子组件，并且如果这些组件同样是`amap-`组件，例如`amap-marker`(点标记)、`amap-polyline`(折线)、`amap-polygon`(多边形)，以上组件会自动挂载并显示在地图上：

```html
<!-- html -->
<amap-map :center="[120.0983, 30.0182]" view-mode="3D" :rotation.sync="mapRotation">
  <amap-marker :position="position"></amap-marker>
  <amap-polyline :path="path"></amap-polyline>
</amap-map>
```

```js
// js
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
```

#### 响应式属性

在上面这个例子中我们将地图的中心点设置在了`[120.0983, 30.0182]`，地图效果为`3D`视角，并将地图旋转10°，当`mapRotation`的值变为20时，地图也将旋转到对应角度，同时我们为`rotation`属性添加了`sync`修饰符，允许在地图旋转的同时，修改`mapRotation`的值。类似这种特点的属性可以非常方便的控制地图属性与制作自定义的地图控件。在`amap-map`组件中除了`rotation`之外，还有`center`、`pitch`、`zoom`、`city`、`bounds`

