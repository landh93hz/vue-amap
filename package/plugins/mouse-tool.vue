<template>
  <div>
  </div>
</template>
<script>
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-mouse-tool',
  mixins: [EventMixin],
  data() {
    return {
      target: null,
      events: [
        'draw'
      ],
    };
  },
  inject: ['getMap'],
  mounted: {
    createMouseTool(){
      amapLoader.then(AMap => {
        this.getMap(map => {
          this.target = new AMap.MouseTool(map); 
        });
      });
    }
  }
};
</script>
