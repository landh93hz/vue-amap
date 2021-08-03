---
title: 矩形编辑插件
---
# amap-rectangle-editor 矩形编辑
 矩形的编辑插件，用于编辑 `amap-rectangle`对象，目前支持通过鼠标调整矩形的形状。

 在`amap-rectangle`组件外添加 `amap-rectangle-editor`作为父组件，并将 `amap-rectangle` 的属性值  `isEditor`设置为 `true`。


 示例如下：
::: demo 
```vue
<div class="map-container">
    <amap-map :center="{lng: 121.498586, lat: 31.239637}" :zoom=12>
        <div class="input-card" >
          <button class="btn" @click="rectTarget.open()" style="margin-bottom: 5px">开始编辑</button> 
          <button class="btn" @click="rectTarget.close()">结束编辑</button> 
        </div>
        <amap-rectangle-editor @complete="event=>rectTarget=event">
            <amap-rectangle 
            :bounds="bounds"
            isEditor
             >
            </amap-rectangle>
        </amap-rectangle-editor>
    </amap-map>
</div>
<script>
export default {
  data(){
    return {
      bounds: [[121.460391, 31.270695], [121.501247, 31.282432]],
      rectTarget: null
    };
  }
}
</script>
<style>
.map-container {
  height: 400px;
  width: 100%;
  position:relative
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
| `southWestPoint   `       | `Object`                   | 西南点样式 MarkerOptions                                 |
| `northEastPoint   `        | `Object`                    | 东北点样式 MarkerOptions                             |

#### 事件 Events
| 事件         | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `complete`    | 当前编辑器对象  | 编辑器创建完成后触发 |
| `addnode`    | `{target: Rectangle, lnglat: Lnglat, pixel: Pixel}`  | 编辑器创建完成后触发 |
| `adjust`     |	 `{target: Rectangle, lnglat: Lnglat, pixel: Pixel}` | 鼠标调整横向和纵向半径时触发该事件   |
| `move`    | `{target: Rectangle, lnglat: Lnglat, pixel: Pixel}`  | 增加一个节点时触发此事件 |
| `add`    | `{target: Rectangle}`  | 创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象 |
| `end`        | `{target: Rectangle}`                        | 在调用close方法时，触发该事件，target即编辑的矩形 |

#### 方法 methods

调用 `amap-rectangle-editor`的 `complete`事件，会返回当前 `amap-rectangle-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 参数 |返回值 | 说明                                                         |
| :--------- | :----- |:----- | :----------------------------------------------------------- |
| `setTarget(overlay?)`  |  `overlay (Rectangle?)`      | |设置编辑对象 |
| `getTarget()`  |        |`(Rectangle | undefined)`|获取编辑对象 |
| `open( )`  |        | |打开编辑功能。功能开启后，通过编辑点可调整矩形的形状 |
| `close( )` |        | |关闭编辑功能                                                 |
