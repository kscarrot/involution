/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

//暴力 dp[i] = min ( dp[i- coink]+1 , ... )
// var coinChange = function (coins, amount) {
//   const dp = (n) => {
//     if (n === 0) return 0
//     if (n < 0) return -1
//     let result = Infinity
//     for (coin of coins) {
//       let sub = dp(n - coin)
//       if (sub === -1) continue
//       result = Math.min(result, sub + 1)
//     }
//     return result
//   }

//   return dp(amount)
// }

//备忘录
var coinChange = function (coins, amount) {
  const memo = {}
  const dp = (n) => {
    if (memo[n]) return memo[n]
    if (n === 0) return 0
    if (n < 0) return -1
    let result = Infinity
    for (coin of coins) {
      let sub = dp(n - coin)
      if (sub === -1) continue
      result = Math.min(result, sub + 1)
    }
    memo[n] = result === Infinity ? -1 : result
    return memo[n]
  }

  return dp(amount)
}

//dp
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
