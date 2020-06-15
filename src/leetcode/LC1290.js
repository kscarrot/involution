/**
 * @param {ListNode} head
 * @return {number}
 * @tag 链表
 * @description 
[二进制链表](https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer)
 */
var getDecimalValue = function (head) {
  let result = 0
  while (head) {
    result = result * 2 + head.val
    head = head.next
  }
  return result
}
