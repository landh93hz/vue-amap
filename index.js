import {
  AmapMap,
  AmapMarker
} from './package/index'

import { amapLoader } from './package/util/apiloader'

// const amapLoader = new ApiLoader()
// const locaLoader = new ApiLoader()

export default {
  install(vm, options={}) {
    
    const amapUrl = 'https://webapi.amap.com/maps'

    amapLoader.init(amapUrl, options)


    vm.component(AmapMap.name, AmapMap)
    vm.component(AmapMarker.name, AmapMarker)
    // vm.component(AmapPolygon.name, AmapPolygon)
    // vm.component(AmapPolyline.name, AmapPolyline)
  }
}