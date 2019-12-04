import AmapMap from './elements/map.vue'
import AmapMarker from './elements/marker.vue'
import AmapPolyline from './elements/polyline'
import InfoWindow from './elements/infowindow.vue'
import MassMarks from './elements/massmarks'
import AmapPolygon from './elements/polygon'
import LocaHeatmap from './loca/heatmap'
import layerFactory from './layer/factory'
import AMap from 'AMap'
import MapBounds from './widgets/bounds.vue'

const SatelliteLayer = layerFactory(AMap.TileLayer.Satellite, 'SatelliteLayer')
const RoadNet = layerFactory(AMap.TileLayer.RoadNet, 'RoadNet')


export { 
  AmapMap,
  AmapMarker,
  AmapPolyline,
  MassMarks,
  InfoWindow,
  AmapPolygon,
  LocaHeatmap,
  SatelliteLayer,
  RoadNet,
  MapBounds
}