class EventEmitter {
  constructor() {
    this.eventList = Object.create(null)
  }

  on(type, handler) {
    if (this.eventList[type]) {
      return
    } else {
      this.eventList[type] = []
      this.eventList[type].push(handler)
    }
  }

  off(type, handler) {
    if (this.eventList[type]) {
      this.eventList[type].splice(this.eventList[type].indexOf(handler) >>> 0, 1)
    }
  }

  once(type, handler) {
    let isUsed = false
    const wrapFn = (...args) => {
      if (isUsed) {
        this.off(type, wrapFn)
      } else {
        isUsed = true
        handler(...args)
      }
    }
    this.on(type, wrapFn)
  }

  emit(type, ...args) {
    let fns = this.eventList[type] || []
    for (const handler of fns) {
      handler(...args)
    }
  }
}

module.exports = { EventEmitter }
