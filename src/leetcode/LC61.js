/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * @tag 链表
[旋转链表](https://leetcode-cn.com/problems/rotate-list/)
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head
  const headNode = new ListNode(null)
  headNode.next = head

  let pre = headNode
  let cur = head
  let length = 0
  let tail = null
  while (cur) {
    pre = pre.next
    cur = cur.next
    length++
  }
  if (k % length === 0) return head
  tail = pre
  let offset = length - (k % length)

  pre = headNode
  cur = headNode.next

  while (offset !== 0) {
    pre = pre.next
    cur = cur.next
    offset--
  }

  tail.next = headNode.next
  headNode.next = cur
  pre.next = null

  return headNode.next
}
