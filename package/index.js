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
import AmapText from './elements/text';
import AmapEllipse from './elements/ellipse';
import AmapEllipseEditor from './plugins/ellipse-editor';

import AmapPolylineEditor from './plugins/polyline-editor';
import AmapPolygonEditor from './plugins/polygon-editor';

import LocaHexagon from './loca/hexagon';
import Loca from './loca/loca';
import LabelsLayer from './elements/labelsLayer.vue';
import LabelMarker from './elements/labelmarker.js';

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
  AmapText,
  AmapEllipse,
  AmapEllipseEditor,
  LocaHexagon,
  AmapPolylineEditor,
  AmapPolygonEditor,
  Loca,
  LabelsLayer,
  LabelMarker
};
