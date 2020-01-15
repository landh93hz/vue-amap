import { action } from '@storybook/addon-actions';


const mapTemplate = '<amap-map height="70vh" @click="onClick" @complete="onComplete" @rightclick="onRightClick"></amap-map>';

const methods = {
  onComplete: action('onComplete'),
  onClick: action('onClick'),
  onRightClick: action('onRightClick')
};

export const map = () => ({
  name: 'm-map',
  template: mapTemplate,
  created() {
  },
  data() {
    return {
      center: [120, 30]
    };
  },
  methods
});

export default { title: 'Map' };