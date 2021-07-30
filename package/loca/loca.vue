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
    this.getMap(map => {
      locaLoader.then(Loca => {
        this.target = new Loca.Container({ map });
        console.log(this.target);
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
