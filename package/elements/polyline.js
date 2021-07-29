import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-polyline',
  mixins: [EventMixin, ElementMixin],
  data() {
    return {
      target: null,
      options: {},
      events: [
        'click',
        'dblclick',
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
    bubble: Boolean,
    cursor: String,
    geodesic: Boolean,
    isOutline: Boolean,
    outlineColor: String,
    strokeColor: String,
    strokeOpacity: String,
    strokeWeight: Number,
    strokeStyle: {
      type: String,
      default: 'solid',
      validator(value) {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    strokeDasharray: Array,
    lineJoin: String,
    lineCap: String,
    draggable: Boolean,
    showDir: Boolean,
    extData: Object,
    path: {
      type: Array,
      required: true
    },
    isEditor: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    path(val) {
      this.target && this.target.setPath(val);
    },
    polylineOptions: {
      deep: true,
      immediate: false,
      handler(val) {
        this.target && this.target.setOptions(val);
      }
    }
  },
  computed: {
    polylineOptions() {
      return {
        showDir: this.showDir || false,
        strokeColor: this.strokeColor || 'green',
        strokeOpacity: this.strokeOpacity || 1,
        strokeWeight: this.strokeWeight || 2,
        draggable: this.draggable || false,
        lineJoin: this.lineJoin || 'miter',
        lineCap: this.lineCap || 'butt',
        strokeDasharray: this.strokeDasharray || [],
        strokeStyle: this.strokeStyle || 'solid',
        isOutline: this.isOutline || false,
        borderWeight: this.borderWeight || 0
      };
    }
  },
  created() {
    amapLoader.then(AMap => {
      this.target = new AMap.Polyline(this.options);
      if (this.isEditor) {
        if (AMap.version === '2.0') {
          this.$parent.createPolylineEditor && this.$parent.createPolylineEditor(this.target);
        } else {
          this.$parent.createPolyEditor && this.$parent.createPolyEditor(this.target);
        }
      }
    });
  },
  render() {
    return this.$slots.default;
  }
};
