/**
 * @param {TreeNode} root
 * @return {boolean}
 * @tag tree
 * @description
[平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
 */
var isBalanced = function (root) {
  if (!root) return true
  const depth = (root) => (root ? Math.max(depth(root.left), depth(root.right)) + 1 : 0)
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
}
