<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MapBounds',
  data() {
    return {
      bounds: null
    }
  },
  provide() {
    return {
      getBounds: this.getBounds,
      setBounds: this.setBounds,
      areaBounds: this.bounds
    }
  },
  methods: {
    getBounds() {
      return this.bounds
    },
    setBounds(bounds) {
      console.log(bounds)
      this.bounds = bounds
    }
  }
}
</script>