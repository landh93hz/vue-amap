/**
 * 以group为分组标准，每一group中按照功能进行导航，而在每一个功能中，
 * 可以传入不同的功能选项
 * 
 */

const lifecycleRoutes = [
  {
    path: 'map-lifecycle/:phase',
    name: 'map-lifecycle',
    component: () => import('@/views/Lifecycle.vue'),
    props: true,
    meta: {
      title: '生命周期',
      items: [
        {
          props: 'map-show',
          title: '地图的创建'
        },
        {
          props: 'map-complete',
          title: '地图加载完成'
        },
        {
          props: 'map-destroy',
          title: '地图的销毁'
        }
      ]
    }
  }
]

const propertyRoutes = [
  {
    path: 'map-property/:property',
    name: 'map-property',
    component: () => import('@/views/MapProperty.vue'),
    props: true,
    meta: {
      title: '地图属性',
      items: [
        {
          props: 'map-lang',
          title: '中、英文地图'
        },
        {
          props: 'center-zoom',
          title: '地图中心点/级别'
        },
        {
          props: 'district',
          title: '获取地图当前行政区'
        },
        {
          props: 'map-bounds',
          title: '地图显示范围'
        },
        {
          props: 'map-moving',
          title: '地图平移'
        },
        {
          props: 'map-status',
          title: '交互控制'
        },
        {
          props: 'click-to-get-lnglat',
          title: '获取鼠标点击经纬度'
        },
        {
          props: 'hotspot',
          title: '地图的热点'
        },
        {
          props: 'cursor-style',
          title: '设置鼠标样式'
        }
      ]
    },
  }
]

const overlayRoutes = [
  {
    path: 'map-components/:overlay',
    name: 'map-components',
    component: () => import('../views/MapComponents.vue'),
    props: true,
    meta: {
      title: '覆盖物与图层管理',
      items: [
        {
          props: 'map-overlays',
          title: '覆盖物的添加与移除'
        },
        {
          props: 'map-layers',
          title: '图层的添加与移除'
        },
        {
          props: 'function-control',
          title: '地图控件'
        }
      ]
    }
  }
]

const mapStyleRoutes = [
  {
    path: 'map-style/:customStyle',
    name: 'map-style',
    component: () => import('../views/MapStyle.vue'),
    props: true,
    meta: {
      title: '自定义地图样式',
      items: [
        {
          props: 'custom-style',
          title: '自定义地图'
        },
        {
          props: 'building-style',
          title: '设定楼块样式'
        },
        {
          props: 'theme-style',
          title: '标准主题样式'
        },
        {
          props: 'map-content',
          title: '地图显示要素'
        },
        {
          props: 'map-showlabel',
          title: '隐藏文字标注'
        }
      ]
    }
  }
]

export const mapGroup = {
  title: '地图',
  routes: [
    ...lifecycleRoutes,
    ...propertyRoutes,
    ...overlayRoutes,
    ...mapStyleRoutes
  ]
}