function debounce(fn, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    let context = this
    timeout = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
