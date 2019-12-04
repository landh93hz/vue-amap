<template>
  <div>
    <amap-map width="300px" height="300px" :center="position" :mapId="1">
      <amap-marker :position="position"></amap-marker>
    </amap-map>
    <amap-map width="300px" height="300px" :mapId="3">
      
    </amap-map>
  </div>
</template>

<script>
import AMap from 'AMap'

export default {
  data() {
    return {
      position: new AMap.LngLat(120.127827,30.300206)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>