<template>
  <div class="page">
    <div class="map-container">
      <amap-map :mapStyle="mapStyle" v-if="customStyle === 'custom-style'"></amap-map>
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
      mapStyle: 'amap://styles/f7b0e9609b477edc562be623a767c834'
    }
  }
}
</script>