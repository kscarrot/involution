const STATE = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  reject: 'reject',
}

class MyPromise {
  constructor(executor) {
    this.state = STATE.pending
    this.value = null
    this.reason = null
    this.onFulfilledArray = []
    this.onRejectedArray = []

    const resovle = (value) => {
      setTimeout(() => {
        if (this.state === STATE.pending) {
          this.state = STATE.fulfilled
          this.value = value
          this.onFulfilledArray.forEach((fn) => fn(value))
        }
      })
    }

    const reject = (reason) => {
      setTimeout(() => {
        if (this.state === STATE.pending) {
          this.state = STATE.reject
          this.reason = reason
          this.onRejectedArray.forEach((fn) => fn(reason))
        }
      })
    }

    try {
      executor(resovle, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    let self = this
    let newPromise
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }

    newPromise = new MyPromise((resolve, reject) => {
      if (this.state === STATE.fulfilled) {
        onFulfilled(self.value)
      }

      if (this.state === STATE.reject) {
        onRejected(self.reason)
      }

      if (this.state === STATE.pending) {
        this.onFulfilledArray.push(() => {
          setTimeout(() => {
            try {
              self.resolvePromise(newPromise, onFulfilled(self.value), resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedArray.push(() => {
          setTimeout(() => {
            try {
              self.resolvePromise(newPromise, onRejected(self.reason), resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return newPromise
  }

  resolvePromise(newPromise, x, resolve, reject) {
    let self = this
    let called = false

    if (x === newPromise) {
      return reject(new TypeError('cycle promise'))
    }

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      try {
        let then = x.then
        if (typeof then === 'function') {
          then.call(
            x,
            (y) => {
              if (called) return
              called = true
              self.resolvePromise(newPromise, y, resolve, reject)
            },
            (err) => {
              if (called) return
              called = true
              reject(err)
            },
          )
        } else {
          if (called) return
          called = true
          resolve(x)
        }
      } catch (error) {
        if (called) return
        called = true
        reject(error)
      }
    } else {
      resolve(x)
    }
  }
}

module.exports = { MyPromise }
