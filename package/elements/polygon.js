import ElementMixin from '../mixins/element';
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-polygon',
  mixins: [ElementMixin, EventMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    zIndex: Number,
    bubble: Boolean,
    cursor: String,
    strokeColor: String,
    strokeStyle: String,
    strokeWeight: Number,
    fillColor: String,
    fillOpacity: Number,
    draggable: Boolean,
    extData: [Number, String, Object],
    strokeDasharray: Array,
    path: { type: Array, required: true },
    isEditor: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    path(val) {
      this.target && this.target.setPath(val);
    },
    polygonOptions: {
      deep: true,
      immediate: false,
      handler(val) {
        this.target && this.target.setOptions(val);
      }
    }
  },
  computed: {
    polygonOptions() {
      return {
        strokeColor: this.strokeColor || 'green',
        fillColor: this.fillColor,
        fillOpacity: this.fillOpacity,
        strokeStyle: this.strokeStyle,
        strokeWeight: this.strokeWeight
      };
    }
  },
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
  created() {
    amapLoader.then(AMap => {
      this.target = new AMap.Polygon(this.options);
      if (this.isEditor) {
        if (AMap.version === '2.0') {
          this.$parent.createPolygonEditor && this.$parent.createPolygonEditor(this.target);
        } else {
          this.$parent.createPolyEditor && this.$parent.createPolyEditor(this.target);
        }
      }
    });
  },
  methods: {
    dragend() {
      this.target && this.draggable && this.$emit('update:path', this.target.getPath());
    }
  }
};
