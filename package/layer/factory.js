import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'
import Vue from 'vue'

function layerFactory(Ctor, name, props={}) {
  let baseProps = {
    zIndex: Number,
    opacity: Number,
    zooms: Array,
    detectRetina: Boolean
  }
  props = Object.assign({}, baseProps, props)
  return Vue.extend({
    name,
    props,
    mixins: [ElementMixin, EventMixin],
    render() {
      return this.$slots.default
    },
    data() {
      return {
        options: {},
        target: null
      }
    },
    created() {
      this.target = new Ctor(this.options)
      if (!this.visible) {
        this.target.hide()
      }
    },
  })
}

export default layerFactory