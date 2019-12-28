<template>
  <div class="page" >
    <div class="map-container">
      <amap-map 
        :resizeEnable="resizeEnable" 
        :center.sync="center"
        :zoom.sync="zoom"
        :city="cityInfo.city"
        :lang="lang"
        :bounds.sync="bounds"
        :limitBounds="limitBounds"
        @getCity="cityInfo = $event">
      </amap-map>
      <div class="property-box" v-if="property === 'map-lang'">
        <p>底图语言切换</p>
        <el-radio-group v-model="lang">
          <el-radio v-for="language in languages" :key="language.lang" :label="language.lang">
            {{ language.desc }}
          </el-radio>
        </el-radio-group>
      </div>
      <div class="property-box" v-if="property === 'center-zoom'">
        <div>
          当前中心点
          <input  type="text" :value="center.lng">
          <input  type="text" :value="center.lat">
        </div>
        <div>
          缩放级别
          <input  type="number" :value="zoom">
        </div>
        <el-button type="primary" size="mini">
          设置
        </el-button>
      </div>
      <div class="property-box" v-if="property === 'district'">
        <p>当前所在行政区信息</p>
        <table>
          <tr>
            <td>省份</td>
            <td>{{ cityInfo.province }}</td>
          </tr>
          <tr>
            <td>城市</td>
            <td>{{ cityInfo.city }}</td>
          </tr>
          <tr>
            <td>区号</td>
            <td>{{ cityInfo.citycode }}</td>
          </tr>
          <tr>
            <td>辖区</td>
            <td>{{ cityInfo.district }}</td>
          </tr>
        </table>
        <div style="display: flex;">
          <el-input placeholder="北京" v-model="cityName"></el-input>
          <el-button type="primary" :round="true" @click="cityInfo.city = cityName">设置</el-button>
        </div>
      </div>
      <div class="property-box" v-if="property === 'map-bounds'">
        <p>
          当前地图显示范围(Bounds):
        </p>
        <div style="margin: 4px 0;">
          NorthEast: <span>{{ bounds ? bounds.getNorthEast().toString() : '' }}</span>
        </div>
        <div style="margin: 4px 0;">
          SouthWest: <span>{{ bounds ? bounds.getSouthWest().toString() : '' }}</span>
        </div>
        <el-button type="primary" :round="true" size="mini" @click="limitBounds = !limitBounds">
          {{ limitBounds ? '取消限制' : '限制显示范围' }}
        </el-button>
      </div>
      <div class="property-box" v-if="property === 'map-moving'">
        
      </div>
      <div class="property-box" v-if="property === 'map-status'">

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
      ],
      cityName: '',
      cityInfo: {
        province: '',
        city: '',
        citycode: 0,
        district: ''
      },
      bounds: undefined,
      limitBounds: false
    }
  },
  watch: {
    property(val, old) {
      switch(old) {
        case 'map-bounds': {
          this.limitBounds = false
        }
      }
    }
  },
  methods: {
    setZoomCenter() {

    }
  }
}
</script>

<style lang="scss" scoped>
.property-box {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 12px;
  padding: 16px 20px;

  p {
    margin: 4px 0;
    font-size: 14px;
  }

  .el-radio-group {
    display: flex;
    flex-direction: column;

    .el-radio {
      margin: 14px 0;
    }
  }

  .el-input {
    margin: 0 4px;
  }

  table {
    width: 60%;
    margin: 10px 0;

    td {
      width: 50%;
      text-align: center;
    }
  }  
}
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
.district {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 12px;
  padding: 14px 20px;
  width: 360px;

  p {
    margin: 4px 0;
  }

  .el-input {
    margin: 0 4px;
  }

  table {
    width: 60%;
    margin: 10px 0;
    td {
      text-align: center;
      width: 50%;
    }
  }
}
</style>