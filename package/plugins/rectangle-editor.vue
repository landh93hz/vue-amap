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
  props: {
    createOptions: Object,
    editOptions: Object,
    southWestPoint: Object,
    northEastPoint: Object,
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
    !this.options && (this.options = {});
    const keys = Object.keys(this.$props);
    for (const key of keys) {
      if (this.$props[key] !== undefined) {
        this.options[key] = this.$props[key];
      }
    }
    amapLoader.then(AMap => {
      const version = AMap.v || AMap.version;
      version === '2.0' && this.createRectangleEditor();
    });
  },
  methods: {
    createRectangleEditor(editorObject = undefined){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.RectangleEditor(map, editorObject, this.options);
        });
      });
    }
  }
};
</script>
