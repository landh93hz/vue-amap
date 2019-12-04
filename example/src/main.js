import Vue from 'vue'
import App from './App.vue'
import AmapVue from 'amap'

Vue.use(AmapVue)

const vm = new Vue({
  render: h => h(App)
}).$mount('#app')