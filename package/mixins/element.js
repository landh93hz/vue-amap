
export default {
  props: {
    visible: {
      type: [Boolean, Function],
      default: true
    }
  },
  inject: ['getMap'],
  data() {
    return {
      target: null,
      options: null,
    }
  },
  watch: {
    // 通过控制visibile属性改变target的是否可见
    visible(val) {
      if (this.target) {
        val ? this.target.show() : this.target.hide()
      }
    }
  },
  created() {
    !this.options && (this.options = {})
    let keys = Object.keys(this.$props)
    for (let key of keys) {
      if (key === 'visible') {
        continue
      }
      if (this.$props[key] !== undefined) {
        this.options[key] = this.$props[key]
      }
    }
  },
  beforeMount() {
    this.getMap(this.mapGetter)
  },
  beforeDestroy() {
    this.target && this.target.setMap(null)
    this.target = null
  },
  methods: {
    mapGetter(map) {
      if (this.target && this.target.setMap) {
        if (!this.visible) this.target.hide()
        // if (this.target instanceof AMap.InfoWindow) return
        this.target.setMap(map)
      }
    }
  },
}