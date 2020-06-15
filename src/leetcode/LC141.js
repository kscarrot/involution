/**
 * @param {ListNode} head
 * @return {boolean}
 * @tag 链表
 * @description
[环形链表](https://leetcode-cn.com/problems/linked-list-cycle/) 
 */
var hasCycle = function (head) {
  if (head === null) {
    return false
  }
  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
