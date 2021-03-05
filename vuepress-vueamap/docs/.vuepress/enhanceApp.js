// import VueAmap from 'amap'
import Vue from 'vue'


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
    'ControlBar'
  ]
};
// Vue.use(AmapVue, options);
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  isServer
}) => {
  // Vue.use(VueAmap, options)
  if (!isServer) {
    console.log(123);
    import('../../../dist/vue-amap').then(module => {
      const VueAmap = module.default
      Vue.use(VueAmap, options);
    })
  }
}
