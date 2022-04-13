---
title: 基础
---
1. 在使用插件的时候，要在项目初始化的时，在 `options`中的 `plugins`里引入所需插件
::: warning 
使用插件之前一定要初始化，否则会报错！
:::

```javaScript
import AmapVue  from '@wintoo/vue-amap';
const options = {
  key: 'YOUR_KEY',
  v: '1.4.15',
  plugins: [
    'AMap.Scale',
    'MapType',
    'ToolBar',
    'ControlBar'
  ]
};
Vue.use(AmapVue, options);
```
2. 若是通过 `script`标签在 `.html`页面引入时，要使用封装好的插件，也要初始化
```html
<script src="https://webapi.amap.com/maps?v=1.4.15&key=你的Key&plugin=AMap.Geocoder,AMap.PlaceSearch,AMap.RoadInfoSearch,AMap.DistrictSearch,AMap.Autocomplete"></script> 
```

**小结**
无论是在哪里引入的地图对象，若想使用插件，则必须引入插件，否则会报错。