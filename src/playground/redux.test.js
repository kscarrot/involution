const { createStore, applyMidware } = require('./redux')

describe('test redux fuction', () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }

  it('state will change when action active and call lisensers', () => {
    const mockcall = jest.fn()
    const initState = { count: 0 }
    const newStore = createStore(countReducer, initState)
    newStore.subscribe(() => {
      mockcall(newStore.getState().count)
    })

    newStore.dispatch({ type: 'increment' })
    newStore.dispatch({ type: 'increment' })
    expect(mockcall.mock.calls.length).toBe(2)
    expect(mockcall.mock.calls[0][0]).toBe(1)
    expect(mockcall.mock.calls[1][0]).toBe(2)

    newStore.dispatch({ type: 'decrement' })
    expect(mockcall.mock.calls[2][0]).toBe(1)
  })

  it('midware will call by chain', () => {
    const testfn = jest.fn()
    const logger = (store) => (next) => (action) => {
      testfn(action)
      let result = next(action)
      testfn(store.getState())
      return result
    }

    const midwareStore = createStore(countReducer, { count: 0 }, applyMidware(logger))
    midwareStore.dispatch({ type: 'increment' })
    expect(midwareStore.getState().count).toBe(1)
    expect(testfn.mock.calls[0][0]).toStrictEqual({ type: 'increment' })
    expect(testfn.mock.calls[1][0]).toStrictEqual({ count: 1 })
  })
})
