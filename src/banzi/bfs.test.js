const { arrayToTree } = require('../util/array_to_tree')
const { bfs } = require('./bfs')

describe('binary tree bfs', () => {
  it('bfs null', () => {
    expect(bfs(null)).toStrictEqual([])
  })

  it('bfs normal tree', () => {
    const t1 = arrayToTree([1, 2, 3, null, 5, 6, 7])
    expect(bfs(t1)).toStrictEqual([1, 2, 3, 5, 6, 7])
    const t2 = arrayToTree([1, 2, 3, null, 5, 6, 7, null, null, 10])
    expect(bfs(t2)).toStrictEqual([1, 2, 3, 5, 6, 7, 10])
  })
})
