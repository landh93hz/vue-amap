---
title: 矢量图形的编辑
---
# AmapPolyeditor折线或者多边形图形编辑

::: demo 在要编辑的矢量图形外面包裹一层 `amap-polyeditor`，并给要编辑的矢量图形设置  `isEditor`值,默认为 `false`
```vue
<div class="map-container">
  <amap-map :center="{lng: 121.498586, lat: 31.239637}">
    <amap-polyeditor >
      <amap-polyline  :path="path" isEditor></amap-polyline>
    </amap-polyeditor >
  </amap-map>
</div>
<script>
export default {
    data(){
        return {
           path: [
            [121.535579, 31.250004], 
            [121.520473, 31.247656],
            [121.503135, 31.245748],        
            [121.49438, 31.242666],
            [121.494209, 31.234887]
          ],
        };
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
# AmapRectangleEditor 矩形编辑
 与折线的类似
::: demo 
```vue
<div class="map-container">
    <amap-map :center="{lng: 121.498586, lat: 31.239637}" :zoom=12>
        <amap-rectangle-editor >
            <amap-rectangle 
            :bounds="bounds"
            isEditor
             >
            </amap-rectangle>
        </amap-rectangle-editor>
    </amap-map>
</div>
<script>
export default {
  data(){
    return {
      bounds: [[121.460391, 31.270695], [121.501247, 31.282432]]
    };
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
