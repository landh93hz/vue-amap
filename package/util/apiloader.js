
/**
 * 1、在`install`中使用manager的`init`方法
 * 2、`init`方法中会加载`AMap`或`Loca`的API
 * 3、通过promise拿到`AMap`的API之后，便会改变
 *    manager的状态，此时便会调用manager中的回调
 * 4、在地图组件中，会引入manager实例，并使用`then`
 *    方法注册回调，在回调中实例化地图组件
 */

/**
 * 懒加载指定API
 * @param {String} name 
 * @param {String} url 
 * @param {Object} options 
 */
function lazyLoadApi(name, url, options) {
  const $script = document.createElement('script')
  let src = url + '?'
  let params = ''
  for (let key in options) {
    params += `${key}=${options[key]}&`
  }
  params.slice(0, params.length - 1)
  
  $script.src = src + params
  document.head.append($script)
  return new Promise((resolve, reject) => {
    $script.onload = function() {
      if (window[name]) {
        resolve(window[name])
      } else {
        reject(undefined)
      }
    }
  })
}


class ApiLoader {
  
  constructor(name) {
    this.callbacks = {
      resolve: [],
      reject: []
    }
    this._status = 'pending'
    this.value = null
    this.reason = ''
    this.installed = false
    this.name = name
  }
  
  /**
   * 
   * @param {String} name 
   * @param {String} url 
   * @param {Object} options 
   */
  init(url, options) {
    if (this.installed) {
      throw new Error(`Reapted loading API of ${this.name}`)
    }
    const lazyLoader = lazyLoadApi(this.name, url, options)
    lazyLoader.then((...value) => {
      this.value = value
      this.status = 'resolved'
      this.installed = true
    }).catch(() => {
      this.reason = `Failed to load ${name} API at given ${url}`
      this.status = 'rejected'
    })
  }

  get status() {
    return this._status
  }

  set status(newStat) {
    if (this.status !== 'pending') return;

    this._status = newStat
    if (this.status === 'resolved') {
      while(this.callbacks.resolve.length > 0) {
        const onFullfill = this.callbacks.resolve.shift()
        onFullfill(...this.value)
      }
    } else {
      while(this.callbacks.reject.length > 0) {
        const onReject = this.callbacks.reject.shift()
        onReject(this.reason)
      }
    }
  }

  then(resolve, reject) {
    switch(this.status) {
      case 'pending': {
        if (resolve && typeof(resolve) === 'function') {
          this.callbacks.resolve.push(resolve)
        }
        if (reject && typeof(reject) === 'function') {
          this.callbacks.reject.push(reject)
        }
        break
      }
      case 'resolved': {
        resolve(...this.value)
        break
      }
      case 'rejected': {
        reject(this.reason)
        break
      }
    }
  }
}

export const amapLoader = new ApiLoader('AMap')
export const locaLoader = new ApiLoader()