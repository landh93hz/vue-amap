import Vue from 'vue'
import Loca from 'Loca'
import EventMixin from '../mixins/events'
import ElementMixin from '../mixins/element'

export default Vue.extend({
  name: 'LocaHeatMap',
  mixins: [EventMixin, ElementMixin],
  render() {
    return this.$slots.default
  },
  props: {
    value: { type: String, default: 'value' },
    dataType: String,
    eventSupport: Boolean,
    fitView: Boolean,
    zIndex: Number,
    lnglat: { type: [String, Function], default: 'lnglat' },
    radius: { type: Number, required: true },
    color: { type: Object, required: true },
    opacity: { type: Array, default: () => [0, 1] },
    points: { type: Array, required: true }
  },
  data() {
    return {
      target: null,
      options: {},
      events: []
    }
  },
  watch: {
    points(val) {
      if (this.target) {
        this.target.setData(val, this.dataOptions)
        this.target.setOptions({ style: this.styleOptions })
        this.target.render()
      }
    }
  },
  computed: {
    styleOptions() {
      let { radius, color, opacity } = this
      let options = {radius, color, opacity}
      return options
    },
    dataOptions() {
      let { lnglat, value, dataType: type } = this
      let options = { lnglat, value, type }
      return options
    }
  },
  methods: {
    delayedRender() {
      console.log(this.target)
      if (this.target.getMap()) {
        this.target.render()
      } else {
        setTimeout(this.delayedRender, 50)
      }
    }
  },
  created() {
    let layer = new Loca.HeatmapLayer({})
    layer.setData(this.points, this.dataOptions)
    layer.setOptions({ style: this.styleOptions })
    this.target = layer
  },
  mounted() {
    this.delayedRender()
  }
})
