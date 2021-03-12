---
title: 海量点标记
---
# mass-marks 海量点标记
#### 基本用法

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