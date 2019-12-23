import VueRouter from 'vue-router'
import base from './components/base.vue'
import start from './views/start.vue'

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
          component: start
        }
      ]
    }
  ]
})
