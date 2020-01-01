import ControlMixin from '../mixins/control'
import EventMixin from '../mixins/events'

export default {
  name: 'amap-controlbar',
  mixins: [ControlMixin, EventMixin],
  data() {
    return {
      key: 'ControlBar'
    }
  },
  props: {
    position: Object,
    showZoomBar: { type: Boolean, default: true },
    showControlButton: { type: Boolean, default: true }
  }
}