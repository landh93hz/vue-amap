import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-rectangle',
  mixins: [ElementMixin, EventMixin],
  render() {
    return this.$slots.default;
  },
  data(){
    return {
      target: null,
      options: {},
      events: [
        'click',
        'dbclick',
        'rightclick',
        'hide',
        'show',
        'mousedown',
        'mouseup',
        'mouseover',
        'mouseout',
        'change',
        'touchstart',
        'touchmove',
        'touchend'
      ]
    };
  },
  props: {
    zIndex: Number,
    bounds: Object,
    bubble: Boolean,
    cursor: String,
    strokeColor: String,
    strokeOpacity: String,
    strokeWeight: Number,
    fillColor: String,
    fillOpacity: String,
    strokeStyle: {
      type: String,
      default: 'solid',
      validator(value) {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    extData: Object,
    strokeDasharray: Array
  },
  watch: {
    bounds(val) {
      this.target && this.target.setBounds(val);
    },
    rectangleOptions: {
      deep: true,
      immediate: false,
      handler(val) {
        this.target && this.target.setOptions(val);
      }
    }
  },
  computed: {
    rectangleOptions() {
      return {
        strokeColor: this.strokeColor || 'green',
        strokeOpacity: this.strokeOpacity || 1,
        strokeWeight: this.strokeWeight || 2,
        strokeDasharray: this.strokeDasharray || [],
        strokeStyle: this.strokeStyle || 'solid',
      };
    }
  },
  created () {
    amapLoader.then(AMap => {
      this.target = new AMap.Rectangle(this.options);
    });
  },
 
};