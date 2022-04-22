import { amapLoader } from '../util/apiloader';
import EventMixin from '../mixins/events';
import { getVersion } from '../util/loca.js';

export default {
  name: 'amap-label-marker',
  mixins: [EventMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    data: {
      type: Object,
      require: true
    },
    extData: {
      type: Object
    }
  },
  inject: ['getLabelsLayer'],
  data() {
    return {
      AMap: null,
      target: null,
      events: [
        'complete',
        'click',
        'mouseover',
        'mousemove',
        'mouseout',
        'mouseup',
        'mousedown',
        'touchstart',
        'touchend'
      ]
    };
  },
  created() {
    this.mapVersion = getVersion();
    amapLoader.then(AMap => {
      this.AMap = AMap;
      const { position, icon, text, zooms } = this.data;
      this.target = new this.AMap.LabelMarker({ position, icon, text, zooms });
      this.extData && this.target.setExtData(this.extData);
      // JSAPI 2.0 this.getLabelsLayer(this.layerGetter)执行后页面会特别卡
      // todo 2.0 labelMarker 优化
      if (this.mapVersion === 'v1') {
        this.getLabelsLayer(this.layerGetter);
      }
    });
  },
  methods: {
    layerGetter(layer) {
      layer.add(this.target);
      this.$once('hook:beforeDestroy', () => {
        this.target && layer.remove(this.target);
      });
    }
  }
};
