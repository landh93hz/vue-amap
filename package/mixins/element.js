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
      _loca: null,
      _map: null
    };
  },
  watch: {
    // 通过控制visibile属性改变target的是否可见
    visible(val) {
      if (this.target) {
        val ? this.target.show() : this.target.hide();
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
  },
  beforeMount() {
    this.getMap(this.mapGetter);
  },
  beforeDestroy() {
    if (this.target.CLASS_NAME === 'HeatMap') {
      this.target && this.target.remove();
    } else {
      this.target && this._map.remove(this.target);
    }
    this.target = null;
    this.$emit('destroy');
  },
  methods: {
    mapGetter(map) {
      this._map = map;
      setTimeout(() => {
        if (this.target) {
          if (!this.visible) this.target.hide();
          if (this.target.CLASS_NAME === 'AMAp.InfoWindow') return;
          if (this.target.CLASS_NAME === 'HeatMap') {
            this._loca = new this.Loca.Container({ map });
            this._loca.add(this.target);
          }
          map.add(this.target);
        }
      }, 0);
    }
  }
};
