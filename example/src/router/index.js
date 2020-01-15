import { mapGroup } from './map';
import { axisGroup } from './axis';


const start = {
  path: 'start',
  name: 'start',
  component: () => import('../views/start.vue'),
  meta: {
    title: '起步'
  }
};

export default [
  start,
  mapGroup,
  axisGroup
];