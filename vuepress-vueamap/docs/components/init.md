---
title: 初始化
---
# 初始化
<font size=5>**项目引入地图**</font>

一般项目中，可以按照如下方式在入口文件引入即可

NPM 安装：

```javascript
import Vue from 'vue';
import AmapVue  from 'amap';

const options = {
  key: 'YOUR_KEY',
  v: '2.0',
  plugins: []
};
Vue.use(AmapVue, options);
```