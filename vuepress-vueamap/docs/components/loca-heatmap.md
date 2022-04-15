---
title: HeatMap 基本热力图
---
# loca-heatmap 热力图
热力图，支持 3D 和不同颜色设置的聚合点数据显示。并且支持像素单位和米单位的热力聚合。

<font size=4>1. **Loca 1.3 版本**</font>
#### 基本用法
```vue
<div class="map-container">
  <amap-map :center="center" view-mode="3D">
      <loca-heatmap
        value="queue_len"
        lnglat="lnglat"
        :points="points"
        :radius="18"
        :color="color"
      >
      </loca-heatmap>
  </amap-map>
</div>
<script>
export default {
    data() {
      return {
        center: [121.499358, 31.240171],
        color: {
          0.5: '#2c7bb6',
          0.65: '#abd9e9',
          0.7: '#ffffbf',
          0.9: '#fde468',
          1.0: '#d7191c'
        },
        points: []
      };
    },
  methods: {
    heatmapComplete(heatmap){
      console.log(heatmap)
    }
  },
  mounted(){
   const points = require('../mock/roadHeat.json');
   points.forEach(point => point.lnglat =  [point.lng, point.lat] )
   // points 数据结构 [{"queue_len": 26.67,"len": 22,"inter_name": "延安中路","lng": 121.445626, "lat": 31.220965, "lnglat": [121.445626,31.220965],...},]
   this.points = points;
   console.log(this.points)
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
| `data`         | `Array` <img width=250/>                     | **为必填值**，data为点对象的数组，数组对象必须包含 `lnglat: [lng, lat]` 经纬度信息字段 |
| `zIndex`       | `Number`                   | 图层显示层级， 默认：10                                            |
| `visible` | `Boolean`                  | 图层是否可见  默认：`true`               |
| `type`         | `string`                      | **为必填值**，默认值 `json`,  数据格式, 默认 JSON 格式|
| `radius`       |  `Number`    | **为必填值** 热力的聚合半径，支持每个点的半径单独设置，单位取决于 unit 字段。支持动画过渡效果。 |
| `value `       |  `String`    |                     **为必填值** 指定热力映射的字段名, 默认为 `value`， |
| `color `       |   `Object`                |热力的颜色梯度，值是对象映射的形式。 |
| `opacity`      | `Number`                   | 图层的透明度， 取值范围[0,1]，默认：1                                 |
| `height `      |   `Number`                | 	热力最高点的高度值，单位取决于 unit 字段。支持动画过渡效果。 |
<font size=4>2. **Loca 2.0 版本**</font>

```vue
<div class="map-container">
  <amap-map :center="center">
    <loca>
      <loca-heatmap
        value="avg"
        :points="points"
        :radius="200000"
        unit="meter"
        :height="500000"
        :color="gradient"
        @complete="heatmapComplete"
        :heightBezier = "[0, .53, .37, .98]"
      >
      </loca-heatmap>
    </loca>
  </amap-map>
</div>
<script>
export default {
    data() {
      return {
        center: [121.499358, 31.240171],
        gradient: {
          0.1: '#2A85B8',
          0.2: '#16B0A9',
          0.3: '#29CF6F',
          0.4: '#5CE182',
          0.5: '#7DF675',
          0.6: '#FFF100',
          0.7: '#FAA53F',
          1: '#b5450a',
        },
        points: null
      };
    },
  methods: {
    heatmapComplete(heatmap){
      console.log(heatmap)
    }
  },
  mounted(){
    this.points = new Loca.GeoJSONSource({url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/traffic.json',});
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
| `zIndex`       | `Number`                   | 图层显示层级， 默认：10                                            |
| `opacity`      | `Number`                   | 图层的透明度， 取值范围[0,1]，默认：1                                 |
| `visible` | `Boolean`                  | 图层是否可见  默认：`true`               |
| `radius`       |  `Number`    | **为必填值** 热力的聚合半径，支持每个点的半径单独设置，单位取决于 unit 字段。支持动画过渡效果。 |
| `value `       |  `String`    |                     热力点的值的 key 值， 默认为 `value`，每个热力点的值，会影响最终的聚合结果，值越高代表越热。 |
| `color `       |   `Object`                |  热力的颜色梯度，值是对象映射的形式。 |
| `height `      |   `Number`                | 	热力最高点的高度值，单位取决于 unit 字段。支持动画过渡效果。 |
| `max `         |   `Number`                |  `null `     | 热力值的最大值，默认为数据中的最高值，也可以自定义设置，会控制热力的最热区域的显示效果。  |
| `min `         |   `Number`                |  `null `     | 热力值的最小值，默认为数据中的最小值，也可以自定义设置，会控制热力的最冷区域的显示效果。  |
| `unit `        |   `String`                |  `px `       | 热力的单位，可选值是 px 和 meter。meter 代表地理真实的距离。  |
