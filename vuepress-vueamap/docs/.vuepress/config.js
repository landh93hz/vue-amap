module.exports = {
  title: 'VueAmap',
  description: '简单好用的高德地图组件封装',
  head: [
    // ['script', { src: 'https://webapi.amap.com/maps?key=0b8eff7c3cebc996161cf56812c23528&v=1.3.0' }],
  ],
  plugins: ['demo-container'],
  base: '/vue-amap/',
  dest: 'public',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    sidebar: [
      {
        title:'入门',
        collapsable:false,
        children: [
          '/components/install',
          '/components/init',
          '/components/amap'
        ]

      },
      {
        title: '地图',
        collapsable:false,
        children: [
          '/components/amap-map'
        ]
      },
      {
        title: '覆盖物',
        collapsable:false,
        children: [
          '/components/amap-marker',
          '/components/amap-text',
          '/components/amap-circle',
          '/components/amap-circle-marker',
          '/components/amap-polyline',
          '/components/amap-polygon',
          '/components/amap-massmarks',
          '/components/amap-infowindow',
          '/components/amap-rectangle',
          '/components/amap-ellipse',
        ]
      },
      {
        title: '图层',
        collapsable:false,
        children: [
          '/components/amap-roadnet',
          '/components/amap-satellite',
          '/components/amap-tilelayer',
          '/components/amap-traffic',
          '/components/amap-buildings',
        ]
      },
      {
        title: '插件',
        collapsable:false,
        children: [
          '/components/amap-control',
          '/components/amap-controlbar',
          '/components/amap-maptype',
          '/components/amap-scale',
          '/components/amap-toolbar',
          '/components/amap-overview',
          '/components/amap-overlays-editor',
          '/components/amap-overlays-rect-editor',
          '/components/amap-overlays-circle-editor',
          '/components/amap-overlays-ellipse-editor',
        ]
      },
    ]
  }
}