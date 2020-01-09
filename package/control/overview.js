import ControlMixin from '../mixins/control';
import EventMixin from '../mixins/events';


export default {
  name: 'amap-overview',
  mixins: [ControlMixin, EventMixin],
  props: {
    tileLayer: Object,
    isOpen: Boolean
  },
  data() {
    return {
      key: 'OverView',
      events: [
        'show',
        'hide',
        'open',
        'close'
      ]
    };
  },
  watch: {
    isOpen(val) {
      val ? this.target.open() : this.target.close();
    }
  }
};