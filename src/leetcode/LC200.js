/**
 * @param {character[][]} grid
 * @return {number}
 * @tag dfs
 * @description
[岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
 */
var numIslands = function (grid) {
  if (grid.length === 0) return 0
  const row = grid.length
  const col = grid[0].length
  let result = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        result++
        const dfs = (x, y) => {
          if (x < 0 || y < 0 || x >= row || y >= col || grid[x][y] !== '1') return
          grid[x][y] = '0'
          dfs(x + 1, y)
          dfs(x - 1, y)
          dfs(x, y + 1)
          dfs(x, y - 1)
        }
        dfs(i, j)
      }
    }
  }

  return result
}
