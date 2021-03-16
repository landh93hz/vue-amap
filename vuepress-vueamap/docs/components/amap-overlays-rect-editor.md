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
#### 事件 Events
| 事件         | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `complete`    | 当前编辑器对象  | 编辑器创建完成后触发 |
| `adjust`     |	 `{ type, radius, target }` | 鼠标调整横向和纵向半径时触发该事件   |
| `end`        | `{type,target}`                        | 在调用close方法时，触发该事件，target即编辑的矩形 |

#### 方法 methods

调用 `amap-rectangle-editor`的 `complete`事件，会返回当前 `amap-rectangle-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 返回值 | 说明                                                         |
| :--------- | :----- | :----------------------------------------------------------- |
| `open( )`  |        | 打开编辑功能。功能开启后，通过编辑点可调整矩形的形状 |
| `close( )` |        | 关闭编辑功能                                                 |
