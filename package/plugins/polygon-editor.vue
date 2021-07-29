<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-polygon-editor',
  mixins: [EventMixin, ElementMixin],
  props: {
    createOptions: Object,
    editOptions: Object,
    controlPoint: Object,
    midControlPoint: Object
  },
  data() {
    return {
      target: null,
      events: [
        'addnode',
        'removenode',
        'adjust',
        'move',
        'add',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  created() {
    
  },
  methods: {
    createPolygonEditor(editorObject){
      console.log('edit', editorObject);
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.PolygonEditor(map, editorObject, this.options);
        });
      });
    }
  }
};
</script>
