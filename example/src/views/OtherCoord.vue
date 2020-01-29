<template>
  <div class="page">
    <div class="map-container">
      <amap-map 
        :center="[119.967322, 30.26998]"
        @click="clickMap">
        <amap-marker :position="aiTown">
          <div slot="label">人工智能小镇</div>
        </amap-marker>
        <amap-marker :position="dreamTown">
          <div slot="label">梦想小镇</div>
        </amap-marker>
      </amap-map>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
export default {
  props: {
    coord: String
  },
  data() {
    return {
      lnglat: '',
      aiTown: new AMap.LngLat(119.965841, 30.270568),
      dreamTown: new AMap.LngLat(119.988136, 30.28971)
    };
  },
  methods: {
    clickMap(event) {
      console.log(event.lnglat);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>