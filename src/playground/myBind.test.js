const { myCall, myBind } = require('./myBind')
describe('test myBind', () => {
  //node  顶层的  this 和 global 是两个东西
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
    //箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
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
