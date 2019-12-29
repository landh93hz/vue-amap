import { amapLoader } from '..//util/apiloader'
import layerFactory from './factory'

const satellite = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer.Satellite)
  })
})
const roadnet = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer.RoadNet)
  })
})
const traffic = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer.Traffic)
  })
})
const trafficOptions = {
  autoRefsh: { type: Boolean, default: false },
  interval: { type: Number, default: 180 }
}

const tilelayer = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer)
  })
})

export const AMapSatellite = layerFactory(satellite, 'amap-satellite')
export const AMapRoadnet = layerFactory(roadnet, 'amap-roadnet')
export const AMapTraffic = layerFactory(traffic, 'amap-traffic', trafficOptions)
export const AMapTilelayer = layerFactory(tilelayer, 'amap-tilelayer')