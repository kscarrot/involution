/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
 [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
 */
var reverseList = function (head) {
  if (!head) return null
  let cur = head.next
  let pre = head
  pre.next = null
  while (cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
