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
  LocaHeatmap,
  AmapPolyEditor,
  AmapRectangle,
  AmapRectangleEditor
} from './package/index';

import { amapLoader, locaLoader } from './package/util/apiloader';

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
  AmapPolyEditor,
  AmapRectangle,
  AmapRectangleEditor,
  LocaHeatmap
];

const locaComponents = [
  LocaHeatmap
];


export default {
  install(vm, options = {}) {
    
    const AMAP_URL = 'https://webapi.amap.com/maps';

    amapLoader.init(AMAP_URL, options);

    components.forEach(comp => {
      vm.component(comp.name, comp);
    });

    if (options.enableLoca) {
      const LOCA_URL = 'https://webapi.amap.com/loca';
      const locaOptions = {
        key: options.key,
        v: '1.3.0'
      };
      locaLoader.init(LOCA_URL, locaOptions);
      locaComponents.forEach(comp => {
        vm.component(comp.name, comp);
      });
    }
  }
};

export {
  amapLoader,
  locaLoader
};