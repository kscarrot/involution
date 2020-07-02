/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @tag tree
 * @description
[二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
 */
var lowestCommonAncestor = function (root, p, q) {
  const r_val = root.val
  const p_val = p.val
  const q_val = q.val
  if (p_val < r_val && q_val < r_val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p_val > r_val && q_val > r_val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}
