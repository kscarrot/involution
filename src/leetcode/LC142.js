/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[环形链表II](https://leetcode-cn.com/problems/linked-list-cycle-ii/) 
 */

var detectCycle = function (head) {
  //LC141 判断是否有环
  if (head === null) return null
  let slow = head
  let fast = head
  let hasCycle = false
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      hasCycle = true
      break
    }
  }

  // 无环返回 null
  if (!hasCycle) return null

  // 有环  将指针置于head 与slow相遇即为入口节点
  let point = head
  while (point !== slow) {
    point = point.next
    slow = slow.next
  }
  return point
}
