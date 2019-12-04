import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'
import AMap from 'AMap'
import Vue from 'vue'

export default Vue.extend({
  name: 'MapPolygon',
  mixins: [ElementMixin, EventMixin],
  render() {
    return this.$slots.default
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
    path: { type: Array, required: true }
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
    }
  },
  created() {
    this.target = new AMap.Polygon(this.options)
  },
  methods: {
    dragend() {
      this.target && this.draggable && this.$emit('update:path', this.target.getPath())
    }
  }
})
