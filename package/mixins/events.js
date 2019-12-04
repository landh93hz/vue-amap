export default {
  data() {
    return {
      target: null,
      events: [],
      handleMap: {}
    }
  },
  mounted() {
    this.checkTarget()
  },
  beforeDestroy() {
    for (let key in this.handleMap) {
      if (key) {
        this.target && this.target.off(key, this.handleMap[key])
      }
    }
  },
  methods: {
    checkTarget() {
      if (this.target) {
        this.initEvents()
        this.complete()
      } else {
        setTimeout(this.checkTarget, 50)
      }
    },
    initEvents() {
      // console.log(this.events.includes('click'), this.target.CLASS_NAME)
      // this.target.on('click', (event) => {
      //   console.log(event)
      // })
      for (let eventName of this.events) {
        let handler = (event) => {
          this.$emit(eventName, event)
        }
        let descriptor = Object.getOwnPropertyDescriptor(this, eventName)
        if (descriptor && typeof descriptor.value === 'function') {
          handler = (event) => {
            descriptor.value.call(null, event)
            this.$emit(eventName, event)
          }
        }
        this.handleMap[eventName] = handler
        this.target.on(eventName, handler)
      }
    },
    complete() {
      this.$emit('complete', this.target)
    }
  }
}