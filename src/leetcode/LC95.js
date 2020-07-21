/**
 * @param {number} n
 * @return {TreeNode[]}
 * @tag tree
 * @description
[不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
 */
var generateTrees = function (n) {
  if (n === 0) return []
  const generateTreeInRange = (left, right) => {
    if (left > right) return [null]
    if (left === right) return [new TreeNode(left)]
    const result = []
    for (let i = left; i <= right; i++) {
      const leftTrees = generateTreeInRange(left, i - 1)
      const rightTrees = generateTreeInRange(i + 1, right)
      for (const leftTree of leftTrees) {
        for (const rightTree of rightTrees) {
          const root = new TreeNode(i)
          root.left = leftTree
          root.right = rightTree
          result.push(root)
        }
      }
    }
    return result
  }

  return generateTreeInRange(1, n)
}
