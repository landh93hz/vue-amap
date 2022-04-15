---
title:  AMap 对象获取
---
# 异步加载
当想要使用 AMap 对象时，我们为您提供了异步加载的方式， 在要使用 AMap 对象的组件中按以下方式引入，我们提供了 `amapLoader` 这个 `Promise` 对象，通过异步回调的方式得到 AMap 对象

**全局引入**

您可以在入口文件中全局引入，并将其绑定到 vue 上
::: warning
由于 AMap 是基于 Promise 异步引入的，因此，如果你在**第一时间内**访问 this.$AMap 获取 AMap 对象时，可能为 undefined 。
此时，需要适当的调整你代码执行的时机，例如将要执行的代码放入 `$nexTick` 中
:::
main.js
```javascript
import { amapLoader } from 'amap'
import Vue from 'vue'
amapLoader.then( AMap => Vue.prototype.$AMap = AMap)
```
要引入的组件
```vue
<script>
export default {
  mounted(){
      this.$nextTick(()=>{
        console.log(this.$AMap)
        // code 
      });
  }
}
</script>
```
**局部引入**

您也可以在单独的组件中引入，示例如下

``` vue
<script>
import { amapLoader } from 'amap'
export default {
  mounted(){
    amapLoader.then(AMap => {
      // code
      console.log(AMap)
    })
  }
}
</script>
```

# 同步加载
若 `public/index.html` 中同步加载 `<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值""></script>`，可直接在组件直接使用 `AMap`对象。
``` vue
<script>
export default {
  mounted(){
    var map = new AMap.Map('container', {
        zoom: 4,
        center: [102.342785, 35.312316]
    });
  }
}
</script>
```
