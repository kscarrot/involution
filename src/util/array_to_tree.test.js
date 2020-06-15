const { arrayToTree } = require('./array_to_tree')

test('test jest', () => {
  const t = arrayToTree([1, 2, 3])
  expect(t.value).toBe(1)
})
