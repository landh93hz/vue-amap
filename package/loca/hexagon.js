import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { locaLoader } from '../util/apiloader';
import { getVersion, getGeoData } from '../util/loca';

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
      if (!this.target) return;
      if (this.mapVersion === 'v2') {
        const geoData = getGeoData(this.Loca, val, this.value);
        this.target.setSource(geoData, this.getStyleOption());
        this._loca.add(this.target);
      } else if (this.mapVersion === 'v1') {
        this.target.setData(val, this.dataOptions);
        this.target.setOptions({ style: this.styleOptions });
        this.target.render();
      } else {
        throw new Error('Please checkout the map version');
      }
    }
  },

  methods: {
    delayedRender() {
      // todo v1.4的版本待添加蜂窝热力图
      if (this.target && this._loca) {
        this.visible ? this.target.show() : this.target.hide();
      } else if (this.target && this.mapVersion === 'v1') {
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else {
        setTimeout(this.delayedRender, 50);
      }
    },
    getStyleOption() {
      const { topColor, sideColor, altitude, height, radius, gap, unit, value } = this;
      const fn = (index, feature) => feature.properties[value];
      return { topColor, sideColor, altitude, height, radius, gap, unit, value: fn };
    }
  },
  created() {
    this.mapVersion = getVersion();
    locaLoader.then(Loca => {
      this.Loca = Loca;
      if (this.mapVersion === 'v2') {
        setTimeout(() => {
          const layer = new Loca.HexagonLayer(this.options);
          const geoData = getGeoData(Loca, this.points, this.value);
          const styleOptions = this.getStyleOption();
          layer.setSource(geoData);
          layer.setStyle(styleOptions);
          this.target = layer;
        }, 50);
      }
    });
  },
  mounted() {
    this.delayedRender();
  }
};
