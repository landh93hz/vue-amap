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
    // labelMarker data
    data: {
      type: Array,
      require: true
    },
    // labelsLayer options
    zIndex: Number,
    opacity: Number,
    collision: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      AMap: null,
      options: {},
      target: null,
      markers: [],
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
    this.options.style = this.pointStyle;
    delete this.options.pointStyle;
    delete this.options.data;
    amapLoader.then(AMap => {
      this.AMap = AMap;
      this.target = new AMap.LabelsLayer(this.options);
      this.initLabelMarker(this.data);
      this.visible || this.target.hide();
    });
  },
  watch: {
    data(val) {
      this.target && this.initLabelMarker(val);
    }
  },
  methods: {
    initLabelMarker(data) {
      if (!data) return;
      this.target && this.target.clear();
      data.forEach(item => {
        if (!item.position) return;
        const labelMarker = new this.AMap.LabelMarker(item);
        // this.markers.push(labelMarker);
        this.target.add(labelMarker);
      });
    }
  },
  beforeDestroy() {
    this.target && this.target.clear();
  }
};
