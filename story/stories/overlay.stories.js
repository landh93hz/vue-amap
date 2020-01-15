import { action } from '@storybook/addon-actions';

const methods = {
  clickMap: action('clickMap')
};


const mapTemplate = 
  '<amap-map height="90vh" :center="center" @click="clickMap">' +
      '<amap-marker v-if="position" :position="position"></amap-marker>' +  
  '</amap-map>';

export const marker = () => ({
  template: mapTemplate,
  name: 'm-marker',
  data() {
    return {
      center: [120, 30],
      position: null
    };
  },
  methods
});

export default { title: 'Overlay' };