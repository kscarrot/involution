/**
 * @param {TreeNode} root
 * @return {number}
 * @tag tree
 * @description
[找树左下角的值](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)
 */
var findBottomLeftValue = function (root) {
  //bfs找到最后一行,然后找最左边的值
  //如何一行一行的遍历
  const bfs = (root) => {
    let last = null
    const queue = []
    queue.push(root)
    while (queue.length !== 0) {
      let node = queue.shift()
      if (node) {
        last = node.val
        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
      }
    }
    return last
  }
  return bfs(root)
}
