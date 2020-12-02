import EventMixin from '../mixins/events';
import ElementMixin from '../mixins/element';
import { locaLoader } from '../util/apiloader';

export default {
  name: 'loca-heatmap',
  mixins: [EventMixin, ElementMixin],
  render() {
    return this.$slots.default;
  },
  props: {
    value: { type: String, default: 'value' },
    dataType: String,
    eventSupport: Boolean,
    fitView: Boolean,
    zIndex: Number,
    lnglat: { type: [String, Function], default: 'lnglat' },
    radius: { type: Number, required: true },
    color: { type: Object, required: true },
    opacity: { type: Array, default: () => [0, 1] },
    points: { type: Array, required: true },
    visible: { type: Boolean, default: true }
  },
  data() {
    return {
      target: null,
      options: {},
      events: []
    };
  },
  watch: {
    points(val) {
      if (this.target) {
        this.target.setData(val, this.dataOptions);
        this.target.setOptions({ style: this.styleOptions });
        this.target.render();
      }
    }
  },
  computed: {
    styleOptions() {
      const { radius, color, opacity } = this;
      const options = { radius, color, opacity };
      return options;
    },
    dataOptions() {
      const { lnglat, value, dataType: type } = this;
      const options = { lnglat, value, type };
      return options;
    }
  },
  methods: {
    delayedRender() {
      if (this.target.getMap()) {
        this.target.render();
        this.visible ? this.target.show() : this.target.hide();
      } else {
        setTimeout(this.delayedRender, 50);
      }
    }
  },
  created() {
    locaLoader.then(Loca => {
      const layer = new Loca.HeatmapLayer({});
      layer.setData(this.points, this.dataOptions);
      layer.setOptions({ style: this.styleOptions });
      this.target = layer;
    });
  },
  mounted() {
    this.delayedRender();
  }
};
