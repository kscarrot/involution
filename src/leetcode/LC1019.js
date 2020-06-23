/**
 * @param {ListNode} head
 * @return {number[]}
 * @tag 链表 单调栈
 * @description
[链表中的下一个更大节点](https://leetcode-cn.com/problems/next-greater-node-in-linked-list/)
 */
var nextLargerNodes = function (head) {
  if (!head) return []
  let array = []
  let cur = head
  while (cur) {
    array.push(cur.val)
    cur = cur.next
  }
  const stack = []
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array[i]
    while (stack.length !== 0 && stack[stack.length - 1] <= element) {
      stack.pop()
    }
    if (stack.length) array[i] = stack[stack.length - 1]
    else array[i] = 0
    stack.push(element)
  }
  return array
}
