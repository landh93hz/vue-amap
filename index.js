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
  AMapOverView,
  AMapBuildings,
  MassMarks,
  InfoWindow,
  LocaHeatmap
} from './package/index';

import { amapLoader } from './package/util/apiloader';

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
  AMapOverView,
  AMapBuildings,
  MassMarks,
  InfoWindow,
  LocaHeatmap
];


export default {
  install(vm, options = {}) {
    
    const AMAP_URL = 'https://webapi.amap.com/maps';

    amapLoader.init(AMAP_URL, options);

    components.forEach(comp => {
      vm.component(comp.name, comp);
    });
  }
};