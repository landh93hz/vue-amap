import { configure } from '@storybook/vue';
import '../stories/style/index.scss';
import Vue from 'vue';
import VueAMap from '../../index';

const options = {
  key: '99416a9c9b1e31a0d57f2733ac4e8983',
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

Vue.use(VueAMap, options);

configure(require.context('../stories', true, /\.stories\.js$/), module)