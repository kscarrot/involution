const { BinaryTreeNode } = require('./common_node')

const arrayToTree = (arr) => nodeChild(0, arr)

const nodeChild = (i, arr) => {
  if (i >= arr.length) return null
  if (arr[i] === null) return null
  const root = new BinaryTreeNode(arr[i])
  root.left = nodeChild(2 * i + 1, arr)
  root.right = nodeChild(2 * i + 2, arr)
  return root
}

module.exports = { arrayToTree }
