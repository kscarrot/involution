/**
 * @param {TreeNode} root
 * @return {number}
 * @tag tree
 * @description
[最长同值路径](https://leetcode-cn.com/problems/longest-univalue-path/)
 */
var longestUnivaluePath = function (root) {
  let result = 0
  const dfs = (root) => {
    if (!root) return 0
    const leftChildPath = dfs(root.left)
    const rightChildPath = dfs(root.right)
    let [leftPath, rightPath] = [0, 0]
    if (root.left && root.left.val === root.val) leftPath = leftChildPath + 1
    if (root.right && root.right.val === root.val) rightPath = rightChildPath + 1
    result = Math.max(result, leftPath + rightPath)
    return Math.max(rightPath, leftPath)
  }
  dfs(root)
  return result
}
