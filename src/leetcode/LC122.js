/**
 * @param {number[]} prices
 * @return {number}
 * @tag dp
 * @description
[买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
 */
var maxProfit = function (prices) {
  const size = prices.length
  const dp = new Array(size).fill(null).map(() => [])
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < size; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return Math.max(dp[size - 1][0], dp[size - 1][1])
}
