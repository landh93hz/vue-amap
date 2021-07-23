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
      _map: null,
      locas: ['HeatMap', 'Hexagon']
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
    this.target && this._map.remove(this.target);
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
          if (
            this.locas.includes(this.target.CLASS_NAME) &&
            this.mapVersion === 'v2'
          ) {
            this._loca = new this.Loca.Container({ map });
            this._loca.add(this.target);
            return;
          }
          map.add(this.target);
        } else {
          setTimeout(() => this.getMap(this.mapGetter));
        }
      }, 0);
    }
  }
};
