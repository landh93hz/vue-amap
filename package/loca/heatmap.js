import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { locaLoader } from '../util/apiloader';

export default {
  name: 'loca-heatmap',
  mixins: [EventMixin, ElementMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    zIndex: { type: Number, default: 10 },
    opacity: { type: Number, default: 1 },
    visible: { type: Boolean, default: true },
    zooms: { type: Array, default: () => [2, 20] },
    lnglat: { type: [String, Function], default: 'lnglat' },
    dataType: String,

    points: { required: true },
    /* 图层样式相关 */
    radius: { type: Number, required: true },
    // value 热力点的值的key值
    value: { type: String, default: 'value' },
    color: { type: Object, required: true },
    height: { type: Number, default: 100 },
    heightBezier: { type: Array, default: () => [0.4, 0.2, 0.4, 0.8] },
    max: { type: Number, default: null },
    min: { type: Number, default: null },
    unit: { type: String, default: 'px' }
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
  computed: {
    styleOptions() {
      const { radius, color, opacity } = this;
      return { radius, color, opacity };
    },
    dataOptions() {
      const { lnglat, value, dataType: type } = this;
      return { lnglat, value, type };
    }
  },

  methods: {
    delayedRender() {
      if (this.target && this._loca) {
        this._loca.add(this.target);
        this.visible ? this.target.show() : this.target.hide();
      } else if (this.target && !this.isVersion2) {
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else {
        setTimeout(this.delayedRender, 50);
      }
    },
    /**
     * 用来构造 geojson 格式的数据
     * @returns {{features: [], type: string}}
     */

    getGeoData() {
      if (this.points.length === 0 && !this.Loca) return;
      const options = {
        type: 'FeatureCollection',
        features: []
      };
      const { value } = this;
      this.points.forEach(point => {
        const feature = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: []
          }
        };
        const { longitude, latitude } = point;
        feature['properties'][value] = point[value];
        feature['geometry']['coordinates'] = [longitude, latitude];
        options['features'].push(feature);
      });
      return new this.Loca.GeoJSONSource({ data: options });
    },
    getStyleOption() {
      const { radius, unit, color: gradient, heightBezier, max, min } = this;
      return { radius, unit, gradient, heightBezier, max, min };
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
        this.target = new Loca.HeatMapLayer({
          zIndex,
          opacity,
          visible,
          zooms
        });
        const geoData = this.getGeoData();
        this.target.setSource(geoData, {
          value: (index, feature) => feature.properties[this.value],
          ...this.getStyleOption()
        });
      } else {
        const layer = new Loca.HeatmapLayer({});
        layer.setData(this.points, this.dataOptions);
        layer.setOptions({ style: this.styleOptions });
        this.target = layer;
      }
    });
  },
  mounted() {
    this.delayedRender();
  }
};
