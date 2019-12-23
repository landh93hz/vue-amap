<template>
  <div style="height: 100vh">
    <el-header width="100vw" height="8vh">Header</el-header>
    <el-container height="92vh">
      <el-aside width="15vw">Aside</el-aside>
      <el-container width="85vw">
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {

}
</script>
