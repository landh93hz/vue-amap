---
title: 基础
---

# 初始化
<font size=5>**Loca 数据可视化**</font>

 地图组件若想配套使用 **Loca 数据可视化**，则需要添加`enableLoca: true`属性

```javascript
import Vue from 'vue';
import AmapVue  from '@wintoo/vue-amap';

const options = {
  key: 'YOUR_KEY',
  v: '1.4.15',
  plugins: [],
  enableLoca: true,
};
Vue.use(AmapVue, options);
```

<font size=5>**版本注意事项**</font>

#### v1.3.x版本
`v1.3` 版本请使用 `1.4.13` 版本及以上的地图 `JSAPI`，目前 `Loca` 数据支持 `json、csv、tsv` 格式，通过 `setData(data, options)` 方法添加数据。

#### v2.0版本
`Loca API 2.0`版本可视化库是对`AMap JS API 2.0`版本的可视化功能封装，因此只适用于`JS API 2.0`版本的地图。<font color="#409EFF">新版本中数据源仅支持标准的 GeoJSON 格式数据。</font>
::: warning
注意：新版Loca API 2.0和Loca 1.3.x版本不兼容，它们是针对不同的JS API版本进行的封装。 因此如果您需要使用JS API 1.4.x，那么只能使用Loca API 1.3.x；如果您需要使用JS API 2.0，那么只能使用Loca API 2.0
:::