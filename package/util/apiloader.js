
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
  
  return new Promise((resolve, reject) => {
    // 如果在html文件中手动添加了script标签，则直接返回window对象上的属性
    if (window[name]) {
      resolve(window[name]);
    } else {
      const $script = document.createElement('script');
      const src = url + '?';
      let { plugins } = options;
      if (plugins) {
        delete options.plugins;
        if (Array.isArray(plugins)) {
          plugins = plugins.map(item => {
            if (typeof item === 'string') {
              if (item.split('.').length === 1) {
                return `AMap.${item}`;
              }
              return item;
            } else {
              throw new Error('member of plugins must be string');
            }
          });
          options.plugin = plugins.join(',');
        }
        if (typeof plugins === 'string') {
          options.plugin = plugins; 
        }
      }
      let params = '';
      for (const key in options) {
        params += `${key}=${options[key]}&`;
      }
      params.slice(0, params.length - 1);
      
      $script.src = src + params;
      document.head.append($script);
      $script.onload = function onload() {
        if (window[name]) {
          resolve(window[name]);
        } else {
          reject(undefined);
        }
      };
    }
  });
}


class ApiLoader {
  
  constructor(name) {
    this.callbacks = {
      resolve: [],
      reject: []
    };
    this._status = 'pending';
    this.value = null;
    this.reason = '';
    this.installed = false;
    this.name = name;
  }
  
  /**
   * 
   * @param {String} url 
   * @param {Object} options 
   */
  init(url, options) {
    if (this.installed) {
      throw new Error(`Reapted loading API of ${this.name}`);
    }
    const lazyLoader = lazyLoadApi(this.name, url, options);
    lazyLoader.then((...value) => {
      this.value = value;
      this.status = 'resolved';
      this.installed = true;
    }).catch(() => {
      this.reason = `Failed to load ${name} API at given ${url}`;
      this.status = 'rejected';
    });
  }

  get status() {
    return this._status;
  }

  set status(newStat) {
    if (this.status !== 'pending') return;

    this._status = newStat;
    if (this.status === 'resolved') {
      while (this.callbacks.resolve.length > 0) {
        const onFullfill = this.callbacks.resolve.shift();
        onFullfill(...this.value);
      }
    } else {
      while (this.callbacks.reject.length > 0) {
        const onReject = this.callbacks.reject.shift();
        onReject(this.reason);
      }
    }
  }

  then(resolve, reject) {
    switch (this.status) {
      case 'pending': {
        if (resolve && typeof(resolve) === 'function') {
          this.callbacks.resolve.push(resolve);
        }
        if (reject && typeof(reject) === 'function') {
          this.callbacks.reject.push(reject);
        }
        break;
      }
      case 'resolved': {
        resolve(...this.value);
        break;
      }
      case 'rejected': {
        reject(this.reason);
        break;
      }
    }
  }
}


function createLoader(name) {
  const installed = false;
  let resolveHandler, rejectHandler;
  async function init(url, options) {
    if (installed) {
      throw new Error(`Reapted loading API of ${this.name}`);
    }
    try {
      const api = await lazyLoadApi(name, url, options);
      resolveHandler && resolveHandler(api);
    } catch (err) {
      rejectHandler && rejectHandler(`Failed to load ${name} API at given ${url}`);
      throw new Error(`${err}`);
    }
  }

  const promise = new Promise((resolve, reject) => {
    resolveHandler = resolve;
    rejectHandler = reject;
  });

  promise.init = init;

  return promise;
}

export const amapLoader = createLoader('AMap');
export const locaLoader = createLoader('Loca');