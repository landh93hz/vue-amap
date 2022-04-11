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
  name: 'amap-polyline-editor',
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
      AMap: null,
      events: [
        'addnode',
        'adjust',
        'removenode',
        'add',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  created() {
   this.createPolylineEditor();
  },
  methods: {
    createPolylineEditor(editorObject = undefined){
      if (this.target) {
        this.target.setTarget(editorObject);
      } else {
        amapLoader.then(AMap => {
          const version = AMap.v || AMap.version;
          if (version !== '2.0') return;
          this.getMap(map => {
            this.target = new AMap.PolylineEditor(map, editorObject, this.options);
          });
        });
      }
    },
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
