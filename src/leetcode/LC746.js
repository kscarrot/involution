/**
 * @param {number[]} cost
 * @return {number}
 * @tag dp
 * @description
[使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
 */
var minCostClimbingStairs = function (cost) {
  const start = Math.min(cost[0], cost[1])
  const dp = [0, start]
  for (i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 1], dp[i - 1] + cost[i])
  }
  return dp[cost.length - 1]
}
