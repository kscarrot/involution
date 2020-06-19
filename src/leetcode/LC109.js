/**
 * @param {ListNode} head
 * @return {TreeNode}
 * @tag 链表
 * @description
[有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)
 */
var sortedListToBST = function (head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)

  const headNode = new ListNode(null)
  headNode.next = head
  let fast = head
  let slow = head
  let preSlow = headNode
  while (fast && fast.next) {
    preSlow = preSlow.next
    slow = slow.next
    fast = fast.next.next
  }
  const treeNode = new TreeNode(slow.val)
  const rightHead = slow.next
  slow.next = null
  preSlow.next = null
  treeNode.left = sortedListToBST(head)
  treeNode.right = sortedListToBST(rightHead)
  return treeNode
}
