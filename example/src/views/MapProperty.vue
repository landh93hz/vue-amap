<template>
  <div class="page" >
    <div class="map-container">
      <amap-map 
        :resizeEnable="resizeEnable" 
        :center.sync="center"
        :zoom.sync="zoom" 
        :lang="lang">
      </amap-map>
      <div class="lang-selector" v-if="property === 'map-lang'">
        <p>底图语言切换</p>
        <el-radio-group v-model="lang">
          <el-radio v-for="language in languages" :key="language.lang" :label="language.lang">
            {{ language.desc }}
          </el-radio>
        </el-radio-group>
      </div>
      <div class="center-zoom" v-if="property === 'center-zoom'">
        <p>当前中心点:{{center.lng}} {{center.lat}}</p>
        <p>缩放级别:{{zoom}} </p>
      </div>
    </div>
    <div class="code-container">
    
    </div>  
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
      zoom: 13,
      center: {lng: 121.498586, lat: 31.239637},
      lang: 'en',
      languages: [
        { lang: 'en', desc: '英文底图' },
        { lang: 'zh_en', desc: '中英文对照' },
        { lang: 'zh_cn', desc: '中文底图' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-selector {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  width: 140px;

  p {
    margin: 4px 0;
    font-size: 14px;
  }
}
.center-zoom {
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px 20px;
}
.el-radio-group {
  display: flex;
  flex-direction: column;

  .el-radio {
    margin: 14px 0;
  }
}
</style>