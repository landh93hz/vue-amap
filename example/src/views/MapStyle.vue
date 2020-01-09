<template>
  <div class="page">
    <div class="map-container">
      <!-- 自定义地图 -->
      <amap-map :mapStyle="mapStyle" v-if="customStyle === 'custom-style'"></amap-map>
      <!-- 设定楼块样式 -->
      <amap-map
        v-if="customStyle === 'building-style'"
        :center="center"
        :features="['bg', 'point', 'road']"
        :viewMode="viewMode"
        :mapStyle="mapStyle"
        :zoom="zoom"
        :pitch="pitch"
        :showIndoorMap="showIndoorMap"
        :showLabel="showLabel">
        <!-- 地图控件 -->
        <amap-scale></amap-scale>
        <amap-tilelayer></amap-tilelayer>
        <!-- 建筑物图层 -->
        <amap-buildings :merge="false" :zIndex="130" :sort="false" @complete="loadBuildings"></amap-buildings>
        <amap-polygon
          :path="options.areas[0].path"
          :bubble="true"
          :strokeWeight="1"
          :fillOpacity="0.4">
        </amap-polygon>
        <amap-polygon
          :path="options.areas[1].path"
          :bubble="true"
          fillColor="green"
          :fillOpacity="0.2"
          :strokeWeight="1">
        </amap-polygon>
      </amap-map>
      <!-- 标准主题样式 -->
      <amap-map v-if="customStyle === 'theme-style'">
        <div class="control-box">
          <p>官方默认自定义样式</p>
          <el-radio-group v-model="checkedTheme">
            <el-radio v-for="theme in themes" :key="theme.label" :label="theme.label">
              <span class="title">{{ theme.title }}</span>
              <span class="value">{{ theme.label }}</span>
            </el-radio>
          </el-radio-group>
        </div>
      </amap-map>
      <!-- 地图显示要素 -->
      <amap-map v-if="customStyle === 'map-content'" :features="checkedFeatures">
        <div class="control-box" style="zIndex: 200">
          <p>设置地图显示要素</p>
          <el-checkbox-group v-model="checkedFeatures">
            <el-checkbox
              v-for="feature in features"
              :key="feature.label"
              :label="feature.label">
              {{ feature.title }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </amap-map>
      <!-- 隐藏文字标注 -->
      <amap-map v-if="customStyle === 'map-showlabel'" :showLabel="false"></amap-map>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: String
  },
  data() {
    return {
      mapStyle: 'amap://styles/f7b0e9609b477edc562be623a767c834',
      center: [116.472268, 39.995693],
      viewMode: '3D',
      zoom: 17,
      pitch: 50,
      showIndoorMap: false,
      showLabel: false,
      options: {
        // 是否隐藏设定区域外的楼块
        hideWithoutStyle: false,
        // 围栏1
        areas: [
          {
            visible: true,
            // 是否屏蔽自定义地图的纹理
            rejectTexture: true,
            // 楼顶颜色
            color1: 'ffffff00',
            // 楼面颜色
            color2: 'ffffcc00',
            path: [
              [116.473606, 39.995997],
              [116.473005, 39.995482],
              [116.472442, 39.994971],
              [116.472267, 39.994801],
              [116.471307, 39.995442],
              [116.471242, 39.995446],
              [116.471163, 39.995403],
              [116.4703, 39.994639],
              [116.469916, 39.994315],
              [116.469194, 39.993719],
              [116.469032, 39.993863],
              [116.468815, 39.994108],
              [116.468625, 39.994355],
              [116.468471, 39.99466],
              [116.468421, 39.994811],
              [116.468366, 39.995156],
              [116.468306, 39.996157],
              [116.468308, 39.996557],
              [116.468483, 39.996884],
              [116.468834, 39.997188],
              [116.469481, 39.997764],
              [116.470511, 39.998708],
              [116.471404, 39.999517],
              [116.471553, 39.999568],
              [116.471713, 39.999563],
              [116.471929, 39.999463],
              [116.473228, 39.998584],
              [116.474008, 39.998046],
              [116.474541, 39.997674],
              [116.474541, 39.997576],
              [116.474604, 39.997049],
              [116.474586, 39.996895],
              [116.474179, 39.996516],
              [116.473585, 39.995997],
              [116.473606, 39.995997]
            ]
          },
          // 围栏2
          {
            color1: 'ff99ff00',
            color2: 'ff999900',
            path: [
              [116.474609, 39.993478],
              [116.474489, 39.993495],
              [116.473693, 39.994009],
              [116.472898, 39.994546],
              [116.472837, 39.9946],
              [116.4728, 39.994653],
              [116.472779, 39.994745],
              [116.47282, 39.994815],
              [116.47491, 39.99655],
              [116.475041, 39.996607],
              [116.47525, 39.996643],
              [116.475715, 39.996686],
              [116.475947, 39.996688],
              [116.476103, 39.996658],
              [116.477228, 39.995932],
              [116.477261, 39.995833],
              [116.477264, 39.995729],
              [116.477205, 39.995625],
              [116.47642, 39.994899],
              [116.474854, 39.993558],
              [116.47469, 39.99348],
              [116.474609, 39.993478]
            ]
          }
        ]
      },
      features: [
        { label: 'bg', title: '区域面(bg)' },
        { label: 'road', title: '道路(road)' },
        { label: 'building', title: '建筑物(building)' },
        { label: 'point', title: '标注(point)' }
      ],
      checkedFeatures: [],
      themes: [
        { label: 'normal', title: '标准' },
        { label: 'dark', title: '幻影黑' },
        { label: 'light', title: '月光银' },
        { label: 'whitesmoke', title: '远山黛' },
        { label: 'fresh', title: '草色青' },
        { label: 'grey', title: '雅士灰' },
        { label: 'graffiti', title: '涂鸦' },
        { label: 'macaron', title: '马卡龙' },
        { label: 'blue', title: '靛青蓝' },
        { label: 'darkblue', title: '极夜蓝' },
        { label: 'wine', title: '酱籽' }
      ],
      checkedTheme: 'normal'
    };
  },
  methods: {
    loadBuildings(buildings) {
      buildings.setStyle(this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-checkbox-group {
  display: flex;
  flex-direction: column;

  .el-checkbox {
    margin: 4px 0;
  }
}
.el-radio-group {
  display: flex;
  flex-direction: column;

  .el-radio {
    margin: 4px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>