<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-polyeditor',
  mixins: [EventMixin],
  data() {
    return {
      target: null,
      events: [
        'addnode',
        'adjust',
        'removenode',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  created() {
    
  },
  methods: {
    createPolyEditor(editorObject){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.PolyEditor(map, editorObject);
        });
      });
    }
  }
};
</script>
