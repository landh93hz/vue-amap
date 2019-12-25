<template>
  <div>
    <div style="width: 100%; height: 100%">
      <amap-map 
        :center="center" 
        :zoom="zoom" 
        :resizeEnable="resizeEnable" 
        @complete="handleComplete">
      </amap-map>
    </div>
    
    <div>
      {{ phase }}
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
    this.map && this.map.destroy()
    console.log('销毁地图')
  }
}
</script>