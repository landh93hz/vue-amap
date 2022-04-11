<template>
  <div class="hidden-box" ref="hiddenBox">
    <slot :data="data"></slot>
  </div>
</template>

<script>
import ElementMixin from '../mixins/element';
import EventMixin from '../mixins/events';
import { amapLoader } from '../util/apiloader';

export default {
  name: 'amap-infowindow',
  mixins: [ElementMixin, EventMixin],
  props: {
    isCustom: Boolean,
    autoMove: Boolean,
    closeWhenClickMap: { type: Boolean, default: true },
    content: [String, HTMLDivElement],
    size: Object,
    anchor: String,
    offset: Object,
    position: { type: [Object, Array], required: true },
    showShadow: Boolean,
    data: [String, Number, Object]
  },
  data() {
    return {
      target: null,
      options: {},
      events: [
        'open',
        'change',
        'close'
      ]
    };
  },
  watch: {
    position(val) {
      this.target && this.target.setPosition(val);
    },
    visible(val) {
      if (!this.target) {
        return;
      }
      if (val) {
        this.getMap(map => {
          !this.target.getIsOpen() && this.target.open(map, this.position);
        });
      } else {
        this.target.getIsOpen() && this.target.close();
      }
    }
  },
  created() {
    amapLoader.then(AMap => {
      this.target = new AMap.InfoWindow(this.options);
      
      this.getMap(map => {
        this.visible
          ? this.target.open(map, this.position)
          : this.target.close();
        this.renderContent();
      });
    });
  },
  methods: {
    renderContent() {
      const $el = this.$refs.hiddenBox;
      if (!$el.firstChild) {
        return;
      }
      const $content = $el.firstChild;
      this.target.setContent($content);
    }
  }
};
</script>

<style lang="scss" scoped>
  .hidden-box {
    display: none;
  }
</style>