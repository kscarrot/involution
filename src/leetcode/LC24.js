/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head
  const headNode = new ListNode(null)
  headNode.next = head
  let pre = headNode

  while (pre.next && pre.next.next) {
    let a = pre.next
    let b = pre.next.next
    let c = pre.next.next.next
    pre.next = b
    b.next = a
    a.next = c
    pre = pre.next.next
  }

  return headNode.next
}
