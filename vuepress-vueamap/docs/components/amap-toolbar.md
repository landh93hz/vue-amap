---
title: 工具条
---
# amap-toolbar     工具条
地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-toolbar></amap-toolbar>
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
| ToolbarOptions   | 类型                                                         | 说明                                                         |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `offset`         | [`Pixel `](https://lbs.amap.com/api/javascript-api/reference/core/#Pixel) | 相对于地图容器左上角的偏移量，正数代表向右下偏移。默认为`AMap.Pixel(10,10)` |
| `position`       | `String    `                                                 | 控件停靠位置LT:左上角;RT:右上角;LB:左下角;RB:右下角;默认位置：`LT` |
| `ruler`          | `Boolean`                                                    | 标尺键盘是否可见，默认为`true`                               |
| `noIpLocate`     | `Boolean`                                                    | 定位失败后，是否开启IP定位，默认为`false`                    |
| `locate`         | `Boolean`                                                    | 是否显示定位按钮，默认为`false`                              |
| `liteStyle`      | `Boolean`                                                    | 是否使用精简模式，默认为`false`                              |
| `direction`      | `Boolean`                                                    | 方向键盘是否可见，默认为`true`                               |
| `autoPosition`   | `Boolean`                                                    | 是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，仅在支持HTML5的浏览器中有效，默认为`false` |
| `locationMarker` | [`Marker `](https://lbs.amap.com/api/javascript-api/reference/overlay#Marker) | 自定义定位图标，值为Marker对象                               |
| `useNative`      | `Boolean`                                                    | 是否使用高德定位sdk用来辅助优化定位效果，默认：false.仅供在使用了高德定位sdk的APP中，嵌入webview页面时使用注：如果要使用辅助定位的功能，除了需要将useNative属性设置为true以外，还需要调用高德定位idk中，AMapLocationClient类的startAssistantLocation()方法开启辅助H5定位功能；不用时，可以调用stopAssistantLocation()方法停止辅助H5定位功能。具体用法可参考定位SDK的[参考手册](http://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/unzip/Android_Location_Doc/index.html) |

| 事件          | 参数            | 说明                                                         |
| :------------ | :-------------- | :----------------------------------------------------------- |
| `show`        |                 | 工具条显示时触发此事件                                       |
| `hide`        |                 | 工具条隐藏时触发此事件                                       |
| `location`    | `{type,lnglat}` | 使用ToolBar定位按钮或doLocation函数进行定位，定位完成时触发此事件，浏览器须支持html5type: 事件类型lnglat: 定位结果坐标值 |
| `zoomchanged` | `{type}`        | 使用工具条缩放地图时触发此事件type：事件类型放大地图时，type值为`zoomin`；缩小地图时，type值为`zoomout` |