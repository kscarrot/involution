/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @tag tree
 * @description
[二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
 */

//递归思路
//对于当前root 如果 p或q等于root 那么root就是最近公共祖先
//对于当前root  如果 p q  分别在root左右子树  那么 root就是最近公共祖先
//否则p,q在左子树或者柚子树
//遇到空直接返回root
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  return left ? left : right
}

//其他做法: 遍历一遍储存父节点,然后对p,向上递归拿到一个路径,存表  接着对p向上递归,第一个能在表里查到值就是最近公共祖先
