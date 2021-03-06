import { getVersion } from '../util/loca';

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
      locas: ['HeatMap', 'Hexagon'],
      mapVersion: null
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
    if (this.mapVersion === 'v2') {
      this.target && this._map.remove(this.target);
    } else {
      this.target && this.target.setMap(null);
    }
    this.target = null;
    this.$emit('destroy');
  },
  methods: {
    mapGetter(map) {
      this._map = map;
      this.mapVersion = getVersion();
      setTimeout(() => {
        if (this.target) {
          if (!this.visible) this.target.hide();
          if (this.target.CLASS_NAME === 'AMAp.InfoWindow') return;
          if (this.mapVersion === 'v2' || this.target.CLASS_NAME === 'AMap.LabelsLayer') {
            if (this.locas.includes(this.target.CLASS_NAME)) {
              this.$parent.getLoca(loca => loca.add(this.target));
            }
            map.add(this.target);
          } else {
            this.target.setMap && this.target.setMap(map);
          }
        }
      }, 0);
    }
  }
};
