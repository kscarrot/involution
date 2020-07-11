const { compose } = require('./fp')
/**
 *
 * @param {function} reducer
 * @param {object} preloadedState
 */
const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState)
  }

  const store = {}
  store.state = preloadedState
  store.listensers = []

  store.subscribe = (listenser) => {
    store.listensers.push(listenser)
  }

  store.dispatch = (action) => {
    store.state = reducer(store.state, action)
    store.listensers.forEach((listenser) => listenser())
  }

  store.getState = () => store.state

  return store
}

const applyMidware = (...midwares) => (createStore) => (reducer, preloadedState) => {
  const store = createStore(reducer, preloadedState)
  let dispatch = () => {
    throw new Error('midaware dispatch error')
  }

  const midwareAPI = {
    getState: store.getState,
    dispatch: (action, preloadedState) => dispatch(action, preloadedState),
  }

  const chain = midwares.map((midware) => midware(midwareAPI))
  dispatch = compose(...chain)(store.dispatch)

  return { ...store, dispatch }
}

module.exports = { createStore, applyMidware }
