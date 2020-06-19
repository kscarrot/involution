/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表
 * @description
[奇偶链表](https://leetcode-cn.com/problems/odd-even-linked-list/)
 */
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head
  const oddList = new ListNode(null)
  const evenList = new ListNode(null)
  let oddTial = oddList
  let evenTial = evenList
  let cur = head
  let index = 1
  while (cur) {
    let temp = cur
    if (index % 2) {
      oddTial.next = cur
      oddTial = oddTial.next
    } else {
      evenTial.next = cur
      evenTial = evenTial.next
    }
    index++
    cur = cur.next
    temp.next = null
  }
  oddTial.next = evenList.next
  return oddList.next
}
