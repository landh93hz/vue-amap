<template>
  <div>
    <div class="input-card" style="width: 120px; position: absolute; zIndex: 2000" v-if="isEditor">
      <button class="btn" @click="target.open()" style="margin-bottom: 5px">开始编辑</button> 
      <button class="btn" @click="target.close()">结束编辑</button> 
    </div>
    <slot></slot>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-circle-editor',
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
    createCircleEditor(editorObject){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.CircleEditor(map, editorObject);
          this.isEditor = true;
        });
      });
    }
  }
};
</script>
