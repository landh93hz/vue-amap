// import VueAmap from 'amap'
import Vue from 'vue';

const options = {
  key: '0b8eff7c3cebc996161cf56812c23528',
  v: '2.0',
  plugins: [
    'AMap.Geocoder',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'HawkEye',
    'MapType',
    'ToolBar',
    'ControlBar',
    'AMap.PolylineEditor',
    'AMap.PolygonEditor',
    'AMap.RectangleEditor',
    'AMap.CircleEditor',
    'AMap.EllipseEditor'
  ]
};
// Vue.use(AmapVue, options);
export default async ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  isServer
}) => {
  // Vue.use(VueAmap, options)
  if (!isServer) {
    import('../../../dist/vue-amap').then(module => {
      const VueAmap = module.default;
      // Vue.AMap= await module.amapLoader.then()
      Vue.use(VueAmap, options);
    });
  }
};
