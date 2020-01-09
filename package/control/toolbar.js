import ControlMixin from '../mixins/control';
import EventMixin from '../mixins/events';

export default {
  name: 'amap-toolbar',
  mixins: [ControlMixin, EventMixin],
  props: {
    offset: Object,
    position: String,
    ruler: { type: Boolean, default: true },
    noIpLocate: { type: Boolean, default: false },
    locate: Boolean,
    liteStyle: Boolean,
    direction: Boolean,
    autoPosition: Boolean,
    locationMarker: Object,
    useNative: Boolean
  },
  data() {
    return {
      key: 'ToolBar',
      events: [
        'show',
        'hide',
        'location',
        'zoomchanged'
      ]
    };
  },
  watch: {
    ruler(val) {
      this.target && val ? this.target.showRuler : this.target.hideRuler;
    },
    offset(val) {
      this.target && this.target.setOffset(val);
    },
    direction(val) {
      this.target && val ? this.target.showDirection() : this.target.hideDirection();
    },
    locate(val) {
      this.target && val ? this.target.showLocation() : this.target.hideLocation();
    }
  }
};