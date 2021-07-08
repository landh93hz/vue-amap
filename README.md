### 一、JSAPI 2.0
**JSAPI 2.0 与之前的不同点**

**开发体验：**

1. 提供 JSAPI Loader 加载器
2. 提供 `TypeScript`声明

**新特性：**
1. 移动端 3D 渲染开启
2. 支持标准 `GeoJSON`、`MultiPolygon`、`MultiPolyline`
3. `PolygonEditor`支持增、删、改，并且支持吸附功能
4. `moveAlong`、`moveTo`轨迹动画功能升级，更加符合车辆监控、轨迹回放等业务场景
5. `LabelMarker`海量数据绘制，支持相互避让、支持与主图标注避让
6. `MarkerCluster`支持按照权重聚合

**体验优化：**
1. 全面使用 WebGL 作为主要图层渲染技术
2. 地图视觉配色升级
3. 数据、服务、加载、前端渲染链路技术升级
4. 动画与交互体验优化
5. 覆盖物创建于渲染效率全面提升
6. 点聚合、热力图等功能计算与渲染效率全面提升
#### 1. Map
-  不同点
    - v2.0缩放级别`zooms` 的取值范围为 `[2,20]`, v1.4.x 的则为 `[3, 18](pc)`


#### 覆盖物
- 覆盖物`setMap`方法废弃,同时不再支持配置项里的`map`配置，请使用`map.add`方法进行添加
    - 2021/7/3 测试，覆盖物的 `setMap`方法还是可以正常工作


#### 矢量图形覆盖物编辑
在 v2.0版本中，所有的矢量图形的编辑工具与 v1.4.x 的相比，均可以传入一个包含当前编辑对象的的样式，
此外，在以前的方法上还新增了两个方法，分别为：设置编辑对象：` setTarget(overlay?)` ，获取当前编辑对象：`getTarget()`

- v2.0 `AMap.PolyEditor`拆分为`AMap.PolygonEditor`和`AMap.PolylineEditor`
- 2021/7/3 测试，`AMap.PolyEditor`对折线及多边形的编辑还是可以工作的，**后期可根据2.0来拆分成两个**
1.  `AMap.PolygonEditor`
- 支持传参`new AMap.PolygonEditor(map: Map, polygon: Polygon?, opts: Object?)`
- 参数`opts`在官网上还未见相关示例
- 新增吸附功能, 与老版相比，新增了六个方法
```javascript
    // 设置编辑对象  参数说明 tar(any)  overlay(Polygon)
    setTarget(tar, overlay)
    
    // 获取当前编辑对象   返回值：Polygon | undefined
    getTarget()

    //设置吸附多边形  参数说明 list ((Polygon | Array<Polygon>))
    setAdsorbPolygons(list)

    // 清空所有的吸附多边形
    clearAdsorbPolygons()
    
    // 添加吸附多边形
    addAdsorbPolygons(list)

    // 删除吸附多边形
    removeAdsorbPolygons(list)
```
2. `AMap.PolylineEditor`, 该功能与 v1.4.x的`AMap.PolyEditor`的用法及功能一样, 新增了两个方法
- 新增方法：设置编辑对象：` setTarget(overlay?)` ，获取当前编辑对象：`getTarget()`
- `new AMap.PolylineEditor(map: Map, polygon: Polygon?, opts: Object?)`
- 参数`opts`在官网上还未见相关示例,
```javascript
opts: {
  createOptions: {}; // 新创建的对象样式
  editOptions: {};  // 编辑样式
  controlPoint: {}; // 顶点样式 CircleMarkerOptions
  midControlPoint: {} // 中间点样式 CircleMarkerOptions
}
```

- 小 tip

  如何获取编辑后的覆盖物的路径，这里以多边形为例，获取方式如下
  ```vue
    <amap-polyeditor @complete="editor" @end="getPath">
      <amap-polygon :path="path" isEditor></amap-polygon>
    </amap-polyeditor>
  
    //
  <script>
  ...//some code
  methods: {
      getPath(e){
          const { target } = e;
          const path = target.getPath();  // path即为修改后的值
          console.log(path);
        }
  }
  </script>
  ```

#### 2. Marker
- 不同点
    - 2.0 的 `marker` 的 `position`值不再有默认值，需要赋初始值
    - 1.4 的版本若无初始值，则默认为地图的中心点





### 二、Loca 数据可视化 API 2.0
<font color=red>注意：新版Loca API 2.0和Loca 1.3.x版本不兼容。若使用JS API 1.4.x，那么只能使用Loca API 1.3.x；若要使用JS API 2.0，那么只能使用Loca API 2.0</font>
#### 1. 数据源标准化
- LOCA API 2.0版本中仅支持标准的<font color=red>`GeoJSON`</font>格式数据
- `GeoJSON` 是一种用于编码各种地理数据结构格式数据
- `GeoJSON`支持的几何类型有：`Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon`
- 更多细节可参考 [`GeoJSON`](https://datatracker.ietf.org/doc/html/rfc7946)

单个几何类型 **FeatureCollection**
```javascript
{
  "type": "FeatureCollection", // 根节点 固定写法
    "features": [  // features 要素集合
        {
          "type": "Feature", // 固定写法
          "geometry": {
            // type 可选值为 Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon
            "type": "Point",
            // coordinates 不同类型的几何类型对应不同格式的数据，这里为Point对应的数据（一个一维的数组，分别为经度和纬度）
            "coordinates": [125.6, 10.1]  
          },
          // properties里面可以封装各种属性，例如名称、标识颜色等等
          "properties": { 
            "name": "Dinagat Islands",
            "color": "red"
          }
        }
  ]
}

```

多种几何类型集合 **GeometryCollection**
```javascript
{
    "type": "GeometryCollection",
    "geometries": [
        {
         "type": "Point",
          "coordinates": [116.368904, 39.913423]
         }, {
         "type": "LineString",
          "coordinates": [
            [116.368904, 39.913423],
            [116.382122, 39.901176],
            [116.387271, 39.912501],
            [116.398258, 39.904600]
         }]
}
```

#### 2. 实例创建
在 2.0 版本中，创建实例的方式改变了，具体步骤为：

- 第一步：同时创建地图及Loca实例
```javascript
let map = new AMap.Map('mapContainer', {
  center: [80.601, 40.32],
  zoom: 12,
  vieMode: '3D' // 地图设置成 3D 模式，否则图层会失去高度信息 
})
let loca = new Loca.Contanier({map:map})
```
- 第二步： 创建可视化图层和数据源
  这里以基本热力图为例
```javascript
    // 创建可视化图层
    let heatMapLayer = new Loca.HeatMapLayer({
        zIndex: 10,
        opacity: 1,
        visible: true,
        zooms: [2, 22],
    });
    // 创建数据源
    var dataSource = new Loca.GeoJSONSource({
      // url: 'xxx.geojson', 或者使用 data 字段
      data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                116.40014,
                39.909736
              ]
            }
          }
        ]
      },
    });
```
- 第三步：为图层关联数据和样式，并将图层添加到地图上
```javascript
   // 图层添加数据
  heatMapLayer.setSource(dataSource);
    
   // 设置样式
  heatMapLayer.setStyle({
      radius: 30,
      color: 'red',
      borderWidth: 10,
      borderColor: '#fff',
      unit: 'px',
    })
    
    // 添加到地图上
    loca.add(heatMapLayer);
```

#### 3. 封装成组件的使用方法

其中： `value, points, radius, gradient`为必填值
```vue
<amap-map>
  <loca-heatmap
    :value="score"  
    :points="points"
    :radius="radius"
    :gradient="gradient">
  </loca-heatmap>
  <script>
    export default {
      data(){
        return {
          value: 'score',
          radius: 10,
          points: [],
          gradient: {
            0.1: '#2A85B8',
            0.2: '#16B0A9',
            0.3: '#29CF6F',
            0.4: '#5CE182',
            0.5: '#7DF675',
            0.6: '#FFF100',
            0.7: '#FAA53F',
            1: '#b5450a',
          },
        }
    }
  }
  </script>
  
</amap-map>
```



