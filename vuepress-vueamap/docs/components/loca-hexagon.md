---
title: Hexagon 蜂窝热力图
---
# loca-hexagon 蜂窝热力图
蜂窝网格图，将普通的点数据按照蜂窝网格划分成若干区域，每个蜂窝网格区域都会包含落在此区域内的点数据信息。 每个蜂窝网格格子支持单独设置自定义的高度信息、颜色信息。 要注意的是：我们认为所有蜂窝网格格子必须是唯一的大小（radius）和间隙（gap）。 我们还在带有高度的蜂窝网格中加入了可接受光照信息的属性：acceptLight。假如设置了光照并在图层中开启接受光照， 那么每个立体蜂窝网格将会有光照反射的效果。
#### 基本用法
```vue
<div class="map-container">
  <amap-map :center="center">
    <loca>
      <loca-hexagon
        :points="points"
        :radius="120"
        unit="meter"
        :height="3000"
        @complete="hexagonComplete"
      >
      </loca-hexagon>
    </loca>
  </amap-map>
</div>
<script>
export default {
    data() {
      return {
        center: [121.499358, 31.240171],
        points: null
      };
    },
  methods: {
    hexagonComplete(hexagon){
      console.log(hexagon)
    }
  },
  mounted(){
    this.points = new Loca.GeoJSONSource({ url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_road_level.json',});
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

#### 图层参数

| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `data`         | `Array | Object` <img width=250/>                     | **为必填值**，data可以为点对象的数组，或者是`geojson`格式的对象，或者是直接传入`Loca.GeoJSONSource()`处理过后的对象 |
| `zIndex`       | `Number`                   | 默认：10 ，图层显示层级，如果图层的深度检测开启，那么 zIndex 有可能失效。 |
| `opacity`      | `Number`                   | 默认：1 ，图层的透明度， 取值范围[0,1]                                |
| `visible`      | `Boolean`                  | 默认：`true`  ，图层是否可见               |
| `zooms`        | `Array`                    | 支持的缩放级别范围[2,20]                                           |
| `cullface `    | `String`                   | 默认：`back`  ，剔除背面/前面的面（选择剔除将会提升性能），可选：back/front/none，back是剔除背面的面，front是剔除前面的面，none是不进行剔除。 |
| `acceptLight ` | `Boolean`                  | 默认：`true`  ， 立体蜂窝网格是否接受光照，光照信息在 loca 对象中配置    |
| `depth  `      | `Boolean`                  | 默认：`true`  ， 	是否有深度检测能力，当图层元素没有高度的时候，并且需要 zIndex 生效，那么请关闭深度检测。   |
| `shininess `   | `Number`                   | 默认：30 ，立体蜂窝网格的粗糙度，值越高，说明表面越粗糙。          |
| `hasSide   `   | `Boolean`                  | 默认：`true`  ， 当立体蜂窝网格有厚度的时候，有没有侧面和底面 |



#### 图层样式参数
`setStyle(options)`: 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值

参数说明：
`options (HeatMapStyle)`

| 参数            | 类型  | 默认值 | 说明                                                         |
| :---------     | :----- | :----- | :----------------------------------------------------------- |
| `topColor `    |  `(String | Function)`    | `#ffffff`               |顶面颜色 |
| `sideColor `   |  `(String | Function)`    | `#ffffff`               |侧面颜色 |
| `altitude  `   |  `Number`                 | 0                       | 海拔高度，也就是立面的底面的高度。单位：米。支持动画过渡效果 |
| `height  `     |  `Number`                 | 0                       | 网格高度，也就是立面的顶面的高度。单位：米。支持动画过渡效果 |
| `radius  `     |  `Number`                 | 1000                    |一个网格的半径大小，只能是一个常量值。单位由 unit 决定。|
| `gap   `       |  `Number`                 | 0                       | 相邻网格的间隙大小，只能是一个常量值。单位由 unit 决定。 |
| `unit   `      |  `String`                 | `meter`                 | 单位，只能是一个常量值。可选项: px, meter。一个是屏幕像素单位，一个是地理单位。地理单位性能更加优异。|
