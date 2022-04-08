import { amapLoader } from '../util/apiloader';
import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';

export default {
  name: 'amap-label-marker',
  mixins: [ElementMixin, EventMixin],
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
    amapLoader.then(AMap => {
      this.AMap = AMap;
      const { position, icon, text, zooms } = this.data;
      this.target = new this.AMap.LabelMarker({ position, icon, text, zooms });
      this.extData && this.target.setExtData(this.extData);
      this.getLabelsLayer(this.layerGetter);
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
