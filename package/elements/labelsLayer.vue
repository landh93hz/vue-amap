<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { amapLoader } from '../util/apiloader';
import ElementMixin from '../mixins/element';

export default {
  name: 'amap-labels-layer',
  mixins: [ElementMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    zIndex: {
      type: Number
    },
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
      this.complete();
    });
  },
  methods: {
    getLabelsLayer(getter){
      if (this.target){
        getter(this.target);
      } else {
        setTimeout(() => this.getLabelsLayer(getter), 50);
      }
    },
    complete() {
      this.$emit('complete', this.target);
    }
  },
  beforeDestroy() {
    this.target && this.target.clear();
  }

};
</script>
