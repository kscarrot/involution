const { compose } = require('./koaCompose')

describe('koa compose example', () => {
  it('test run sequeue', () => {
    const fn = jest.fn()
    const context = { data: 1 }
    const addData = (context, next) => {
      context.data = context.data + 1
      next()
      context.data = context.data + 1
    }
    const log = (context, next) => {
      fn(context.data)
      next()
      fn(context.data)
    }

    compose([log, addData])(context, () => {
      fn(context.data, 'last dispatch')
    })

    expect(fn.mock.calls[0][0]).toBe(1)
    expect(fn.mock.calls[1][0]).toBe(2)
    expect(fn.mock.calls[1][1]).toBe('last dispatch')
    expect(fn.mock.calls[2][0]).toBe(3)
  })
})
