/**
 * @param {any} val 单链表节点的值
 * @property {ListNode|null} next 单链表的下一个元素
 */
class ListNode {
  val: any
  next: ListNode | null
  constructor(val: any) {
    this.val = val
    this.next = null
  }
}
