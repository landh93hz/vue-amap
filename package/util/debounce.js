/**
 * 防抖函数
 * @param {Function} func 
 * @param {Number} duration 
 * @returns {Function} 防抖
 */
function debounce(func, duration = 200) {
  let timer;
  return function debouncedFunc(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func.call(this, ...args);
      clearTimeout(timer);
      timer = null;
    }, duration);
  };
}

/**
 * 节流
 * @param {Function} func 
 * @param {Number} duration 
 */
function throttle(func, duration = 500) {
  let timer;
  return function throttleFunc(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.call(this, ...args);
        clearTimeout(timer);
        timer = null;
      }, duration);
    }
  };
}

export { debounce, throttle };

// export default debounce

// 测试debounce函数
// function delay(time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }

// function greet(a, b) {
//   console.log('hello', this.name)
//   console.log(a, b)
// }

// const throttleGreet = throttle(greet)

// async function testThrottle() {
//   for (let i=0; i<10; i++) {
//     await delay(250)
//     throttleGreet.call({name: 'world'}, 1, 2)
//   }
//   for (let i=0; i<2; i++) {
//     await delay(510)
//     throttleGreet.call({name: 'World'}, 3, 4)
//   }
// }

// const debounceGreet = debounce(greet, 100)

// async function testDebounce() {
//   for (let i=0; i<10; i++) {
//     await delay(50)
//     debounceGreet.call({name: 'little world'}, 1, 2)
//   }
//   await delay(110)
//   for (let i=0; i<2; i++) {
//     await delay(120)
//     debounceGreet.call({name: 'World'}, 3, 4)
//   }
// }