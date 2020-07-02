/**
 * @param {TreeNode} root
 * @return {boolean}
 * @tag tree
 * @description
[对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
 */
var isSymmetric = function (root) {
  return isMirror(root, root)
}

const isMirror = (root1, root2) => {
  if (root1 === null && root2 === null) return true
  if (root1 === null && root2 !== null) return false
  if (root1 !== null && root2 === null) return false
  return root1.val === root2.val && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
}
