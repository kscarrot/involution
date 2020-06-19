/**
 * @param {ListNode} head
 * @return {boolean}
 * @tag 链表
 * @description
[回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)
```
1.把值转化成数组暴力判断是比较容易的方法
2.在链表上直接操作,需要结合 快慢指针找链表中点 => 边走中点反转链表 
  得到  head <- mid -> tail 这样形式的链表 再判断
```
 */


var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let fast = head
  let mid = head
  let pre = null
  let reversed = null
  while (fast && fast.next) {
    pre = mid
    mid = mid.next
    fast = fast.next.next
    pre.next = reversed
    reversed = pre
  }
  if (fast) mid = mid.next
  while (mid) {
    if (reversed.val !== mid.val) return false
    reversed = reversed.next
    mid = mid.next
  }
  return true
}
