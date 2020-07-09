/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 * @tag dp
 * @description
[零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/)
 */
var change = function (amount, coins) {
  //dp[i][j] 前i个硬币 总和为j的  组合数
  // dp[i][j] = dp[i-1][j] +  dp[i][j-coins[i]]
  const dp = new Array(coins.length + 1).fill(null).map(() => new Array(amount + 1).fill(null))
  for (let j = 0; j < amount + 1; j++) {
    dp[0][j] = 0
  }
  for (let i = 0; i < coins.length + 1; i++) {
    dp[i][0] = 1
  }
  dp[0][0] = 1

  for (let i = 1; i < coins.length + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j - coins[i - 1] >= 0) {
        dp[i][j] += dp[i][j - coins[i - 1]]
      }
    }
  }
  return dp[coins.length][amount]
}
