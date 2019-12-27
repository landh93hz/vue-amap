<template>
  <div class="page">
    <div class="map-container">
      <amap-map 
        width="70vw"
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
      center:  [116.397428, 39.90923], // 初始化地图中心点
      zoom: 11,
      resizeEnable: true,
      map: null
    }
  },
  methods: {
    handleComplete(map) {
      this.map = map
      if (this.phase === 'load-map') {
        console.log('地图加载完成')
      }
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: row;

  .map-container {
    flex: 1;
    height: 100%;
  }

  .code-container {
    width: 300px;
  }
}
</style>