---
title: 海量点标记
---
# amap-massmarks 海量点标记
#### 基本用法
::: demo  
``` vue
<template>
	<div class="map-container">
      <amap-map :zoom="3">
        <amap-massmarks
          :data=points
          :bubble="false"
          :point-style="pointStyle"
          @complete="massmarkComplete"
          :z-index="100"
          >
        </amap-massmarks>
      </amap-map>
    </div>
</template>
<script>
export default {
  data() {
    return {
      points: [],
      pointStyle:[
        {
          url: require('../img/dot.png'),
          // anchor: new AMap.Pixel(4, 4),
          // size: new AMap.Size(7, 7)
        },
      ],
    
    };
  },
  mounted(){
    this.points = require('../mock/massMark.json');
    if (AMap){
      this.pointStyle[0].anchor = new AMap.Pixel(4, 4);
      this.pointStyle[0].size = new AMap.Size(7, 7);
    }
  },
  methods: {
    massmarkComplete(e){
      // console.log(e)
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

#### 重要说明
示例中的代码因为 `VuePress` 应用中**浏览器的 API 访问限制**原因，故代码做了一些修改，在正常的 `Vue`项目中如下引入即可
``` vue
<template>
	<div class="map-container">
      <amap-map :zoom="3">
        <amap-massmarks
          :data=points
          :bubble="false"
          :point-style="pointStyle"
          @complete="massmarkComplete"
          :z-index="100"
          >
        </amap-massmarks>
      </amap-map>
    </div>
</template>
<script>
import AMap from 'AMap'
export default {
  data() {
    return {
      points: [],
      pointStyle:[
        {
          url: require('../img/dot.png'),
          anchor: new AMap.Pixel(4, 4),
          size: new AMap.Size(7, 7)
        },
      ],
    
    };
  },
  mounted(){
    this.points = require('../mock/massMark.json');
  },
  methods: {
    massmarkComplete(e){
      // console.log(e)
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

#### 属性  Attributes

| 参数           | 类型                       | 说明                                                         |
| :------------- | -------------------------- | ------------------------------------------------------------ |
| `data`         | `Array` <img width=250/>                     | **为必填值**，data为点对象的数组，点对象为包含经纬度lnglat属性的Object，opts为点与点集合的绘制样式。 |
| `pointStyle`   | `Object | Array| Function` | **为必填值**,用于设置点的样式                                |
| `zIndex`       | `Number`                   | 图层叠加的顺序值5                                            |
| `cursor`       | `String`                   | 指定鼠标悬停时的鼠标样式                                     |
| `zooms`        | `Array`                    | 支持的缩放级别范围                                           |
| `opacity`      | `Number`                   | 图层的透明度，取值范围[0,1]                                  |
| `alwaysRender` | `Boolean`                  | 表示是否在拖拽缩放过程中实时重绘  默认：`true`               |

#### 事件 Events

| 事件名       | 参数     | 说明                                   |
| ------------ | -------- | :------------------------------------- |
| `complete`   |          | 海量点加载完成事件                     |
| `click`      | `Object` | 鼠标左键单击事件                       |
| `dblclick`   | `Object` | 鼠标左键双击事件                       |
| `mousedown`  | `Object` | 鼠标在海量点图标按下时触发事件         |
| `mouseup`    | `Object` | 鼠标在海量点图标上按下后抬起时触发事件 |
| `mouseout`   | `Object` | 鼠标移出海量点图标时触发事件           |
| `touchstart` | `Object` | 触摸开始时触发事件，仅适用移动设备     |
| `touchend`   | `Object` | 触摸结束时触发事件，仅适用移动设备     |