/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @tag 链表
 * @description
 [移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)
 */
var removeElements = function (head, val) {
  const headNode = new ListNode(null)
  headNode.next = head
  let prev = headNode
  let cur = head
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next
      cur = prev.next
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return headNode.next
}
