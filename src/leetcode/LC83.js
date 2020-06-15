/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/) 
*/
var deleteDuplicates = function (head) {
  if (!head) return null
  let p = head
  while (p.next) {
    if (p.next.val === p.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}
