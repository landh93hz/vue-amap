import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'

// 如何异步的获取Ctor，同时不影响component的创建？

/**
 * 地图图层工厂函数, `Ctor`可以是一个构造函数或Promise实例，
 * 如果`Ctor`是一个Promise实例，则其resolve值应是一个构造函数
 * @param {Function | Promise<Function>} Ctor 
 * @param {String} name 
 * @param {Object} props 
 */
function layerFactory(Ctor, name, props={}) {
  let baseProps = {
    zIndex: Number,
    opacity: Number,
    zooms: Array,
    detectRetina: Boolean
  }
  props = {...baseProps, ...props}
  return {
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
      if (Ctor instanceof Promise || Ctor.then) {
        Ctor.then(ctor => {
          this.createTarget(ctor)
        })
      }
      else if (typeof Ctor === 'function') {
        this.createTarget(Ctor)
      }
    },
    methods: {
      createTarget(Func) {
        if (typeof Func !== 'function') {
          throw new TypeError(`Ctor must be a constructor or Promise instance of constructor`)
        }
        this.target = new Func(this.options)
        !this.visible && this.target.hide()
      }
    }
  }
}

export default layerFactory