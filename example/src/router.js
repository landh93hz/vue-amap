import VueRouter from 'vue-router';
import base from './components/base.vue';
import menuGroups from './router/index';

const routes = menuGroups.reduce((prev, curr) => {
  if (curr.routes) 
    return [...prev, ...curr.routes];
  else
    return [...prev, curr];
}, []);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/start',
    },
    {
      path: '/',
      component: base,
      children: routes
    }
  ]
});
