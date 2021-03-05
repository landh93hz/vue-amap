<template>
  <div class="page">
    <div class="map-container">
      <amap-map :center="{lng: 121.498586, lat: 31.239637}" @complete="map = $event">
        <div v-if="overlay === 'map-overlays'">
          <amap-marker 
            :position="position"
            v-if="checkedOverlays.includes('marker')">
          </amap-marker>
          <amap-polyeditor >
            <amap-polyline
              isEditor
              :path="path"
              v-if="checkedOverlays.includes('polyline')">
            </amap-polyline>
          </amap-polyeditor>
          <amap-polyeditor >
          <amap-polygon 
            :path="boundaries" 
            isEditor
            v-if="checkedOverlays.includes('polygon')">
          </amap-polygon>
          </amap-polyeditor>
          <amap-rectangle 
            :bounds="bounds"
            @click="xxxclick"
             v-if="checkedOverlays.includes('rectangle')" >
          </amap-rectangle>
        </div>
        <div v-if="overlay === 'map-layers'">
          <amap-satellite :visible="checkedLayers.includes('satellite')"></amap-satellite>
          <amap-roadnet :visible="checkedLayers.includes('roadnet')"></amap-roadnet>
          <amap-traffic :visible="checkedLayers.includes('traffic')"></amap-traffic>
        </div>
        <div v-if="overlay === 'function-control'">
          <!-- TODO: 控件的移除存在bug -->
          <amap-controlbar :visible="checkedControls.includes('controlbar')"></amap-controlbar>
          <amap-maptype :visible="checkedControls.includes('maptype')"></amap-maptype>
          <amap-overview :visible="checkedControls.includes('overview')"></amap-overview>
          <amap-scale :visible="checkedControls.includes('scale')"></amap-scale>
          <amap-toolbar :visible="checkedControls.includes('toolbar')"></amap-toolbar>
        </div>
      </amap-map>
      <div class="control-box" v-if="overlay === 'map-overlays'">
        <p>添加/删除覆盖物</p>
        <el-checkbox-group v-model="checkedOverlays" >
          <el-checkbox v-for="item in overlays" :key="item" :label="item">
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="control-box" v-if="overlay === 'map-layers'">
        <p>添加、删除图层</p>
        <el-checkbox-group v-model="checkedLayers">
          <el-checkbox 
            v-for="layer in layers" 
            :key="layer.title" 
            :label="layer.title">
            {{ layer.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="control-box" v-if="overlay === 'function-control'">
        <p>添加地图控件</p>
        <el-checkbox-group v-model="checkedControls">
          <el-checkbox v-for="control in controls" :key="control.title" :label="control.title">
            {{ control.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';

export default {
  props: {
    overlay: { type: String }
  },
  data() {
    return {
      map: undefined,
      marker: undefined,
      isEditor: false,
      editorObject: undefined,
      position: new AMap.LngLat(121.499358, 31.240171),
      bounds: new AMap.Bounds(new AMap.LngLat(121.460391, 31.270695), new AMap.LngLat(121.501247, 31.282432)),
      path: [
        new AMap.LngLat(121.535579, 31.250004), 
        new AMap.LngLat(121.520473, 31.247656),
        new AMap.LngLat(121.503135, 31.245748),        
        new AMap.LngLat(121.49438, 31.242666),
        new AMap.LngLat(121.494209, 31.234887)
      ],
      boundaries: [
        new AMap.LngLat(121.460391, 31.270695), 
        new AMap.LngLat(121.475154, 31.228282),
        new AMap.LngLat(121.49026, 31.21184),
        new AMap.LngLat(121.552917, 31.216098),
        new AMap.LngLat(121.583301, 31.241345),
        new AMap.LngLat(121.55841, 31.270841),
        new AMap.LngLat(121.501247, 31.282432),
      ],
      overlays: ['marker', 'polyline', 'polygon', 'circle', 'rectangle'],
      checkedOverlays: [],
      layers: [
        { title: 'satellite', label: '卫星图层' }, 
        { title: 'roadnet', label: '路网图层' },
        { title: 'traffic', label: '交通图层' }
      ],
      checkedLayers: [],
      controls: [
        { title: 'controlbar', label: '地图控件' },
        { title: 'maptype', label: '切换图层' },
        { title: 'overview', label: '鹰眼插件' },
        { title: 'scale', label: '比例尺' },
        { title: 'toolbar', label: '工具条插件' }
      ],
      checkedControls: []
    };
  },
  methods: {
    xxxclick() {
      console.log('xxx被点击了');
    }
  }
};
</script>

<style lang="scss" scoped>
.control-box {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
.el-checkbox-group {
  display: flex;
  flex-direction: column;

  .el-checkbox {
    margin: 4px 0;
  }
}
</style>