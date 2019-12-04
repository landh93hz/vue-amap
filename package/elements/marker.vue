<template>
  <div class="hidden-box" ref="hiddenBox">
    <slot :data="extData" name="content"></slot>
    <slot :data="extData" name="label"></slot>
  </div>
</template>

<script>
import AMap from 'AMap'
import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'

export default {
  name: 'MapMarker',
  mixins: [ElementMixin, EventMixin],
  props: {
    topWhenClick: Boolean,
    bubble: Boolean,
    raiseOnDrag: Boolean,
    cursor: String,
    autoRotation: Boolean,
    anchor: String,
    offset: Object,
    icon: AMap.Icon,
    draggable: Boolean,
    zIndex: Number,
    angle: Number,
    animation: String,
    title: String,
    shadow: AMap.Icon,
    content: [ String, HTMLElement ],
    label: [ Object, String],
    extData: Object,
    position: AMap.LngLat
  },
  data() {
    return {
      events: [
        'click',
        'dblclick',
        'rightclick',
        'mousemove',
        'mouseover',
        'mouseout',
        'mousedown',
        'mouseup',
        'dragstart',
        'dragging',
        'dragend',
        'moving',
        'moveend',
        'movealong',
        'touchstart',
        'touchmove',
        'touchend'
      ]
    }
  },
  watch: {
    position(val) {
      this.target && this.target.setPosition(val)
    },
    label(val) {
      let $label = document.createElement('div')
      $label.textContent = val
      this.target && this.target.setLabel({ content: $label.outerHTML })
    }
  },
  created() {
    this.target = new AMap.Marker(this.options)
    this.visible || this.target.hide()
  },
  mounted() {
    let { label } = this
    if (typeof label === 'string') {
      let $label = document.createElement('div')
      $label.textContent = label
      this.target && this.target.setLabel({ content: $label.outerHTML })
    }
  }
}
</script>

<style lang="scss" scoped>
  .hidden-box {
    display: none;
  }
</style>