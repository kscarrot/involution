/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @tag 链表
 * @description
[合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
 */

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  let p = new ListNode('head node')
  const head = p

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      p.next = l1
      l1 = l1.next
      p.next.next = null
    } else {
      p.next = l2
      l2 = l2.next
      p.next.next = null
    }
    p = p.next
  }

  l1 ? (p.next = l1) : (p.next = l2)
  return head.next
}
