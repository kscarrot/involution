/**
 * @param {number} n
 * @return {number}
 * @tag dp
 * @description
[不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)
 */

// g(n) = f(1) + f(2) + ... +f(n)
// f(n) = g(i) * g(n-i)
var numTrees = function (n) {
  //下面要求和,所以需要初始化为0
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
}

//卡塔兰数
// var numTrees = function (n) {
//   let C = 1
//   for (let i = 0; i < n; ++i) {
//     C = (C * 2 * (2 * i + 1)) / (i + 2)
//   }
//   return C
// }
