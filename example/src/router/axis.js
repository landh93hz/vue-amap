
const mapContainerTransform = {
  path: 'axis/:convert',
  name: 'axis',
  component: () => import('@/views/MapAxis.vue'),
  props: true,
  meta: {
    title: '坐标系转换',
    items: [
      {
        props: 'map-container',
        title: '经纬度<->地图容器像素坐标'
      },
      {
        props: 'lnglat-pixel',
        title: '经纬度<->平面像素坐标'
      },
      {
        props: 'lnglat-3d',
        title: '经纬度<->三维坐标'
      }
    ]
  }
};


const otherToAMap = {
  path: 'other/:coord',
  name: 'other',
  component: () => import('@/views/OtherCoord.vue'),
  props: true,
  meta: {
    title: '其他坐标转高德坐标',
    items: [
      {
        props: 'other',
        title: '其他坐标<->高德坐标'
      }
    ]
  }
};

export const axisGroup = {
  title: '坐标转换',
  routes: [
    mapContainerTransform,
    otherToAMap
  ]
};