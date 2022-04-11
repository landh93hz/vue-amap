---
title: 折线编辑插件
---
# amap-polyline-editor 折线编辑插件
折线编辑插件，用于编辑`AMap.Polyline`对象，支持通过鼠标调整折线的形状。

在要开启编辑的矢量图形外面包裹一层 `amap-polyline-editor`，并将要编辑的矢量图形的属性值  `isEditor`设置为 `true`。

示例如下：

::: demo 
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <div class="input-card" >
      <button class="btn" @click="target.open()" style="margin-bottom: 5px">开始编辑</button> 
      <button class="btn" @click="target.close()">结束编辑</button> 
    </div>
    <amap-polyline-editor @complete="event=>target=event">
      <amap-polyline  
        :path="path" 
        isEditor 
        >
      </amap-polyline>
    </amap-polyline-editor >
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
| `addnode`    | `{target: Polyline, lnglat: Lnglat, pixel: Pixel}` | 通过鼠标在折线上增加一个节点或在多边形上增加一个顶点时触发此事件 |
| `adjust`     | `{target: Polyline, lnglat: Lnglat, pixel: Pixel}` | 鼠标调整折线上某个节点或多边形上某个顶点的位置时触发此事件   |
| `removenode` | `{target: Polyline, lnglat: Lnglat, pixel: Pixel}`| 通过鼠标在折线上删除一个节点或在多边形上删除一个顶点时触发此事件 |
| `add`    | `{target: Polyline}`| 	创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象<br>   |
| `end`        | `{target: Polyline}`      | 调用close之后触发该事件，target即为编辑后的覆盖物对象 |

#### 方法 methods

调用 `amap-polyline-editor`的 `complete`事件，会返回当前 `amap-polyline-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       |参数 | 返回值 | 说明                                                         |
| :--------- | :----- |:----- | :----------------------------------------------------------- |
| ` setTarget(overlay?)`   |  `overlay (Polyline?)`    | |设置编辑对象 |
| `getTarget()`   |   | `(Polyline | undefined)`  | 获取编辑对象 |
| `open( )` <img width=200/>   |  <img width=200/>      | 打开编辑功能。功能开启后，多边形/折线上显示可编辑点，其中不透明点为实际结点，鼠标左键单击该类节点可进行删除操作；半透明点为虚拟节点，单击该类节点将为多边形/折线新增结点；实际结点和虚拟节点均可进行拖动操作，以改变多边形/折线的形状。 |
| `close( )` |        | 关闭编辑功能                                                 |
