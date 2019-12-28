<template>
  <div class="base">
    <div class="header">
      header
    </div>
    <div class="container">
      <div class="side">
        <m-aside></m-aside>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
import mAside from './aside'
export default {
  components: { mAside }
}
</script>

<style lang="scss" scoped>
.base {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    height: 80px;
  }
}
.container {
  display: flex;
  flex: 1;
  height: 100%;

  .side {
    width: 220px;
    overflow: auto;
  }

  .main {
    flex: 1;
  }
}
.footer {
  height: 140px;
  width: 100%;
}
</style>
