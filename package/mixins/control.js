import { amapLoader } from '../util/apiloader'

export default {
  props: {
    visible: { type: Boolean, default: true }
  },
  inject: ['getMap'],
  data() {
    return {
      target: null,
      options: null,
      key: ''
    }
  },
  watch: {
    visible(val) {
      if (this.target) {
        val ? this.showTarget() : this.hideTarget()
      }
    }
  },
  created() {
    !this.options && (this.options = {})
    const keys = Object.keys(this.$props)
    for (let key of keys) {
      if (key === 'visible') {
        continue
      }
      if (this.$props[key] !== undefined) {
        this.options[key] = this.$props[key]
      }
    }

    const name = this.key
    amapLoader.then(AMap => {
      const Ctor = AMap[name]
      if (!Ctor) throw new Error(`${name} is a plugin, you have to add it before invoked`)
      this.createTarget(Ctor)
    })
  },
  beforeMount() {
    this.getMap(this.mapGetter)
  },
  render() {
    return this.$slots.default
  },
  methods: {
    createTarget(Ctor) {
      this.target = new Ctor(this.options)
    },
    mapGetter(map) {
      setTimeout(() => {
        if (this.target) {
          map.addControl(this.target)
          this.visible || this.hideTarget()
        }
      }, 0)
    },
    removeControl(map) {
      map.removeControl(this.target)
    },
    showTarget() {
      // 部分控件的`show`,`hide`方法无法使用，因此通过`addControl`与`removeControl`
      // 的方法实现隐藏控件
      try {
        this.target.show()
      } catch(_) {
        this.getMap(map => map.addControl(this.target))
      }
    },
    hideTarget() {
      try {
        this.target.hide()
      } catch(_) {
        this.getMap(map => map.removeControl(this.target))
      }
    }
  },
  beforeDestroy() {
    this.getMap(this.removeControl)
    this.target = null
  }
}