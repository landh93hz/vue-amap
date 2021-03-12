<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-rectangle-editor',
  mixins: [EventMixin],
  data() {
    return {
      target: null,
      events: [
        'adjust',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  props: {
    editorObject: Object
  },
  methods: {
    createRectangleEditor(editorObject){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.RectangleEditor(map, editorObject);
        });
      });
    }
  }
};
</script>
