import { mapGroup } from './map';


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
  mapGroup
];