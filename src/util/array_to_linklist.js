const { ListNode } = require('./common_node')

const arrayToLinkList = (arr) => {
  if (arr.length === 0) return null
  const head = new ListNode(arr.shift())
  let cur = head

  while (arr.length !== 0) {
    const newNode = new ListNode(arr.shift())
    cur.next = newNode
    cur = cur.next
  }

  return head
}

const listToArray = (head) => {
  const result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const printList = (head) => console.log(listToArray(head))

module.exports = { arrayToLinkList, printList }
