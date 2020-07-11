const mySetInterval = (callback, ms = 1000, ...args) => {
  const interval = (...intervalArgs) => {
    setTimeout(() => {
      setTimeout(interval, ms, ...intervalArgs)
      callback(...intervalArgs)
    }, ms)
  }

  interval(...args)
}

// mySetInterval((i) => console.log(i), 1000, 2)
