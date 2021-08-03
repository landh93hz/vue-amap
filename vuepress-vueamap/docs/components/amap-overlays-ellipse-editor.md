---
title: 椭圆编辑插件
---
# amap-ellipse-editor 椭圆编辑
椭圆编辑插件，用于编辑 `amap-ellipse`对象，目前支持通过鼠标调整椭圆的圆心和形状。

在`amap-ellipse`组件外添加 `amap-ellipse-editor`作为父组件，并将 `amap-ellipse` 的属性值  `isEditor`设置为 `true`。
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

#### 属性  Attributes

| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `createOptions`| `Object`                   |               新创建的对象样式                 |
| `editOptions `       | `Object`                   | 编辑样式                                            |
| `movePoint `       | `Object`                   | 移动点样式 MarkerOptions                                   |
| `resizeXPoint`        | `Object`                    | resizeX点样式 MarkerOptions                                          |
| `resizeYPoint `      | `Object`                   | resizeY点样式 MarkerOptions                                 |

#### 事件 Events
| 事件         | 参数                                                         | 说明                                                         |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `complete`    | 当前编辑器对象 <img width=400/> | 编辑器创建完成后触发 |
| `addnode`    | `{target: Ellipse, lnglat: Lnglat, pixel: Pixel}`| 增加一个节点时触发此事件|
| `adjust`     | `{target: Ellipse, lnglat: Lnglat, pixel: Pixel}` |  调整折线上某个点时触发此事件 |
| `move`    | `{target: Ellipse, lnglat: Lnglat, pixel: Pixel}`| 	移动覆盖物时触发此事件 |
| `add`    | `{target: Ellipse, lnglat: Lnglat, pixel: Pixel}`| 	创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象 |
| `end`        | `{target: Ellipse}`                                              | 该方法会在调用close方法后触发，target即为编辑后的椭圆对象 |

#### 方法 methods

调用 `amap-ellipse-editor`的 `complete`事件，会返回当前 `amap-ellipse-editor` 实例对象，通过调用该实例的 `open` 方法，即可开启编辑模式，调用 `close` 方法，即可关闭编辑模式

| 方法       | 参数 |返回值 | 说明                                                         |
| :--------- | :----- |:----- | :----------------------------------------------------------- |
| `setTarget(overlay?)`   | `overlay (Ellipse?)`     | |设置编辑对象 |
| ` getTarget()`   |      |`(Ellipse | undefined)` |获取编辑对象 |
| `open( )`   |      | |打开编辑功能 |
| `close( )` |        | |关闭编辑功能                                                 |

