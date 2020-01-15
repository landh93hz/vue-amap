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
  </div>
</template>

<script>
import mAside from './aside';
export default {
  components: { mAside }
};
</script>

<style lang="scss" scoped>

.base {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    height: 6vh;
  }
}
.container {
  display: flex;
  flex: 1;
  height: 100%;

  .side {
    width: 220px;
    height: 94vh;
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
