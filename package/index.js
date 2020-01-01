import AmapMap from './elements/map.vue'
import AmapMarker from './elements/marker.vue'
import AmapPolyline from './elements/polyline.js'
import InfoWindow from './elements/infowindow.vue'
import MassMarks from './elements/massmarks'
import AmapPolygon from './elements/polygon.js'
// import LocaHeatmap from './loca/heatmap'
import MapBounds from './widgets/bounds.vue'
import { AMapRoadnet, AMapSatellite, AMapTilelayer, AMapTraffic } from './layer/index'
import { AMapControlBar, AMapMapType, AMapScale, AMapToolBar, AMapOverView } from './control/index'


export { 
  AmapMap,
  AmapMarker,
  AmapPolyline,
  MassMarks,
  InfoWindow,
  AmapPolygon,
  MapBounds,
  AMapRoadnet,
  AMapSatellite,
  AMapTilelayer,
  AMapTraffic,
  AMapControlBar,
  AMapMapType,
  AMapScale, 
  AMapToolBar, 
  AMapOverView
}