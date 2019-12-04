import {
  AmapMap,
  AmapMarker,
  AmapPolygon,
  AmapPolyline
} from './package/index'

export default {
  install(vm, options={}) {
    
    // const { key='', plugins=[], version='1.4.15' } = options
    // const $mapScript = document.createElement('script')
    // const pluginParams = plugins.join(',')
    // const amapApiUrl = 
    //   `https://webapi.amap.com/maps?v${version}&key=${key}` + 
    //   ( plugins.length > 0 `&plugin=${pluginParams}` )
    // $mapScript.src = amapApiUrl
    // document.head.appendChild($mapScript)
    
    // const locaUrl = 'https://webapi.amap.com/loca?key=99416a9c9b1e31a0d57f2733ac4e8983&v=1.3.0'
    // const $locaScript = document.createElement('script')
    // $locaScript.src = locaUrl
    // document.appendChild($locaScript)

    vm.component(AmapMap.name, AmapMap)
    vm.component(AmapMarker.name, AmapMarker)
    vm.component(AmapPolygon.name, AmapPolygon)
    vm.component(AmapPolyline.name, AmapPolyline)
  }
}