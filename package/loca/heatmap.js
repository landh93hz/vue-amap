import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { locaLoader } from '../util/apiloader';
import { getVersion, getGeoData } from '../util/loca';

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
    type: String,

    points: { type: [Object, Array], required: true },
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
      events: [],
      mapVersion: ''
    };
  },
  watch: {
    points(val) {
      if (!this.target) return;
      if (this.mapVersion === 'v2') {
        const geoData = getGeoData(this.Loca, val, this.value);
        this.target.setSource(geoData, this.getStyleOption());
      } else if (this.mapVersion === 'v1') {
        this.target.setData(val, this.dataOptions);
        this.target.setOptions({ style: this.styleOptions });
        this.target.render();
      } else {
        throw new Error('Please checkout the map version');
      }
    }
  },
  computed: {
    styleOptions() {
      const { radius, color, opacity } = this;
      return { radius, color, opacity };
    },
    dataOptions() {
      const { lnglat, value, type } = this;
      return { lnglat, value, type };
    }
  },

  methods: {
    delayedRender() {
      if (this.target && this.mapVersion === 'v2') {
        this.visible ? this.target.show() : this.target.hide();
      } else if (this.target && this.mapVersion === 'v1') {
        if (!this.target.getMap()) {
          this.getMap(this.mapGetter);
        }
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else if (!this.target) {
        setTimeout(this.delayedRender, 50);
      }
    },
    getStyleOption() {
      const { radius, unit, color: gradient, heightBezier, max, min, height, value } = this;
      const fn = (index, feature) => feature.properties[value];
      return { radius, unit, gradient, heightBezier, max, min, height, value: fn };
    },
    initLayerV2(Loca) {
      const layer = new Loca.HeatMapLayer(this.options);
      if (!this.points) return;
      const geoData = getGeoData(Loca, this.points, this.value);
      const styleOptions = this.getStyleOption();
      layer.setSource(geoData);
      layer.setStyle(styleOptions);
      this.target = layer;
      this.$parent.getLocaLayer && this.$parent.getLocaLayer(this.locaLayerGetter);
      // this.getLocaLayer(this.locaLayerGetter);
    },
    initLayerV1(Loca) {
      const layer = new Loca.HeatmapLayer({});
      layer.setData(this.points, this.dataOptions);
      layer.setOptions({ style: this.styleOptions });
      this.target = layer;
    },
    locaLayerGetter(locaLayer) {
      locaLayer.add(this.target);
      this.$once('hook:beforeDestroy', () => {
        this.target && locaLayer.remove(this.target);
      });
    },
    mapGetter(map) {
      if (!this.target) return;
      this.target.setMap && this.target.setMap(map);
    }
  },
  created() {
    this.mapVersion = getVersion();
    locaLoader.then(Loca => {
      this.Loca = Loca;
      if (this.mapVersion === 'v2') {
        this.initLayerV2(Loca);
      } else {
        this.initLayerV1(Loca);
      }
    });
  },
  mounted() {
    this.delayedRender();
  }
};
