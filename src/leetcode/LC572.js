/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * @tag tree
 * @description
[另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
 */
var isSubtree = function (s, t) {
  if (!s || !t) return false

  if (isSameTree(s, t)) return true
  if (isSubtree(s.right, t)) return true
  if (isSubtree(s.left, t)) return true
  return false
}

const isSameTree = (t1, t2) => {
  if (!t1 && !t2) return true
  if (!t1 && t2) return false
  if (t1 && !t2) return false
  return t1.val === t2.val && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
}
