/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[中间节点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
 */
var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
