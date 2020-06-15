const dfs = (root) => {
  const result = []
  const stack = []
  stack.push(root)
  while (stack.length !== 0) {
    let node = stack.pop()
    if (node) {
      result.push(node.value)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
  }
  return result
}

const dfsr = (root) => {
  const result = []
  const dfs = (node) => {
    if (node) {
      result.push(node.value)
      dfs(node.left)
      dfs(node.right)
    }
  }
  dfs(root)
  return result
}

module.exports = { dfs, dfsr }
