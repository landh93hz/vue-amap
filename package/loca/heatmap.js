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

    points: { type: [Array, Object], required: true },
    /* 图层样式相关 */
    radius: { type: Number, required: true },
    // value 热力点的值的key值
    value: { type: String, default: 'value' },
    gradient: { type: Object, required: true },
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
      events: ['setStyle']
    };
  },
  watch: {
    points() {
      if (this.target && this._loca) {
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
      if (this.target && this._loca) {
        this._loca.add(this.target);
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
      const { radius, unit, gradient, heightBezier, max, min } = this;
      return { radius, unit, gradient, heightBezier, max, min };
    }
  },
  created() {
    locaLoader.then(Loca => {
      this.Loca = Loca;
      this.target = new Loca.HeatMapLayer({});
      const geoData = this.getGeoData();
      this.target.setSource(geoData, {
        value: (index, feature) => feature.properties[this.value],
        ...this.getStyleOption()
      });
    });
  },
  mounted() {
    this.delayedRender();
  }
};
