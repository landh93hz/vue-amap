import AmapMap from './elements/map.vue';
import AmapMarker from './elements/marker.vue';
import AmapPolyline from './elements/polyline.js';
import InfoWindow from './elements/infowindow.vue';
import MassMarks from './elements/massmarks';
import AmapPolygon from './elements/polygon.js';
import LocaHeatmap from './loca/heatmap';
import MapBounds from './widgets/bounds.vue';
import { AMapRoadnet, AMapSatellite, AMapTilelayer, AMapTraffic, AMapBuildings } from './layer/index';
import { AMapControlBar, AMapMapType, AMapScale, AMapToolBar, AMapOverView } from './control/index';
import AmapRectangle from './elements/rectangle.js';
import AmapCircle from './elements/circle';
import AmapCircleMarker from './elements/circlemarker.vue';
import AMapCircleEditor from './plugins/circle-editor.vue';
import AmapPolyEditor from './plugins/polyeditor.vue';
import AmapRectangleEditor from './plugins/rectangle-editor.vue';
import AmapText from './elements/text'




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
  AMapOverView,
  AMapBuildings,
  LocaHeatmap,
  AmapPolyEditor,
  AmapRectangle,
  AmapRectangleEditor,
  AmapCircle,
  AmapCircleMarker,
  AMapCircleEditor,
  AmapText
};