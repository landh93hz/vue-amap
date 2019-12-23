import Vue from 'vue'
import App from './App.vue'
import AmapVue from 'amap'

const options = {
  key: '99416a9c9b1e31a0d57f2733ac4e8983',
  v: '1.4.15',
  plugin: 'AMap.Geocoder,AMap.PlaceSearch'
}

Vue.use(AmapVue, options)

const vm = new Vue({
  render: h => h(App)
}).$mount('#app')