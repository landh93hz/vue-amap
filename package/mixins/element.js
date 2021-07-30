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
      _loca: null,
      _map: null,
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
    if (this._loca) {
      this.target && this._loca.remove(this.target);
      this._loca.destroy();
      this.target.setLoca(null);
      this.target = null;
      this.Loca = null;
    }
    this.target && this._map.remove(this.target);
    this.target = null;
    this.$emit('destroy');
  },
  methods: {
    mapGetter(map) {
      // console.log(' 1. 获取map实例对象');
      this._map = map;
      setTimeout(() => {
        if (this.target) {
          if (!this.visible) this.target.hide();
          if (this.target.CLASS_NAME === 'AMAp.InfoWindow') return;
          this.addToMap(map);
        } else {
          setTimeout(() => this.getMap(this.mapGetter));
        }
      }, 0);
    },
    addToMap(map) {
      this.mapVersion = getVersion();
      if (this.mapVersion === 'v2') {
        if (this.locas.includes(this.target.CLASS_NAME)) {
          this._loca = new this.Loca.Container({ map });
          this._loca.add(this.target);
        } else {
          // todo 工具类的是否需要使用 map.add？或者工具类的不使用element.js混入会更好
          map.add(this.target);
        }
      } else if (this.mapVersion === 'v1') {
        this.target.setMap && this.target.setMap(map);
      }
    }
  }
};
