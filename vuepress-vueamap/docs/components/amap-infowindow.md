---
title: 信息窗体
---
# amap-infowindow 信息窗体
#### 基本用法
将 `amap-infowindow`组件放置到 `amap-map`组件中即可，其中位置属性 `position`为**必传值**

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
      <amap-infowindow :position="position">
        <div style="padding: 10px">这是信息窗体内容区域</div>
      </amap-infowindow>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
          position: [121.499358, 31.240171],
        };
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
#### 点击 Marker 打开信息窗口
通过与 `amap-marker`结合，点击 `Marker`点标记，弹出信息窗口。

示例如下：
::: demo
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-marker 
      :position="position" 
      @click="markerClick" 
      >
    </amap-marker>
      <amap-infowindow 
        v-if="show"
        :visible="visible" 
        anchor="top-center"
        :position="position" 
        @close="handleCloseWindow">
        <div>这是信息窗体内容区域</div>
      </amap-infowindow>
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
          position: [121.499358, 31.240171],
          show: false,
          visible: false
        };
    },
    methods:{
      markerClick(){
        this.show = true
        this.visible = true
      },
      handleCloseWindow(){
        this.visible = false
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

| 参数                | 类型                      | 说明                                                         |
| :------------------ | ------------------------- | ------------------------------------------------------------ |
| `position`          | `Object | Array`   <img width=250/>                  | **为必填值**，信息窗体显示基点位置                           |
| `autoMove`          | `Boolean`                 | 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示） |
| `closeWhenClickMap` | `Boolean`                 | 控制是否在鼠标点击地图后关闭信息窗体  默认：`true`           |
| `content`           | `String | HTMLDivElement` | 显示内容，可以是HTML要素字符串或者`HTMLElement`对象          |
| `size`              | `Object`                  | 信息窗体尺寸（`isCustom`为true时，该属性无效）               |
| `anchor`            | `String`                  | 信息窗体锚点                                                 |
| `offset`            | `Object`                  | 信息窗体显示位置偏移量                                       |
| `showShadow`        | `Boolean`                 | 控制是否显示信息窗体阴影，取值false时不显示窗体阴影，取值true时显示窗体阴影 |

#### 事件 Events

| 事件名     | 参数 | 说明                     |
| ---------- | ---- | :----------------------- |
| `complete` |      |                          |
| `open`     |      | 属性发生变化时           |
| `change`   |      | 信息窗体打开之后触发事件 |
| `close`    |      | 信息窗体关闭之后触发事件 |
