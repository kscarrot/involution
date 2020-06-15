const { myCall, myBind } = require('./myBind')
describe('test myBind', () => {
  this.x = 1
  global.x = 2
  const a = {
    x: 3,
    getX: function () {
      return this.x
    },
    getXarrow: () => this.x,
  }
  const getX = a.getX
  const getXarrow = a.getXarrow

  it('test getX defualt bind', () => {
    expect(getX()).toBe(2)
    expect(a.getX()).toBe(3)
    expect(getXarrow()).toBe(1)
    expect(a.getXarrow()).toBe(1)
  })

  it('test my call', () => {
    expect(myCall(getX, this)).toBe(1)
    expect(myCall(getX, global)).toBe(2)
    expect(myCall(getX, a)).toBe(3)
  })

  it('test my bind', () => {
    expect(myBind(getX, this)()).toBe(1)
    expect(myBind(getX, global)()).toBe(2)
    expect(myBind(getX, a)()).toBe(3)
  })
})
