<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>

import EventMixin from '../mixins/events';
import { locaLoader } from '../util/apiloader';

export default {
  name: 'loca',
  mixins: [EventMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    ambLight: Object,
    dirLight: Object,
    pointLight: Object,
    viewControl: Object,
  },
  inject: ['getMap'],
  data() {
    return {
      target: null,
      Loca: null,
      options: {},
      events: []
    };
  },
  created() {
    !this.options && (this.options = {});
    const keys = Object.keys(this.$props);
    for (const key of keys) {
      if (this.$props[key] !== undefined) {
        this.options[key] = this.$props[key];
      }
    }
    this.getMap(map => {
      locaLoader.then(Loca => {
        // console.log(this.options);
        this.target = new Loca.Container({ map, ...this.options });
      });
    });
  },
  methods: {
    getLoca(getter){
      if (this.target){
        getter(this.target);
      } else {
        setTimeout(() => this.getLoca(getter), 50);
      }
    }
  }



};
</script>
