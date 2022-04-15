---
title: 快速上手
---
# 快速上手
本节将介绍如何在项目中使用 VueAmap。

<font size=5>**同步方式引入高德地图 JS API +  VueAmap 组件引入**</font>

**1. 顺序同步加载 JS API 脚本**

在 `public/index.html` 中写入以下内容 `<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值""></script>`

[请参考高德地图 JS API 顺序同步加载](https://lbs.amap.com/api/javascript-api/guide/abc/load)，示例如下：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  <script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值""></script>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
  </body>
</html>
```
**2. 在`main.js` 中引入 `VueAmap`**

在 main.js 中写入以下内容

```javascript
import Vue from 'vue';
import AmapVue  from '@wintoo/vue-amap';
Vue.use(AmapVue);
```
以上代码便完成了 `VueAmap` 的引入。

**3. 开始使用**

至此， 一个基于 `Vue` 和 `VueAmap` 的开发环境就已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档

<font size=5>**异步方式引入高德地图 JS API +  VueAmap 组件引入**</font>

在 main.js 中写入以下内容

```javascript
import Vue from 'vue';
import AmapVue  from '@wintoo/vue-amap';
const options = {
  key: '您申请的key值',
  v: '1.4.15',
};
Vue.use(AmapVue, options);
```
以上代码便完成了高德地图 `JS API` 异步引入及 `VueAmap` 组件引入

**开始使用**

至此， 一个基于 `Vue` 和 `VueAmap` 的开发环境就已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档