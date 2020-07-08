const compose = (...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), ...args)

const curry = (fn, arr = []) => (...args) => {
  if ([...arr, ...args].length === fn.length) {
    return fn(...arr, ...args)
  } else {
    return curry(fn, [...arr, ...args])
  }
}

const reduce = (array, fn, initialize) => {
  let result = initialize
  array.forEach((v) => (result = fn(result, v)))
  return result
}

module.exports = { compose, curry, reduce }
