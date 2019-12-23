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
import { amapLoader } from '../util/apiloader'
import EventsMixin from '../mixins/events'

export default {
  mixins: [EventsMixin],
  name: 'amap-map',
  provide() {
    return { getMap: this.getMap }
  },
  props: {
    height: {
      type: [Number, String],
      default: 800
    },
    width: {
      type: [Number, String],
      default: 1000
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
    center: { type: Object },
    bounds: { type: Object },
    crs: {
      type: String,
      default: 'EPSG3857',
      validator(value) {
        return ['EPSG3857', 'EPSG3395', 'EPSG4326'].indexOf(value) !== -1
      }
    },
    viewMode: {
      type: String,
      default: '2D',
      validator(value) {
        return ['2D', '3D'].indexOf(value) !== -1
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
    }
  },
  mounted() {
    let keys = Object.keys(this.$props)
    let options = {}
    for (let key of keys) {
      if (this.$props[key] !== undefined) {
        options[key] = this.$props[key]
      }
    }
    amapLoader.then(AMap => {
      this.target = new AMap.Map(this.$el, options)
      this.target.on('complete', () => {
        this.updateBounds()
      })
    })
    
  },
  watch: {
    rotation(val) {
      this.target && this.target.setRotation(val)
    },
    pitch(val) {
      this.target && this.pitchEnable && this.target.setPitch(val)
    },
    zoom(val) {
      this.target && this.zoomEnable && this.target.setZoom(val)
    }
  },
  methods: {
    mousedown() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.$emit('update:pitch', this.target.getPitch())
          this.$emit('update:rotation', this.target.getRotation())
        }, 100)
      }
    },
    mouseup() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    zoomchange() {
      this.$emit('update:zoom', this.target.getZoom())
      this.updateBounds()
    },
    moveend() {
      this.updateBounds()
    },
    getMap(getter) {
      if (this.target) {
        getter(this.target)
      } else {
        setTimeout(() => {
          this.getMap(getter)
        }, 50)
      }
    },
    updateBounds() {
      let bounds
      if (this.viewMode === '2D') {
        bounds = this.target.getBounds()
      } else {
        let arrayBounds = this.target.getBounds()
        bounds = arrayBounds.toBounds()
      }
      this.$emit('update:bounds', bounds)
    }
  }
}
</script>