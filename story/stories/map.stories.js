import { action } from '@storybook/addon-actions';


const mapTemplate = '<amap-map height="90vh" @click="onClick" @complete="onComplete" @rightclick="onRightClick"></amap-map>';

const actionsData = {
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
  methods: actionsData
});

export default { title: 'Map', excludeStories: /.*Data$/ };