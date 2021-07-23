import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { locaLoader } from '../util/apiloader';

export default {
  name: 'loca-hexagon',
  mixins: [EventMixin, ElementMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    zIndex: { type: Number, default: 10 },
    opacity: { type: Number, default: 1 },
    visible: { type: Boolean, default: true },
    zooms: { type: Array, default: () => [2, 20] },
    cullface: { type: String, default: 'back' },
    acceptLight: { type: Boolean, default: true },
    depth: { type: Boolean, default: true },
    shininess: { type: Number, default: 30 },
    hasSide: { type: Boolean, default: true },
    points: { required: true },

    /* 图层样式相关 */
    topColor: { type: String, default: '#ffffff' },
    sideColor: { type: String, default: '#ff0000' },
    altitude: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    radius: { type: Number, default: 1000 },
    gap: { type: Number, default: 0 },
    unit: { type: String, default: 'meter' }
  },
  data() {
    return {
      target: null,
      Loca: null,
      options: {},
      events: []
    };
  },
  watch: {
    points(val) {
      if (this.target && !this.isVersion2) {
        this.target.setData(val, this.dataOptions);
        this.target.setOptions({ style: this.styleOptions });
        this.target.render();
      } else if (this.target && this._loca) {
        const geoData = this.getGeoData();
        this.target.setSource(geoData, {
          value: (index, feature) => feature.properties[this.value],
          ...this.getStyleOption()
        });
        this._loca.add(this.target);
      }
    }
  },

  methods: {
    delayedRender() {
      // todo v1.4的版本待添加蜂窝热力图
      if (this.target && this._loca) {
        this.visible ? this.target.show() : this.target.hide();
      } else if (this.target && !this.isVersion2) {
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else {
        console.log(3);
        setTimeout(this.delayedRender, 50);
      }
    },
    /**
     * 用来构造 geojson 格式的数据
     * @returns {number}
     */

    getGeoData() {
      if (this.points.type) {
        const geo = new this.Loca.GeoJSONSource({ data: this.points });
        // geo.status = 'loaded';
        console.log('geo', geo);
        return geo;
      }
      // if (this.points.length === 0 && !this.Loca) return;
      // const options = {
      //   type: 'FeatureCollection',
      //   features: []
      // };
      // const { value } = this;
      // this.points.forEach(point => {
      //   const feature = {
      //     type: 'Feature',
      //     properties: {},
      //     geometry: {
      //       type: 'Point',
      //       coordinates: []
      //     }
      //   };
      //   const { longitude, latitude } = point;
      //   feature['properties'][value] = point[value];
      //   feature['geometry']['coordinates'] = [longitude, latitude];
      //   options['features'].push(feature);
      // });
      // return new this.Loca.GeoJSONSource({ data: options });
    },
    getStyleOption() {
      const { topColor, sideColor, altitude, height, radius, gap, unit } = this;
      return { topColor, sideColor, altitude, height, radius, gap, unit };
    },
    /**
     * 判断JSAPI的版本是不是2.0以上的
     * @returns {boolean}
     */
    judgeVersion() {
      const scriptArr = document.getElementsByTagName('script');
      const regexMap = /https:\/\/webapi.amap.com\/maps?/;
      const regexVersion = /v=2.0/;
      const scriptsMap = [...scriptArr]
        .map(item => item.outerHTML.match(regexMap))
        .filter(item => item && item.input);
      const mapScript = scriptsMap[0].input.search(regexVersion);
      return mapScript > 0;
    }
  },
  created() {
    this.isVersion2 = this.judgeVersion();
    locaLoader.then(Loca => {
      this.Loca = Loca;
      if (this.isVersion2) {
        const { zIndex, opacity, visible, zooms } = this;
        this.target = new Loca.HexagonLayer({
          zIndex,
          opacity,
          visible,
          zooms
        });
        const geoData = this.getGeoData();
        this.target.setSource(geoData);
        this.target.setStyle({
          value: (index, feature) => feature.properties[this.value],
          ...this.getStyleOption()
        });
      }
    });
  },
  mounted() {
    this.delayedRender();
  }
};
