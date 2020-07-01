function throttle(fn, treshhold) {
  let timeout
  let start = new Date().getTime()
  return function (...args) {
    let context = this
    let current = new Date().getTime()
    clearTimeout(timeout)
    if (current - start >= treshhold || 160) {
      fn.apply(context, args)
      start = current
    } else {
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, treshhold)
    }
  }
}
