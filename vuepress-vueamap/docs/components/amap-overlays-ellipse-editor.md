---
title: 椭圆编辑插件
---
# amap-ellipse-editor 椭圆编辑
椭圆编辑插件。用于编辑 `amap-ellipse`对象，目前支持通过鼠标调整椭圆的圆心和形状。
基础用法：
::: demo
```vue
<div class="map-container">
  <amap-map :center="center" >
  <div class="input-card" >
    <button class="btn" @click="ellipseTarget.open()" style="margin-bottom: 5px">开始编辑</button> 
    <button class="btn" @click="ellipseTarget.close()">结束编辑</button> 
  </div>
    <amap-ellipse-editor @complete="event=>ellipseTarget=event">
      <amap-ellipse
        isEditor
        :center="center"
        :radius="[ 2000, 1000 ]"
        fillColor="#FF33FF"
        strokeColor="pink"
        fillOpacity="0.5"
        :strokeWeight="2"
        >
      </amap-ellipse>
    </amap-ellipse-editor>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
          center: [116.39,39.9],
          ellipseTarget: null
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
  box-shadow: 0 2px 6px 0 rgb(114, 124, 122);
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
| `complete`    | 当前编辑器对象 <img width=200/> | 编辑器创建完成后触发 |
| `move`    | `{type, target, lnglat}`| 	拖拽圆心调整圆形位置时触发此事件<br>  type: 事件类型<br>  target: 发生事件的目标对象<br>   lnglat: 调整后圆的圆心坐标 |
| `adjust`     | `{type, target, lnglat}` | 鼠标调整圆形半径时，触发此事件<br>   type: 事件类型<br>  target: 发生事件的目标对象<br>   radius: 调整后圆的半径，单位：米   |
| `end`        | `{type,target}`                                              | 该方法会在调用close方法后触发，target即为编辑后的圆对象 |

**方法**

调用 `amap-ellipse-editor`的 `complete`事件，会返回当前 `amap-ellipse-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 返回值 | 说明                                                         |
| :--------- | :----- | :----------------------------------------------------------- |
| `open( )`   |      | 打开编辑功能 |
| `close( )` |        | 关闭编辑功能                                                 |

