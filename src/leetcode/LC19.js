/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @tag 链表
 * @description
[移除倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
 */
var removeNthFromEnd = function (head, n) {
  let fast = head
  for (let i = 1; i <= n - 1; i++) {
    fast = fast.next
  }
  let slow = head
  let prev = null
  while (fast.next) {
    prev = slow
    fast = fast.next
    slow = slow.next
  }
  if (prev === null) {
    return slow.next
  } else {
    prev.next = slow.next
  }
  return head
}
