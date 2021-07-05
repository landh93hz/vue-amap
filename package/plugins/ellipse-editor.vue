<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-ellipse-editor',
  mixins: [EventMixin],
  data() {
    return {
      target: null,
      isEditor: false,
      events: [
        'move',
        'adjust',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  created() {
    
  },
  methods: {
    createEllipseEditor(editorObject){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.EllipseEditor(map, editorObject);
        });
      });
    }
  }
};
</script>
