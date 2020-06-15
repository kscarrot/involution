/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @tag 链表
 * @description
[相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/) 
 */
var getIntersectionNode = function (headA, headB) {
  var pA = headA
  var pB = headB
  while (pA !== pB) {
    pB = pB ? pB.next : headA
    pA = pA ? pA.next : headB
  }
  return pA
}
