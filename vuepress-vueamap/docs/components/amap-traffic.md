---
title: 交通图层
---
# amap-traffic   交通图层
#### 基本用法
将 `amap-traffic`组件放置到 `amap-map`组件中即可

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-traffic ></amap-traffic>
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
| TrafficOptions | 类型      | 说明                                                         |
| :------------- | :-------- | :----------------------------------------------------------- |
| `zIndex`       | `Number`  | 图层叠加的顺序值，0表示最底层，默认zIndex：4                 |
| `opacity`      | `Number`   | 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明  |
| `zooms`        | `Array`   | 支持的缩放级别范围，默认范围[3-17],取值范围[3-17]；在手机、平板等高清设备上，默认取值范围为[3-16] |
| `detectRetina` | `Boolean` | 是否在高清屏下进行清晰度适配，默认为true。 将根据移动设备屏幕设备像素比，采用相应的技术手段，保证图层在不同设备像素比下的清晰度。 |
| `autoRefresh`  | `Boolean` | 是否设置可以自动刷新实时路况信息，默认为false                |
| `interval`     | `Number`  | 设置刷新间隔时长，单位：秒 默认180s刷新一次                  |
#### 事件 Events
| 事件       | 参数 | 说明                 |
| :--------- | :--- | :------------------- |
| `complete` |      | 图块切片加载完成事件 |

