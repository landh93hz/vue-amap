<template>
  <div>
    <el-menu default-active="start" @select="openMenu">
      <span v-for="route in routes" :key="route.name">
        
        <el-submenu v-if="Array.isArray(route.meta.items)" :index="route.name">
          <template slot="title">
            {{ route.meta.title }}
          </template>
          <el-menu-item-group>
            <el-menu-item 
              v-for="child in route.meta.items" 
              :key="child.path" 
              :index="`${route.name}:${child.props || ''}`">
              {{ child.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="route.path">
          {{ route.meta.title }}
        </el-menu-item>
      </span>
    </el-menu>
  </div>
</template>

<script>
import menuGroups from '../router/index'

const routes = menuGroups.reduce((prev, curr) => {
  return [...prev, ...curr.routes]
}, [])

export default {
  created() {
    const { routes } = this.$router.options
    this.routes = routes[1].children
  },
  data() {
    return { routes, menuGroups }
  },
  methods: {
    openMenu(index) {
      let [path, params] = index.split(':')
      params = params || ''
      path = `/${path}/${params}`
      if (path !== this.$route.path) {
        this.$router.push({ path })
      }
    }
  }
}
</script>