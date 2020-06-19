/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @tag 链表
 * @description
[两数相加](https://leetcode-cn.com/problems/add-two-numbers/)
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0)
  let tail = head
  let carry = 0
  let l1_val, l2_val, sum
  while (l1 || l2) {
    l1_val = l1 ? l1.val : 0
    l2_val = l2 ? l2.val : 0
    sum = l1_val + l2_val + carry
    carry = sum >= 10 ? 1 : 0
    tail.next = new ListNode(sum % 10)
    tail = tail.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  carry ? (tail.next = new ListNode(1)) : (tail.next = null)
  return head.next
}
