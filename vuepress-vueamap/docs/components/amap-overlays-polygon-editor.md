---
title: 多边形编辑插件
---
# amap-polygon-editor 多边形编辑插件
多边形编辑插件，用于编辑`AMap.Polygon`对象，支持通过鼠标调整多边形的形状。

在要开启编辑的矢量图形外面包裹一层 `amap-polygon-editor`，并将要编辑的矢量图形的属性值  `isEditor`设置为 `true`。

示例如下：

::: demo 
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <div class="input-card" >
      <button class="btn" @click="target.open()" style="margin-bottom: 5px">开始编辑</button> 
      <button class="btn" @click="target.close()">结束编辑</button> 
    </div>
    <amap-polygon-editor @complete="event=>target=event">
      <amap-polygon 
        :path="path" 
        isEditor 
        >
      </amap-polygon>
    </amap-polygon-editor >
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
          target: null
        };
    },
}
</script>
<style>
.map-container {
  height: 400px;
  width: 100%
}
.input-card {
  width: 120px; 
  position: absolute; 
  right:1em;
  bottom: 1em;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgb(114 124 122);
  padding: 0.75rem 1.25rem;
  z-index: 200
}
.btn {
  background: transparent;
  padding: 5px;
  border: 1px solid  #25A5F7;
  color:  #25A5F7;
  outline:none;
}
.btn:hover {
    color: #fff;
    background-color: #25A5F7;
    border-color: #25A5F7;
}
</style>
```
:::


#### 属性  Attributes

| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `createOptions`| `Object`                   |               新创建的对象样式                 |
| `editOptions `       | `Object`                   | 编辑样式                                            |
| `controlPoint  `       | `Object`                   | 顶点样式 CircleMarkerOptions                                  |
| `midControlPoint  `        | `Object`                    | 中间点样式 CircleMarkerOptions                              |


#### 事件 Events
| 事件         | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `complete`    | 当前编辑器对象  | 编辑器创建完成后触发 |
| `addnode`    | `{target: Polygon, lnglat: Lnglat, pixel: Pixel}` | 增加一个节点时触发此事件 |
| `removenode` | `{target: Polygon, lnglat: Lnglat, pixel: Pixel}` | 移除一个节点时触发此事件 |
| `adjust`     | `{target: Polygon, lnglat: Lnglat, pixel: Pixel}` | 鼠标调整折线上某个节点或多边形上某个顶点的位置时触发此事件   |
| `move` | `{target: Polygon, lnglat: Lnglat, pixel: Pixel}` | 移动覆盖物时触发此事件 |
| `add`    | `{target: Polygon}`| 	创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象<br>   |
| `end`        | `{target: Polygon}`                                              | 调用close之后触发该事件，target即为编辑后的覆盖物对象 |

#### 方法 methods

调用 `amap-polygon-editor`的 `complete`事件，会返回当前 `amap-polygon-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 参数 |返回值 | 说明                                                         |
| :--------- | :----- |:----- | :----------------------------------------------------------- |
| `open( )` <img width=200/>   |  <img width=200/>     | <img width=200/> | 开始编辑对象 |
| `setTarget(tar, overlay)` |  `tar (any)`,`overlay (Polygon)`      | | 设置编辑对象                                                 |
| `getTarget()` |        |`(Polygon | undefined)` | 获取编辑对象                                                |
| `setAdsorbPolygons(list)` |        | `list ((Polygon | Array<Polygon>))`| 设置吸附多边形                                                 |
| `clearAdsorbPolygons()` |        | | 清空所有的吸附多边形                                                |
| `addAdsorbPolygons(list)` |        | `list ((Polygon | Array<Polygon>))`|添加吸附多边形                                                 |
| ` removeAdsorbPolygons(list)` |        | `list ((Polygon | Array<Polygon>))`| 删除吸附多边形                                                |
| `close( )` |        | | 关闭编辑功能                                                 |
