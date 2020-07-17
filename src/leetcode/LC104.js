/**
 * @param {TreeNode} root
 * @return {number}
 * @tag tree
 * @description
[二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
 */
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
