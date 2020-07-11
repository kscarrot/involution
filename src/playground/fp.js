const easyCompose = (...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), ...args)

const compose = (...fns) => {
  if (fns.length === 0) {
    return (arg) => arg
  }

  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

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

module.exports = { easyCompose, compose, curry, reduce }
