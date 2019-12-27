<template>
  <div>
    <el-menu default-active="start" @select="openMenu">
      <span v-for="group in menuGroups" :key="group.title">
        <div v-if="!group.routes">
          <el-menu-item :index="group.name">
            {{ group.meta.title }}
          </el-menu-item>
        </div>
        <el-menu-item-group v-else>
          <template slot="title">{{ group.title }}</template>
          <el-submenu v-for="route in group.routes" :key="route.path" :index="`${route.name}`">
            <template slot="title">{{ route.meta.title }}</template>
            <el-menu-item-group >
              <el-menu-item 
                v-for="item in route.meta.items" 
                :key="item.title" 
                :index="`${route.name}:${item.props || ''}`"
                >
                {{ item.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu-item-group>
      </span>
    </el-menu>
  </div>
</template>

<script>
import menuGroups from '../router/index'

const routes = menuGroups.reduce((prev, curr) => {
  if (curr.routes) 
    return [...prev, ...curr.routes]
  else
    return [...prev, curr]
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