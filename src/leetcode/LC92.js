/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 * @tag 链表
 * @description
[反转链表II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
 */
var reverseBetween = function (head, m, n) {
  if (!head || !head.next) return head
  const headNode = new ListNode(null)
  headNode.next = head

  let prem = headNode
  let pren = headNode

  for (let i = 0; i < n; i++) {
    if (i < m - 1) prem = prem.next
    pren = pren.next
  }

  let curm = prem.next
  let curn = pren.next
  for (let pre = curm, cur = pre.next; cur !== curn; ) {
    let reverse = cur.next
    cur.next = pre
    pre = cur
    cur = reverse
  }

  prem.next = pren
  curm.next = curn

  return headNode.next
}
