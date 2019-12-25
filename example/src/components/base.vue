<template>
  <div style="height: 100vh;">
    <el-header width="100vw" height="8vh">Header</el-header>
    <el-container height="92vh">
      <el-aside width="20vw">
        <m-aside></m-aside>
      </el-aside>
      <el-container width="80vw">
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import mAside from './aside'
export default {
  components: { mAside }
}
</script>
