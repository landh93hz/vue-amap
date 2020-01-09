import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import AmapVue from 'amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/style.css';
import VueRouter from 'vue-router';

const options = {
  key: '99416a9c9b1e31a0d57f2733ac4e8983',
  v: '1.4.15',
  plugin: 'AMap.Geocoder,AMap.PlaceSearch'
};

Vue.use(AmapVue, options);

Vue.use(ElementUI);
Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: h => h(App)
});

vm.$mount('#app');