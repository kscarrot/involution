/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * @tag dp
 * @description
[不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  if ((m === 1) & (n === 1)) {
    return obstacleGrid[0][0] ? 0 : 1
  }
  const dp = new Array(m).fill(null).map(() => [])
  dp[0][0] = obstacleGrid[0][0] ? 0 : 1
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0]) {
      dp[i][0] = 0
    } else {
      dp[i][0] = dp[i - 1][0]
    }
  }
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i]) {
      dp[0][i] = 0
    } else {
      dp[0][i] = dp[0][i - 1]
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
        continue
      }

      if (i === 0) {
        //上方
        dp[i][j] = dp[i][j - 1]
        continue
      }

      if (j === 0) {
        //左边
        dp[i][j] = dp[i - 1][j]
        continue
      }

      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
