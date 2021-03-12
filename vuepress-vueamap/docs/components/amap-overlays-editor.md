---
title: 折线、多边形编辑插件
---
# amap-polyeditor 折线、多边形编辑插件
折线、多边形编辑插件，用于编辑折线、多边形对象，目前支持通过鼠标调整折线、多边形的形状。

这里以折线为例：

::: demo 在要编辑的矢量图形外面包裹一层 `amap-polyeditor`，并给要编辑的矢量图形设置  `isEditor`值,默认为 `false`
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <div class="input-card" >
      <button class="btn" @click="target.open()" style="margin-bottom: 5px">开始编辑</button> 
      <button class="btn" @click="target.close()">结束编辑</button> 
    </div>
    <amap-polyeditor @complete="event=>target=event">
      <amap-polyline  
        :path="path" 
        isEditor 
        >
      </amap-polyline>
    </amap-polyeditor >
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
    }
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
  box-shadow: 0 2px 6px 0 rgb(114 124 245 / 50%);
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


**事件**
| 事件         | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `complete`    | 当前编辑器对象  | 编辑器创建完成后触发 |
| `addnode`    | [`MapsEvent`](https://developer.amap.com/api/javascript-api/reference/event#MapsEvent) | 通过鼠标在折线上增加一个节点或在多边形上增加一个顶点时触发此事件 |
| `adjust`     | [`MapsEvent`](https://developer.amap.com/api/javascript-api/reference/event#MapsEvent) | 鼠标调整折线上某个节点或多边形上某个顶点的位置时触发此事件   |
| `removenode` | [`MapsEvent`](https://developer.amap.com/api/javascript-api/reference/event#MapsEvent) | 通过鼠标在折线上删除一个节点或在多边形上删除一个顶点时触发此事件 |
| `end`        | `{type,target}`                                              | 在调用close方法时，触发该事件，target即为编辑后的折线/多边形对象 |

**方法**

调用 `amap-polyeditor`的 `complete`事件，会返回当前 `amap-polyeditor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 返回值 | 说明                                                         |
| :--------- | :----- | :----------------------------------------------------------- |
| `open( )` <img width=200/>   |  <img width=200/>      | 打开编辑功能。功能开启后，多边形/折线上显示可编辑点，其中不透明点为实际结点，鼠标左键单击该类节点可进行删除操作；半透明点为虚拟节点，单击该类节点将为多边形/折线新增结点；实际结点和虚拟节点均可进行拖动操作，以改变多边形/折线的形状。 |
| `close( )` |        | 关闭编辑功能                                                 |
