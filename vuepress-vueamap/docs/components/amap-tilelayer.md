---
title: 标准图层
---
# amap-tilelayer  标准图层
#### 基本用法
将 `amap-tilelayer`组件放置到 `amap-map`组件中即可

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :zoom=13 @complete="AmapTileLayer">
    <amap-tilelayer></amap-tilelayer>
  </amap-map>
</div>
<script>
  export default {
    methods: {
      AmapTileLayer(target){
        // let xx = new AMap.TileLayer()
        // xx.setMap(target)
      }
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
| TileLayerOptions | 类型                     | 说明                                                         |
| :--------------- | :----------------------- | :----------------------------------------------------------- |
| `tileSize`       | `Number`                 | 切片大小，取值： 256，表示切片大小为256*256， 128，表示切片大小为128*128， 64，表示切片大小为64*64。默认值为256 |
| `tileUrl`        | `String`                 | 切片取图地址(自1.3版本起，该属性与getTileUrl属性合并) 如：'https://abc.amap.com/tile?x=[x]&y=[y]&z=[z]' [x]、[y]、[z]分别替代切片的xyz。 |
| `errorUrl`       | `String`                 | 取图错误时的代替地址                                         |
| `getTileUrl`     | `String/Function(x,y,z)` | 获取图块取图地址，该属性值为一个字符串或者一个函数 字符串如：'https://abc.amap.com/tile?x=[x]&y=[y]&z=[z]' 函数参数z为地图缩放级别，x,y分别为相应缩放级别下图块横向、纵向索引号， 该属性可以用来改变取图地址，实现自定义栅格图。 |
| `zIndex`         | `Number`                 | 图层叠加的顺序值，0表示最底层。默认zIndex：1                 |
| `opacity`        | `Number`                  | 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明  |
| `zooms`          | `Array`                  | 支持的缩放级别范围，默认范围[3-18]，在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19] |
| `detectRetina`   | `Boolean`                | 是否在高清屏下进行清晰度适配，默认为true。 将根据移动设备屏幕设备像素比，采用相应的技术手段，保证图层在不同设备像素比下的清晰度。 |

#### 事件 Events
| 事件       | 参数 | 说明                 |
| :--------- | :--- | :------------------- |
| `complete` |      | 图块切片加载完成事件 |
