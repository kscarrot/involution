const { easyCompose, compose, curry, reduce } = require('./fp')

describe('test fp easy  realize', () => {
  describe('test easyCompose', () => {
    const addOne = (x) => x + 1
    const addTwo = (x) => x + 2
    it('compose test serverl functions', () => {
      const addThree = easyCompose(addOne, addTwo)
      expect(addThree(0)).toBe(3)
    })

    it('compose test one function', () => {
      const addOneCompose = easyCompose(addOne)
      expect(addOneCompose(0)).toBe(1)
    })

    it('compose zero function should throw error', () => {
      const addZeroFn = easyCompose()
      expect(() => addZeroFn()).toThrowError()
    })
  })

  describe('test compose', () => {
    const addOne = (x) => x + 1
    const addTwo = (x) => x + 2
    it('compose test serverl functions', () => {
      const addThree = compose(addOne, addTwo)
      expect(addThree(0)).toBe(3)
    })

    it('compose test one function', () => {
      const addOneCompose = compose(addOne)
      expect(addOneCompose(0)).toBe(1)
    })

    it('compose zero function should return arg self', () => {
      const addZeroFn = compose()
      expect(addZeroFn(1)).toBe(1)
    })

    it('returns the first given argument if given no functions', () => {
      expect(compose()(1, 2)).toBe(1)
      expect(compose()(3)).toBe(3)
      expect(compose()(undefined)).toBe(undefined)
    })

    it('returns the first function if given only one', () => {
      const fn = () => {}

      expect(compose(fn)).toBe(fn)
    })
  })

  it('curry test', () => {
    const sumThree = (x, y, z) => x + y + z
    const newFn = curry(sumThree)
    expect(newFn(1)(2)(3)).toBe(6)
  })

  it('reduce test', () => {
    const array = [1, 2, 3]
    const resutlt = reduce(array, (acc, cur) => (acc += cur), 0)
    expect(resutlt).toBe(6)
  })
})
