<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import ElementMixin from  '../mixins/element';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-circle-editor',
  mixins: [EventMixin, ElementMixin],
  props: {
    createOptions: Object,
    editOptions: Object,
    movePoint: Object,
    resizePoint: Object
  },
  data() {
    return {
      target: null,
      events: [
        'addnode',
        'adjust',
        'move',
        'add',
        'end'
      ],
    };
  },
  inject: ['getMap'],
  created() {
    amapLoader.then(AMap => {
      const version = AMap.v || AMap.version;
        version === '2.0' && this.createCircleEditor();
    });
  },
  methods: {
    createCircleEditor(editorObject = undefined){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.CircleEditor(map, editorObject, this.options);
        });
      });
    }
  }
};
</script>
