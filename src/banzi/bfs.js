const bfs = (root) => {
  const result = []
  const queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let node = queue.shift()
    if (node) {
      result.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return result
}

module.exports = { bfs }
