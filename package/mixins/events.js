// import { throttle } from '../util/debounce';

export default {
  data() {
    return {
      target: null,
      events: [],
      handleMap: {}
    };
  },
  mounted() {
    this.checkTarget();
  },
  beforeDestroy() {
    for (const key in this.handleMap) {
      if (key) {
        this.target && this.target.off(key, this.handleMap[key]);
      }
    }
  },
  methods: {
    checkTarget() {
      if (this.target) {
        this.initEvents();
        this.complete();
      } else {
        setTimeout(this.checkTarget, 50);
      }
    },
    initEvents() {
      for (const eventName of this.events) {
        let handler = event => {
          this.$emit(eventName, event);
        };
        // 如果在组件中的具有与`eventName`名称相同的`method`，
        // 则需要同时执行组件的同名方法并发送`eventName`事件
        // 通过`descriptor`获取与`eventName`的同名方法
        const descriptor = Object.getOwnPropertyDescriptor(this, eventName);
        if (descriptor && typeof descriptor.value === 'function') {
          handler = event => {
            descriptor.value.call(null, event);
            this.$emit(eventName, event);
          };
        }
        // 对`mousemove`节流
        // if (eventName === 'mousemove') {
        //   handler = throttle(handler, 500);
        // }        
        this.handleMap[eventName] = handler;
        this.target.on(eventName, handler);
      }
    },
    complete() {
      this.$emit('complete', this.target);
    }
  }
};