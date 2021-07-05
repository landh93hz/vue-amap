import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import AmapVue from 'amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/style.css';
import VueRouter from 'vue-router';

const options = {
  key: '0b8eff7c3cebc996161cf56812c23528',
  v: '1.4.15',
  plugins: [
    'AMap.Geocoder', 
    'AMap.PlaceSearch', 
    'AMap.Scale', 
    'OverView',
    'MapType',
    'ToolBar',
    'ControlBar',
    'AMap.PolyEditor'
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