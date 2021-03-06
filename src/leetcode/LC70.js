/**
 * @param {number} n
 * @return {number}
 * @tag dp
 * @description
[爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
 */
var climbStairs = function (n) {
  const dp = [1, 1]
  for (i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
