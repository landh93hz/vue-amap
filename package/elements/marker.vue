<template>
  <div class="hidden-box" ref="hiddenBox">
    <slot name="content"></slot>
    <slot name="label"></slot>
  </div>
</template>

<script>
import AMap from 'AMap'
import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'

export default {
  name: 'amap-marker',
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
    labelOffset: Object,
    labelDirection: String,
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
    this.renderSlot()
  },
  methods: {
    renderSlot() {
      const { content, label } = this
      if (content)  {
        return this.target.setContent(content)
      }
      if (label) {
        const labelObj = label
        if (typeof label === 'string') {
          labelObj = {
            offset: this.labelOffset || new AMap.Pixel(20, 20),
            content: label,
            direction: this.labelDirection || 'right'
          }
        }
        return this.target.setLabel(labelObj)
      }
      const { content: contentNodes, label: labelNodes } = this.$slots
      // console.log(this.$slots)
      if (contentNodes) {
        if (contentNodes.length > 1) {
          throw new Error('multi content slots in single marker')
        }
        const node = contentNodes[0]
        const elm = node.elm
        if (elm) {
          return this.target.setContent(elm)
        }
      }
      if (labelNodes) {
        if (labelNodes.length > 1) {
          throw new Error('multi label slots in single marker')
        }
        const node = labelNodes[0]
        const elm = node.elm.outerHTML
        if (elm) {
          const labelObj = {
            offset: this.labelOffset || new AMap.Pixel(20, 20),
            content: elm,
            direction: this.labelDirection || 'right'
          }
          return this.target.setLabel(labelObj)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .hidden-box {
    display: none;
  }
</style>