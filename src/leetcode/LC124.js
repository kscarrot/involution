/**
 * @param {TreeNode} root
 * @return {number}
 * @tag tree
 * @description
[二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
 */
var maxPathSum = (root) => {
  let result = -Infinity
  const dfs = (root) => {
    if (root == null) return 0
    const left = Math.max(0, dfs(root.left))
    const right = Math.max(0, dfs(root.right))
    result = Math.max(result, left + root.val + right)
    return root.val + Math.max(left, right)
  }
  dfs(root)
  return result
}
