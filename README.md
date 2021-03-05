## 项目功能

将高德地图组件用Vue进行封装，可以更便利的在Vue项目中使用AMap

# 运行测试项目

```
npm run example
```

# VuePress 编写组件示例文档
```
cd ./vuepress-vueamap
npm run docs:dev
```
使用 VuePress 搭建的 `vue-amap` 文档， 由于 VuePress 的浏览器限制(当在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染)。

当页面引入 `AMap`对象时会报错, 而某些封装好的地图组件确实需要用到 `AMap` 对象，为了避免 build 时错误，故部分示例效果展示用图片代替。

# 计划清单

**已完成：** 
1. 已有组件示例的文档书写

**待完成：**
1. 新增组件及已有组件功能拓展
2. 新增组件测试用例
3. 组件文档示例的更新与调整