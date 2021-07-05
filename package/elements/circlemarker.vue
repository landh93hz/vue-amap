<template>
  <div class="hidden-box" ref="hiddenBox">
    <slot name="content"></slot>
    <slot name="label"></slot>
  </div>
</template>

<script>
import ElementMixin from '../mixins/element';
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-circle-marker',
  mixins: [ElementMixin, EventMixin],
  props: {
    zIndex: Number,
    center: { type: [Object, Array], require: true },
    bubble: Boolean,
    radius: { type: Number, require: true },
    strokeColor: String,
    strokeOpacity: String,
    strokeWeight: Number,
    fillColor: String,
    fillOpacity: String,
    extData: Object
  },
  data() {
    return {
      events: [
        'click',
        'dblclick',
        'rightclick',
        'hide',
        'show',
        'mousedown',
        'mouseup',
        'mouseover',
        'mouseout',
        'change',
        'touchstart',
        'touchmove',
        'touchend'
      ]
    };
  },
  watch: {
    center(val) {
      this.target && this.target.setPosition(val);
    },
  },
  mounted() {
    amapLoader.then(AMap => {
      if (this.fillOpacity){
        this.options['fillOpacity'] = parseFloat(this.fillOpacity);
      }
      if (this.strokeOpacity){
         this.options['strokeOpacity'] = parseFloat(this.strokeOpacity);
      }
      this.target = new AMap.CircleMarker(this.options);
      this.visible || this.target.hide();
    });
  },
 
};
</script>

<style lang="scss" scoped>
  .hidden-box {
    display: none;
  }
</style>