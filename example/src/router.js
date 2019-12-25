import VueRouter from 'vue-router'
import base from './components/base.vue'
import start from './views/start.vue'
import Lifecycle from './views/lifecycle.vue'

const mapLifeCycleRoutes = [
  {
    path: 'lifecycle/:phase',
    name: 'lifecycle',
    component: Lifecycle,
    props: (route) => ({ phase: route.params.phase }),
    meta: {
      title: '生命周期',
      items: [
        {
          path: 'create',
          name: 'create-map',
          title: '地图的创建'
        },
        {
          path: 'load',
          name: 'load-map',
          title: '地图加载完成'
        },
        {
          path: 'destroy',
          name: 'destroy-map',
          title: '地图的销毁'
        },
        {
          path: 'async',
          name: 'async-map',
          title: '异步加载地图'
        }
      ]
    }
  }
]

const mapPropertyRoutes = [
  {
    path: 'property',
    name: 'map-property',
    meta: {
      title: '地图属性',
      items: [
        {
          path: 'lang',
          name: 'lang',
          title: '中、英文地图'
        },
        {
          path: 'get-center',
          name: 'get-map-center',
          title: '获取地图中心点/级别'
        },
        {
          path: 'set-center',
          name: 'set-map-center',
          title: '设置地图中心点/级别'
        },
        {
          path: 'get-district',
          name: 'get-district',
          title: '获取地图当前行政区'
        },
        {
          path: 'set-district',
          name: 'set-district',
          title: '设置地图当前行政区'
        }
      ]
    },
  }
]

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/start',
    },
    {
      path: '/',
      component: base,
      children: [
        {
          path: 'start',
          name: 'start',
          component: start,
          meta: {
            title: '起步'
          }
        },
        ...mapLifeCycleRoutes,
        ...mapPropertyRoutes,
      ]
    }
  ]
})
