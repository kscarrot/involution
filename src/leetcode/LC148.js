/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tag 链表 排序
 * @description
[排序链表](https://leetcode-cn.com/problems/sort-list/)
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  if (!head.next.next) {
    let pair1 = head
    let pair2 = head.next
    if (pair1.val < pair2.val) {
      return head
    } else {
      head = pair2
      pair2.next = pair1
      pair1.next = null
      return head
    }
  }

  const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2
    if (!l2) return l1

    let p = new ListNode(null)
    const head = p

    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        p.next = l1
        l1 = l1.next
        p.next.next = null
      } else {
        p.next = l2
        l2 = l2.next
        p.next.next = null
      }
      p = p.next
    }

    l1 ? (p.next = l1) : (p.next = l2)
    return head.next
  }

  let fast = head
  let mid = head

  while (fast && fast.next) {
    fast = fast.next.next
    mid = mid.next
  }

  const list1 = head
  const list2 = mid.next
  mid.next = null

  return mergeTwoLists(sortList(list1), sortList(list2))
}
