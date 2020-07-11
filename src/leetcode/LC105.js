/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * @tag tree
 * @description
[从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  if (preorder.length === 1) return new TreeNode(preorder[0])
  const root = new TreeNode(preorder[0])
  const rootIndex = inorder.findIndex((v) => v === preorder[0])
  const leftInorder = inorder.slice(0, rootIndex)
  const rightInorder = inorder.slice(rootIndex + 1)
  const leftPreorder = preorder.filter((v) => leftInorder.findIndex((k) => k === v) !== -1)
  const rightPreorder = preorder.filter((v) => rightInorder.findIndex((k) => k === v) !== -1)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
}
