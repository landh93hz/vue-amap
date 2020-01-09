import { amapLoader } from '..//util/apiloader'
import layerFactory from './factory'

// 卫星图层
const satellite = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer.Satellite)
  })
})
// 路网图层
const roadnet = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.TileLayer.RoadNet)
  })
})
// 交通图
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

// 楼块图层
const buildings = new Promise(resolve => {
  amapLoader.then(AMap => {
    resolve(AMap.Buildings)
  })
})
const buildingOptions = {
  heightFactor: Number,
  merge: Boolean,
  sort: Boolean
}

export const AMapSatellite = layerFactory(satellite, 'amap-satellite')
export const AMapRoadnet = layerFactory(roadnet, 'amap-roadnet')
export const AMapTraffic = layerFactory(traffic, 'amap-traffic', trafficOptions)
export const AMapTilelayer = layerFactory(tilelayer, 'amap-tilelayer')
export const AMapBuildings = layerFactory(buildings, 'amap-buildings', buildingOptions)