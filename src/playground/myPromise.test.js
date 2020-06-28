const { MyPromise } = require('./myPromise')

describe('test sync myPrmose', () => {
  it('promise state can only change one time', () => {
    const case1 = new MyPromise((resolve, reject) => {
      resolve('data')
      reject('error')
    })
    const result = { res: null, rej: null }
    case1.then(
      (value) => (result.res = value),
      (reason) => (result.rej = reason),
    )

    expect(result.res).toBe('data')
    expect(result.rej).toBe(null)
  })

  it('if onRejected is not a function , then throw error', () => {
    const case2 = new MyPromise((_, reject) => {
      reject('error')
    })
    let result = null
    case2.then(
      () => {},
      (reason) => (result = reason),
    )
    expect(result).toBe('error')

    expect(() => case2.then(() => {}, 1)).toThrowError('error')
  })

  // it('if onFuilled is not a fuction,then return value', () => {
  //   const case3 = new MyPromise((resolve, reject) => {
  //     resolve('data')
  //   })
  // })
})

describe('test async myPromise', () => {
  let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('data')
    }, 2000)
  })
  let res = null
  promise.then(
    (data) => {
      res = data
    },
    () => {},
  )
})
