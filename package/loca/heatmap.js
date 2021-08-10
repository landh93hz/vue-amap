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
      if (!this.target) return;
      if (this.mapVersion === 'v2') {
        const geoData = getGeoData(this.Loca, val, this.value);
        this.target.setSource(geoData, this.getStyleOption());
        this.$parent.getLoca(loca => loca.add(this.target));
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
      const { lnglat, value, dataType: type } = this;
      return { lnglat, value, type };
    }
  },

  methods: {
    delayedRender() {
      if (this.target && this._loca) {
        // console.log('5.将图层添加到地图上');
        this.visible ? this.target.show() : this.target.hide();
      } else if (this.target && this.mapVersion === 'v1') {
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else {
        setTimeout(this.delayedRender, 50);
      }
    },
    getStyleOption() {
      const { radius, unit, color: gradient, heightBezier, max, min, height, value } = this;
      const fn = (index, feature) => feature.properties[value];
      return { radius, unit, gradient, heightBezier, max, min, height, value: fn };
    },
    initLayerV2(Loca) {
      setTimeout(() => {
        // console.log('3.创建可视化图层和数据源');
        const layer = new Loca.HeatMapLayer(this.options);
        const geoData = getGeoData(Loca, this.points, this.value);
        const styleOptions = this.getStyleOption();
        // console.log('4.为图层关联数据和样式');
        layer.setSource(geoData);
        layer.setStyle(styleOptions);
        this.target = layer;
      }, 50);
    },
    initLayerV1(Loca) {
      const layer = new Loca.HeatmapLayer({});
      layer.setData(this.points, this.dataOptions);
      layer.setOptions({ style: this.styleOptions });
      this.target = layer;
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
