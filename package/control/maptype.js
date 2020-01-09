import ControlMixin from '../mixins/control';
import EventMixin from '../mixins/events';

export default {
  name: 'amap-maptype',
  mixins: [ControlMixin, EventMixin],
  data() {
    return {
      key: 'MapType'
    };
  },
  props: {
    defaultType: Number,
    showTraffic: Boolean,
    showRoad: Boolean
  }
};