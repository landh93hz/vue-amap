import { amapLoader } from '../util/apiloader';

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
    };
  },
  watch: {
    visible(val) {
      if (this.target) {
        val ? this.showTarget() : this.hideTarget();
      }
    }
  },
  created() {
    !this.options && (this.options = {});
    const keys = Object.keys(this.$props);
    for (const key of keys) {
      if (key === 'visible') {
        continue;
      }
      if (this.$props[key] !== undefined) {
        this.options[key] = this.$props[key];
      }
    }

    let name = this.key;
    amapLoader.then(AMap => {
      const version = AMap.v || AMap.version;
      if (version === '2.0' && name === 'OverView') {
        name = 'HawkEye';
      }
      const Ctor = AMap[name];
      if (!Ctor) throw new Error(`${name} is a plugin, you have to add it before invoked`);
      this.createTarget(Ctor);
    });
  },
  beforeMount() {
    this.getMap(this.mapGetter);
  },
  render() {
    return this.$slots.default;
  },
  methods: {
    createTarget(Ctor) {
      this.target = new Ctor(this.options);
    },
    mapGetter(map) {
      setTimeout(() => {
        if (this.target) {
          map.addControl(this.target);
          this.visible || this.hideTarget();
        }
      }, 0);
    },
    addControl(map) {
      this.target && map.addControl(this.target);
    },
    removeControl(map) {
      /* eslint-disable */
      try {
        this.target && map && map.removeControl(this.target);
      } catch (_) {}
      /* eslint-enable */
    },
    showTarget() {
      // 部分控件没有`show`,`hide`方法，因此通过`addControl`与`removeControl`
      // 的方法实现显示与隐藏
      try {
        this.target.show();
      } catch (_) {
        this.getMap(this.addControl);
      }
    },
    hideTarget() {
      try {
        this.target.hide();
      } catch (_) {
        this.getMap(this.removeControl);
      }
    }
  },
  destroyed() {
    this.getMap(this.removeControl);
    this.target = null;
  }
};
