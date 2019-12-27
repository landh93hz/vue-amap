<template>
  <div style="height: 100%;">
    <amap-map 
      width="70vw" 
      :resizeEnable="resizeEnable" 
      :center="center" 
      :lang="lang">
    </amap-map>
  </div>
</template>

<script>
export default {
  name: 'MapProperty',
  props: {
    property: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      resizeEnable: true,
      center: [121.498586, 31.239637],
      lang: 'en'
    }
  }
}
</script>