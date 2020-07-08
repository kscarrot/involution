/**
 * @param {TreeNode} root
 * @return {number[]}
 * @tag tree
[在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)
 */
var largestValues = function (root) {
  if (!root) return []
  const bfs = (root) => {
    const result = []
    const queue = []
    queue.push(root)
    while (queue.length !== 0) {
      const level_size = queue.length
      let max = -Infinity
      for (let i = 0; i < level_size; i++) {
        const node = queue.shift()
        if (node) {
          max = Math.max(max, node.val)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
        }
      }
      result.push(max)
    }
    return result
  }
  return bfs(root)
}
