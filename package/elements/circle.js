import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-circle',
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
    center: { type: [Object, Array], required: true },
    bubble: Boolean,
    cursor: String,
    radius: { type: Number, required: true },
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
    strokeDasharray: Array,
    isEditor: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    center(val) {
      this.target && this.target.setCenter(val);
    },
    circleOptions: {
      deep: true,
      immediate: false,
      handler(val) {
        this.target && this.target.setOptions(val);
      }
    }
  },
  computed: {
    circleOptions() {
      return {
        strokeColor: this.strokeColor || 'green',
        fillColor: this.fillColor,
        fillOpacity: this.fillOpacity,
        strokeStyle: this.strokeStyle,
        strokeWeight: this.strokeWeight,
      };
    }
  },
  created () {
    amapLoader.then(AMap => {
      if (this.fillOpacity){
        this.options['fillOpacity'] = parseFloat(this.fillOpacity);
      }
      if (this.strokeOpacity){
         this.options['strokeOpacity'] = parseFloat(this.strokeOpacity);
      }
      this.target = new AMap.Circle(this.options);
      if (this.isEditor) {
        // code
      }
    });
  },
 
};