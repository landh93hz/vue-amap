<template>
  <div
    :style="{ 
      width: typeof width === 'number' ? `${width}px` : width, 
      height: typeof height === 'number' ? `${height}px` : height 
      }">
    <slot></slot>
  </div>
</template>

<script>
import { amapLoader } from '../util/apiloader';
import EventsMixin from '../mixins/events';

export default {
  mixins: [EventsMixin],
  name: 'amap-map',
  provide() {
    return { getMap: this.getMap };
  },
  props: {
    height: {
      type: [Number, String],
      default: '100%'
    },
    width: {
      type: [Number, String],
      default: '100%'
    },
    layers: { type: Array },
    zooms: { type: Array },
    lang: { type: String },
    animateEnable: { type: Boolean },
    isHotspot: { type: Boolean, default: false },
    rotateEnable: { type: Boolean, default: true },
    resizeEnable: { type: Boolean, default: true },
    showIndoorMap: { type: Boolean, default: true },
    expandZoomRange: { type: Boolean, default: false },
    draggable: { type: Boolean, default: true },
    zoomEnable: { type: Boolean, default: true },
    doubleClickZoom: { type: Boolean, default: true },
    keyboardEnable: { type: Boolean, default: true },
    jogEnable: { type: Boolean, default: true },
    scrollWheel: { type: Boolean, default: true },
    touchZoom: { type: Boolean, default: true },
    mapStyle: { type: String },
    features: { type: Array },
    showBuildingBlock: { type: Boolean, default: true },
    pitchEnable: { type: Boolean, default: true },
    buildingAnimation: { type: Boolean, default: true },
    skyColor: { type: String },
    mask: { type: Array },
    zoom: { type: Number, default: 13 },
    pitch: { type: Number, default: 0 },
    rotation: { type: Number, default: 0 },
    center: { type: [Object, Array] },
    bounds: { type: Object },
    city: { type: String },
    limitBounds: { type: Boolean },
    mapStatus: { type: Object },
    defaultCursor: { type: String },
    showLabel: { type: Boolean, default: true },
    crs: {
      type: String,
      default: 'EPSG3857',
      validator(value) {
        return ['EPSG3857', 'EPSG3395', 'EPSG4326'].indexOf(value) !== -1;
      }
    },
    viewMode: {
      type: String,
      default: '2D',
      validator(value) {
        return ['2D', '3D'].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      target: null,
      timer: null,
      events: [
        'click',
        'dbclick',
        'mapmove',
        'hotspotclick',
        'hotspotover',
        'hotspotout',
        'movestart',
        'moveend',
        'zoomchange',
        'zoomstart',
        'zoomend',
        'mousemove',
        'mousewheel',
        'mouseover',
        'mouseout',
        'mouseup',
        'mousedown',
        'rightclick',
        'dragstart',
        'dragging',
        'dragend',
        'resize',
        'touchstart',
        'touchmove',
        'touchend'
      ]
    };
  },
  created() {
  },
  mounted() {
    const keys = Object.keys(this.$props);
    const options = {};
    for (const key of keys) {
      if (this.$props[key] !== undefined) {
        options[key] = this.$props[key];
      }
    }
    amapLoader.then(AMap => {
      let center;
      if (Array.isArray(this.center)) {
        center = this.center;
      } else if (this.center) {
        const { lng, lat } = this.center;
        center = new AMap.LngLat(lng, lat);
      }
      options.center = center;
      this.target = new AMap.Map(this.$el, options);
      if (this.city) {
        this.target.setCity(this.city);
      }
      this.target.on('complete', () => {
        this.updateBounds();
        this.updateCity();
      });
    });
    
  },
  watch: {
    rotation(val) {
      this.target && this.target.setRotation(val);
    },
    pitch(val) {
      this.target && this.pitchEnable && this.target.setPitch(val);
    },
    zoom(val) {
      this.target && this.zoomEnable && this.target.setZoom(val);
    },
    lang(val) {
      this.target && this.target.setLang(val);
    },
    city(val) {
      this.target && this.target.setCity(val);
    },
    limitBounds(val) {
      if (!this.bounds) {
        throw new Error('Make sure to set bounds when limitBounds is true');
      }
      val 
        ? this.target.setLimitBounds(this.bounds) 
        : this.target.clearLimitBounds();
    },
    mapStatus: {
      deep: true,
      immediate: false,
      handler(val, old) {
        const keys = Object.keys(val);
        const status = {};
        for (const key in keys) {
          // console.log('new', val[key], 'old', old[key], 'prop', this.mapStatus[key])
          if (typeof(val[key]) !== 'boolean') continue;
          if (val[key] === old[key]) continue;
          status[key] = val[key];
        }
        if (Object.keys(status).length > 0) {
          this.target.setStatus(status);
        }
      }
    },
    defaultCursor(val) {
      this.target && this.target.setDefaultCursor(val);
    },
    features(val) {
      this.target && this.target.setFeatures(val);
    },
    mapStyle(val) {
      this.target && this.target.setMapStyle(val);
    }
  },
  methods: {
    mousedown() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.$emit('update:pitch', this.target.getPitch());
          this.$emit('update:rotation', this.target.getRotation());
        }, 100);
      }
    },
    mouseup() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    zoomchange() {
      this.$emit('update:zoom', this.target.getZoom());
      this.updateBounds();
    },
    moveend() {
      this.$emit('update:center', this.target.getCenter());
      this.updateBounds();
      this.updateCity();
    },
    getMap(getter) {
      if (this.target) {
        getter(this.target);
      } else {
        setTimeout(() => {
          this.getMap(getter);
        }, 50);
      }
    },
    updateBounds() {
      let bounds;
      if (this.viewMode === '2D') {
        bounds = this.target.getBounds();
      } else {
        const arrayBounds = this.target.getBounds();
        bounds = arrayBounds.toBounds();
      }
      this.$emit('update:bounds', bounds);
    },
    updateCity() {
      this.target.getCity(info => {
        const { city } = info;
        this.$emit('update:city', city);
        this.$emit('getCity', info);
      });
    }
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  deactivated() {
  }
};
</script>