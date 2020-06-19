/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
[删除排序链表中的重复元素II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  const headNode = new ListNode(null)
  headNode.next = head
  let pre = headNode
  let cur = headNode.next
  while (cur && cur.next) {
    let isDuplicates = false
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next
      isDuplicates = true
    }
    if (isDuplicates) {
      pre.next = cur.next
      cur = cur.next
    } else {
      pre = pre.next
      cur = cur.next
    }
  }

  return headNode.next
}
