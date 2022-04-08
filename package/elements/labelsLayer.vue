<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { amapLoader } from '../util/apiloader';
import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';

export default {
  name: 'amap-labels-layer',
  mixins: [ElementMixin, EventMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    zIndex: Number,
    opacity: {
      type: Number,
    },
    collision: {
      type: Boolean,
    },
    animation: {
      type: Boolean,
    }
  },
  data() {
    return {
      AMap: null,
      options: {},
      target: null,
      events: [
        'complete',
        'click',
        'mouseover',
        'mousemove',
        'mouseout',
        'mouseup',
        'mousedown',
        'touchstart',
        'touchend'
      ]
    };
  },
  provide() {
    return { getLabelsLayer: this.getLabelsLayer };
  },
  created() {
    amapLoader.then(AMap => {
      this.AMap = AMap;
      this.target = new AMap.LabelsLayer(this.options);
      this.visible || this.target.hide();
    });
  },
  methods: {
    getLabelsLayer(getter){
      if (this.target){
        getter(this.target);
      } else {
        setTimeout(() => this.getLabelsLayer(getter), 50);
      }
    }
  },
  beforeDestroy() {
    this.target && this.target.clear();
  }

};
</script>
