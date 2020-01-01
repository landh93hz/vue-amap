import ControlMixin from '../mixins/control'
import EventMixin from '../mixins/events'

export default {
  name: 'amap-scale',
  mixins: [ ControlMixin, EventMixin ],
  data() {
    return {
      key: 'Scale',
      events: ['show', 'hide']
    }
  }
}