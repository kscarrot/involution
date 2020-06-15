/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @tag 链表
 * @description
[删除中间节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
