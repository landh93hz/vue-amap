import EventMixin from '../mixins/events'
import ElementMixin from '../mixins/element'
import AMap from 'AMap'
import Vue from 'vue'

export default Vue.extend({
  name: 'MapPolyline',
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
      ],
    }
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
        return ['solid', 'dashed'].indexOf(value) !== -1
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
    }
  },
  watch: {
    path(val) {
      this.target && this.target.setPath(val)
    }
  },
  created() {
    this.target = new AMap.Polyline(this.options)
  },
  render() {
    return this.$slots.default
  }
})