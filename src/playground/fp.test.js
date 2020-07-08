const { compose, curry, reduce } = require('./fp')

describe('test fp easy  realize', () => {
  it('compose test', () => {
    const addOne = (x) => x + 1
    const addTwo = (x) => x + 2
    const addResult = compose(addOne, addTwo)
    expect(addResult(0)).toBe(3)
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
