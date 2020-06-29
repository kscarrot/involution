/**
 * @param {number[]} prices
 * @return {number}
 * @tag dp
 * @description
[买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
 */

//此题常规解法求最大最小值做差就行
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0
  const size = prices.length
  const dp = [0]
  let min_price = prices[0]
  for (let i = 1; i < size; i++) {
    min_price = Math.min(min_price, prices[i])
    dp[i] = Math.max(dp[i - 1], prices[i] - min_price)
  }
  return dp[size - 1]
}
