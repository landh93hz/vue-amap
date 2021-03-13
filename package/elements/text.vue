<template>
<div></div>
</template>

<script>
import ElementMixin from '../mixins/element';
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-text',
  mixins: [ElementMixin, EventMixin],
  props: {
    text: { type: String, require: true },
    position: [Object, Array],
    anchor: String,
    offset: Object,
    topWhenClick: Boolean,
    bubble: Boolean,
    draggable: Boolean,
    raiseOnDrag: Boolean,
    cursor: String,
    zIndex: Number,
    angle: Number,
    autoRotation: Boolean,
    animation: String,
    shadow: Object,
    title: String,
    clickable: Boolean,
    extData: Object,
    textStyle: Object
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
    };
  },
  watch: {
    position(val) {
      this.target && this.target.setPosition(val);
    },
  },
  mounted() {
    amapLoader.then(AMap => {
      if (this.textStyle){
        this.options['style'] = this.textStyle;
      }
      this.target = new AMap.Text(this.options);
      this.visible || this.target.hide();
    });
  },
};
</script>

