<template>
  <div class="hidden-box" ref="hiddenBox">
    <slot :data="data"></slot>
  </div>
</template>

<script>
import ElementMixin from '../mixins/element'
import EventMixin from '../mixins/events'
import AMap from 'AMap'

export default {
  name: 'amap-infowindow',
  mixins: [ElementMixin, EventMixin],
  props: {
    isCustom: Boolean,
    autoMove: Boolean,
    closeWhenClickMap: { type: Boolean, default: true },
    content: [String, HTMLDivElement],
    size: AMap.Size,
    anchor: String,
    offset: AMap.Pixel,
    position: { type: AMap.LngLat, required: true },
    showShadow: Boolean,
    data: [String, Number, Object]
  },
  data() {
    return {
      target: null,
      options: {},
      events: [
        'open',
        'change',
        'close'
      ]
    }
  },
  watch: {
    position(val) {
      this.target && this.target.setPosition(val)
    },
    visible(val) {
      if (!this.target) {
        return
      }
      if (val) {
        this.getMap(map => {
          !this.target.getIsOpen() && this.target.open(map, this.position)
        })
      } else {
        this.target.getIsOpen() && this.target.close()
      }
    }
  },
  created() {
    this.target = new AMap.InfoWindow(this.options)
    this.getMap((map) => {
      this.visible
        ? this.target.open(map, this.position)
        : this.target.close()
    })
  },
  mounted() {
    let $el = this.$refs.hiddenBox
    if (!$el.firstChild) {
      return
    }
    let $content = $el.firstChild
    this.target.setContent($content)
  }
}
</script>

<style lang="scss" scoped>
  .hidden-box {
    display: none;
  }
</style>