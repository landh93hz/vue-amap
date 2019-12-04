const pending = Symbol('pending')
const finish = Symbol('finish')
const error = Symbol('error')

class AMapManager {
  _status
  _map
  _callbacks = []

  constructor() {
    this._status = pending
  }

  get map() {
    return this._map
  }
  set map(val) {
    this._map = val
    this.status = finish
  }

  get status() {
    return this._status
  }
  set status(val) {
    if (
      this.status === error ||
      this.status === finish ||
      val === pending
    ) {
      return
    }
    while(this._callbacks.length > 0) {
      let handler = this._callbacks.shift()
      if (!handler) {
        continue
      }
      let { resolve, reject } = handler
      if (val === finish) {
        resolve(this.map)
      }
      if (val === error) {
        reject && reject(this.map, 'map is undefined')
      }
    }
    this._status = val
  } 

  then(resolve, reject) {
    switch(this.status) {
      case finish: {
        resolve(this.map)
        break
      }
      case error: {
        reject && reject(this.map)
        break
      }
      case pending: {
        let handler = { resolve, reject }
        this._callbacks.push(handler)
        break
      }
      default: {
        throw new Error('unexpected status of amap manager')
      }
    }
  }
}

export const manager = new AMapManager()