/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)
 */
var insertionSortList = function (head) {
  if (!head || !head.next) return head
  const headNode = new ListNode(null)
  let pre = headNode
  let cur = head
  let next = null
  while (cur) {
    next = cur.next
    while (pre.next && pre.next.val < cur.val) {
      pre = pre.next
    }
    cur.next = pre.next
    pre.next = cur

    pre = headNode
    cur = next
  }
  return headNode.next
}
