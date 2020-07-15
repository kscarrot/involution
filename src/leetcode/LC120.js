/**
 * @param {number[][]} triangle
 * @return {number}
 * @tag dp
 * @description
[三角形最小路径和](https://leetcode-cn.com/problems/triangle/)
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length).fill(null).map(() => new Array(triangle[triangle.length - 1].length))

  // dp [i][j]  第i层第j个位置的最小路径和
  dp[0][0] = triangle[0][0]
  let startSum = dp[0][0]
  for (let i = 1; i < triangle.length; i++) {
    startSum += triangle[i][0]
    dp[i][0] = startSum
  }
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 1; j < triangle[i].length; j++) {
      if (!dp[i - 1][j] && dp[i - 1][j] !== 0) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
        continue
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
    }
  }
  let min = Infinity
  for (let i = 0; i < triangle[triangle.length - 1].length; i++) {
    const current = dp[dp.length - 1][i]
    if (current < min) {
      min = current
    }
  }
  return min
}
