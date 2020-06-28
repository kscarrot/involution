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

    const resovle = (value) => {
      if (this.state === STATE.pending) {
        this.state = STATE.fulfilled
        this.value = value
      }
    }

    const reject = (reason) => {
      if (this.state === STATE.pending) {
        this.state = STATE.reject
        this.reason = reason
      }
    }

    try {
      executor(resovle, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    let self = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (error) => {
            throw error
          }
    if (this.state === STATE.fulfilled) {
      onFulfilled(self.value)
    }

    if (this.state === STATE.reject) {
      onRejected(self.reason)
    }
  }
}

module.exports = { MyPromise }
