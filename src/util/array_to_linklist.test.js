const { arrayToLinkList } = require('./array_to_linklist')

test('test jest', () => {
  const l = arrayToLinkList([1, 2, 3])
  expect(l.val).toBe(1)
  expect(l.next.val).toBe(2)
  expect(l.next.next.val).toBe(3)
  expect(l.next.next.next).toBe(null)
})
