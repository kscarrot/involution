/**
 * @param {number[]} prices
 * @return {number}
 * @tag dp
 * @description
[最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0
  const size = prices.length
  const dp = new Array(size).fill(null).map(() => [])

  dp[0][0] = 0
  dp[0][1] = -prices[0]
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1])
  for (let i = 2; i < size; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
  }
  return Math.max(dp[size - 1][0], dp[size - 1][1])
}
