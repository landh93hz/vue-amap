---
title: Loca 
---
# 初始化
<font size=5>**项目引入地图**</font>

 地图组件若想配套使用 **Loca 数据可视化**，则需要添加`enableLoca: true`属性

```javascript
import Vue from 'vue';
import AmapVue  from 'amap';

const options = {
  key: 'YOUR_KEY',
  v: '2.0',
  plugins: [],
  enableLoca: true,
};
Vue.use(AmapVue, options);
```