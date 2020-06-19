/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表 前缀和
 * @description
[从链表中删去总和值为零的连续节点](https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)
 */
var removeZeroSumSublists = function (head) {
  const headNode = new ListNode(null)
  headNode.next = head
  const map = {}
  let cur = headNode
  let sum = 0
  while (cur) {
    sum += cur.val
    map[sum] = cur
    cur = cur.next
  }
  sum = 0
  cur = headNode
  while (cur) {
    sum += cur.val
    cur.next = map[sum].next
    cur = cur.next
  }
  return headNode.next
}
