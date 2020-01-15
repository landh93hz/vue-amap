<template>
  <div class="page">
    <div class="map-container">
      <amap-map @click="lnglat = $event.lnglat.toString()" @complete="map = $event"></amap-map>
      <div class="control-box" v-if="convert === 'map-container'">
        <p>请输入或点击地图获取经纬度(lng,lat)</p>
        <el-input v-model="lnglat">
          <template slot="prepend">
            经纬度
          </template>
        </el-input>
        <p>请输入容器像素坐标(x,y)</p>
        <el-input v-model="pixel">
          <template slot="prepend">
            容器坐标
          </template>
        </el-input>
        <div class="button-container">
          <el-button round @click="lnglatToContainer">
            经纬度->容器像素坐标
          </el-button>
          <el-button round @click="containerToLnglat">
            容器像素坐标->经纬度
          </el-button>
        </div>
      </div>
      <div class="control-box" v-if="convert === 'lnglat-pixel'">
        <p>请输入或点击地图获取经纬度(lng,lat)</p>
        <el-input v-model="lnglat">
          <template slot="prepend">
            经纬度
          </template>
        </el-input>
        <p>请输入容器像素坐标(x,y)</p>
        <el-input v-model="pixel">
          <template slot="prepend">
            平面坐标
          </template>
        </el-input>
        <div class="button-container">
          <el-button round @click="lnglatToPixel">
            经纬度->平面像素坐标
          </el-button>
          <el-button round @click="pixelToLnglat">
            平面像素坐标->经纬度
          </el-button>
        </div>
      </div>
      <div class="control-box" v-if="convert === 'lnglat-3d'">
        <p>请输入或点击地图获取经纬度(lng,lat)</p>
        <el-input v-model="lnglat">
          <template slot="prepend">
            经纬度
          </template>
        </el-input>
        <p>请输入三维坐标(x,y,z=0)</p>
        <el-input v-model="pixel">
          <template slot="prepend">
            容器坐标
          </template>
        </el-input>
        <div class="button-container">
          <el-button round @click="lnglatTo3D">
            经纬度->三维坐标
          </el-button>
          <el-button round @click="tdToLnglat">
            三维坐标->经纬度
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';

export default {
  props: {
    convert: String
  },
  data() {
    return {
      location: null,
      lnglat: '',
      pixel: '',
      map: null,
    };
  },
  methods: {
    lnglatToContainer() {
      let { lnglat } = this;
      if (this.map) {
        lnglat = lnglat.split(',').map(parseFloat);
        const location = new AMap.LngLat(...lnglat);
        const pixel = this.map.lngLatToContainer(location);
        const { x, y } = pixel;
        this.pixel = `${parseInt(x, 10)},${parseInt(y, 10)}`;
      }
    },
    containerToLnglat() {
      let { pixel } = this;
      if (this.map) {
        pixel = pixel.split(',').map(parseFloat);
        pixel = new AMap.Pixel(...pixel);
        this.lnglat = this.map.containerToLngLat(pixel).toString();
      }
    },
    lnglatToPixel() {
      if (!this.map) return;
      const zoom = this.map.getZoom();
      let { lnglat } = this;
      lnglat = lnglat.split(',').map(parseFloat);
      lnglat = new AMap.LngLat(...lnglat);
      const { x, y } = this.map.lnglatToPixel(lnglat, zoom);
      this.pixel = `${parseInt(x, 10)},${parseInt(y, 10)}`;

    },
    pixelToLnglat() {
      if (!this.map) return;
      const zoom = this.map.getZoom();
      let { pixel } = this;
      pixel = pixel.split(',').map(parseFloat);
      pixel = new AMap.Pixel(...pixel);
      this.lnglat = this.map.pixelToLngLat(pixel, zoom).toString();
    },
    lnglatTo3D() {
      if (!this.map) return;
      let { lnglat } = this;
      lnglat = lnglat.split(',').map(parseFloat);
      lnglat = new AMap.LngLat(...lnglat);
      const { x, y } = this.map.lngLatToGeodeticCoord(lnglat);
      this.pixel = `${parseInt(x, 10)},${parseInt(y, 10)}`;
    },
    tdToLnglat() {
      if (!this.map) return;
      let { pixel } = this;
      pixel = pixel.split(',').map(parseFloat);
      pixel = new AMap.Pixel(...pixel);
      this.lnglat = this.map.geodeticCoordToLngLat(pixel).toString();
    }
  }
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  .el-button {
    width: 240px;
    margin: 4px 0;
  }
}
</style>