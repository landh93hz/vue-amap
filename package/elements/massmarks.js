
import { amapLoader } from '../util/apiloader'
import EventMixin from '../mixins/events'
import ElementMixin from '../mixins/element'

export default {
  name: 'amap-massmarks',
  mixins: [ElementMixin, EventMixin],
  render() {
    return this.$slots.default
  },
  props: {
    zIndex: Number,
    opacity: Number,
    cursor: String,
    zooms: Array,
    alwaysRender: { type: Boolean, default: true },
    data: { required: true, type: Array },
    bubble: Boolean,
    pointStyle: {
      type: [Object, Array, Function],
      required: true
    }
  },  
  data() {
    return {
      options: {},
      target: null,
      events: [
        'complete',
        'click',
        'dblclick',
        'mouseout',
        'mouseup',
        'mousedown',
        'touchstart',
        'touchend'
      ]
    }
  },
  created() {
    this.options.style = this.pointStyle
    delete this.options.pointStyle
    delete this.options.data
    amapLoader.then(AMap => {
      this.target = new AMap.MassMarks(this.data, this.options)
      this.visible || this.target.hide()
    })
  },
  watch: {
    data(val) {
      this.target && this.target.setData(val)
    }
  }
}
