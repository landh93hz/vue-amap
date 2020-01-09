<template>
  <div class="page">
    <div class="map-container">
      <amap-map
        :center="center" 
        :zoom="zoom" 
        :resizeEnable="resizeEnable" 
        @complete="handleComplete">
      </amap-map>
    </div>
    <div class="code-container">

    </div>
  </div>
</template>

<script>

export default {
  props: {
    phase: {
      type: String,
      default: 'create'
    }
  },
  data() {
    return {
      // 初始化地图中心点
      center: [116.397428, 39.90923],
      zoom: 11,
      resizeEnable: true,
      map: null
    };
  },
  methods: {
    handleComplete(map) {
      this.map = map;
      if (this.phase === 'load-map') {
        console.log('地图加载完成');
      }
    }
  },
  beforeDestroy() {

  }
};
</script>