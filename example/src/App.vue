<template>
  <div>
    <amap-map width="800px" height="500px" :center="position">
      <amap-marker :position="position" labelDirection="top">
        <div slot="label">
          {{ content }}
        </div>
      </amap-marker>
    </amap-map>
  </div>
</template>

<script>
import AMap from 'AMap'

export default {
  data() {
    return {
      position: new AMap.LngLat(120.127827,30.300206),
      content: 'this is the content in marker'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>