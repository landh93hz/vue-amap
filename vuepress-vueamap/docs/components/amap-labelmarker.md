---
title: 海量标注
---
# amap-label-marker 海量标注
#### 基本用法
`amap-labels-layer` 图层是承载 `amap-label-marker` 的图层，所有创建的 `amap-label-marker` 都需要为`amap-labels-layer`的直接子组件上才能最终展示在地图上。
::: demo  
``` vue
<template>
	<div class="map-container">
      <amap-map :zoom="3" :center="center" :mapStyle="mapStyle">
        <amap-labels-layer :collision="true">
          <amap-label-marker
            v-for="(item, index) in points"
            :key="index"
            :data="item"
            :extData="item"
          />
      </amap-labels-layer>
      </amap-map>
    </div>
</template>
<script>
export default {
  data() {
    return {
      points: [],
      center: [116.12, 40.11],
      mapStyle: 'amap://styles/whitesmoke',
    
    };
  },
  mounted(){
    const points = require('../mock/massMark.json');
    this.points = this.labelMarkerStructure(points)
  },
  methods: {
    labelMarkerStructure(list){
      const zooms = [3, 20];
      const icon = {
        type: 'image',
        image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        size: [16, 16],
        anchor: 'bottom-center',
        angel: 0,
        retina: true
      };
      const text = {
        content: '',
        direction: 'top',
        style: {
          fontSize: 12,
          fontWeight: 'normal',
          fillColor: '#0286fe',
        }
      };
      list.forEach(item => {
        const content = item.name + '';
        item.position = item.lnglat;
        item.icon = icon;
        item.text = { ...text, content };
        item.zooms = zooms;
      });
      return list
    },

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

#### `amap-labels-layer`属性   Attributes


| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `visible`         | `Boolean` <img width=250/>                     | 图层是否可见 |
| `zIndex`       | `Number`                   | 图层的层级                                          |
| `opacity`      | `Number`                   | 图层的透明度，取值范围[0,1]                                  |
| `collision`        | `Boolean`                    | 	是否开启碰撞检测，默认为 `true`                                         |
| `animation` | `Boolean`                  | 是否开启标注淡入动画，默认为 `true`             |

#### `amap-label-marker` 属性  Attributes

| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `data`         | `Object`[`参见LabelMarkerOptions`](https://lbs.amap.com/api/javascript-api/reference/overlay#labelMarker) <img width=250/>                     | **为必填值**，`LabelMarkerOptions ` 属性 |
| `extData`      | `any ` |                                 设置该标注用户自定义数据，可为任意类型 |


#### `amap-label-marker` 事件 Events

| 事件名       | 参数     | 说明                                   |
| ------------ | -------- | :------------------------------------- |
| `complete`   |          | 加载完成事件                     |
| `click`      | `{type, target, data, lnglat, pixel}` | 鼠标左键单击事件                       |
| `mouseover`   | `{type, target, data, lnglat, pixel}` | 鼠标移入事件                       |
| `mousemove`  | `{type, target, data, lnglat, pixel}` | 鼠标在标注上移动事件        |
| `mouseout`   | `{type, target, data, lnglat, pixel}` | 鼠标移出事件           |
| `mousedown`  | `{type, target, data, lnglat, pixel}` | 鼠标点击事件 |
| `mouseup`    | `{type, target, data, lnglat, pixel}` | 鼠标抬起事件 |
| `touchstart` | `{type, target, data, lnglat, pixel}` | 触摸start事件     |
| `touchend`   | `{type, target, data, lnglat, pixel}` | 触摸end事件     |