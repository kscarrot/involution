/**
 * @param {number[][]} grid
 * @return {number}
 * @tag dp 
 * @description
[最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
 */
//注意边界的初始化
var minPathSum = function (grid) {
  const row_size = grid.length
  const col_size = grid[0].length
  const dp = new Array(row_size).fill(null).map(() => [])
  dp[0][0] = grid[0][0]
  for (let i = 1; i < row_size; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < col_size; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }
  for (let i = 1; i < row_size; i++) {
    for (let j = 1; j < col_size; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[row_size - 1][col_size - 1]
}
