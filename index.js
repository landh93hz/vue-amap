import {
  AmapMap,
  AmapMarker,
  AmapPolyline,
  AmapPolygon,
  AMapRoadnet,
  AMapSatellite,
  AMapTilelayer,
  AMapTraffic,
  AMapControlBar,
  AMapMapType,
  AMapScale, 
  AMapToolBar, 
  AMapOverView
} from './package/index'

import { amapLoader } from './package/util/apiloader'

const components = [
  AmapMap,
  AmapMarker,
  AmapPolyline,
  AmapPolygon,
  AMapRoadnet,
  AMapSatellite,
  AMapTilelayer,
  AMapTraffic,
  AMapControlBar,
  AMapMapType,
  AMapScale, 
  AMapToolBar, 
  AMapOverView
]

export default {
  install(vm, options={}) {
    
    const amapUrl = 'https://webapi.amap.com/maps'

    amapLoader.init(amapUrl, options)

    components.forEach(comp => {
      vm.component(comp.name, comp)
    })
  }
}