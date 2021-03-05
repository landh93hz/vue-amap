---
title: 基础
---
在使用插件的时候，要在项目初始化的时，在 `options`中的 `plugins`里引入所需插件
::: warning 
使用插件之前一定要初始化，否则会报错！
:::

```javaScript
import AmapVue from 'amap';
const options = {
  key: '0b8eff7c3cebc996161cf56812c23528',
  v: '1.4.15',
  plugins: [
    'AMap.Scale',
    'OverView',
    'MapType',
    'ToolBar',
    'ControlBar'
  ]
};
Vue.use(AmapVue, options);
```
