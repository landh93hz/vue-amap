import VueRouter from 'vue-router'
import base from './components/base.vue'
import start from './views/start.vue'
import menuGroups from './router/index'

const routes = menuGroups.reduce((prev, curr) => {
  return [...prev, ...curr.routes]
}, [])

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
        ...routes
      ]
    }
  ]
})
