/**
 * @param {TreeNode} root
 * @return {number}
 */
//大量重复计算,化简为一个递归
// var diameterOfBinaryTree = function (root) {
//   const getDepth = (root) => {
//     if (!root) return 0
//     if (!root.left && !root.right) return 1
//     return Math.max(getDepth(root.right), getDepth(root.left)) + 1
//   }

//   let result = 0
//   const dfs = (root) => {
//     if (root) {
//       let diamiter = getDepth(root.left) + getDepth(root.right)
//       if (diamiter > result) result = diamiter
//       dfs(root.right)
//       dfs(root.left)
//     }
//   }
//   dfs(root)
//   return result
// }

var diameterOfBinaryTree = function (root) {
  let result = 0
  deep(root)
  return result

  function deep(root) {
    if (!root) return -1
    let left = root.left ? deep(root.left) + 1 : 0
    let right = root.right ? deep(root.right) + 1 : 0

    result = Math.max(left + right, result)
    return Math.max(left, right)
  }
}
