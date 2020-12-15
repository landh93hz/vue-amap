import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import AmapVue from 'amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/style.css';
import VueRouter from 'vue-router';

const options = {
  key: '你的Key',
  v: '1.4.15',
  plugins: [
    'AMap.Geocoder', 
    'AMap.PlaceSearch', 
    'AMap.Scale', 
    'OverView',
    'MapType',
    'ToolBar',
    'ControlBar'
  ]
};

Vue.use(AmapVue, options);

Vue.use(ElementUI);
Vue.use(VueRouter);

const vm = new Vue({
  router,
  render: h => h(App)
});

vm.$mount('#app');