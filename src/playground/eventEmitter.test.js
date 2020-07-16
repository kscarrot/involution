const { EventEmitter } = require('./eventEmitter')

describe('test event emitter', () => {
  const printline = (x) => console.log(x)
  const mockFn = jest.fn()
  const emiter = new EventEmitter()

  it('test eiitter.on', () => {
    emiter.on('test on', mockFn)
    emiter.emit('test on', 1)
    expect(mockFn.mock.calls[0][0]).toBe(1)
  })

  it('test emitter.off', () => {
    emiter.off('test on', mockFn)
    emiter.emit('test on', 1)
    expect(mockFn.mock.calls.length).toBe(1)
  })

  it('test emttier.once', () => {
    const newFn = jest.fn()
    emiter.once('aaa', newFn)
    emiter.emit('aaa', 1)
    emiter.emit('aaa', 1)
    expect(mockFn.mock.calls.length).toBe(1)
  })
})
