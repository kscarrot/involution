/**
 * @param {number[]} nums
 * @return {number}
 * @tag dp
 * @description
[最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
 */
var maxSubArray = function (nums) {
  // dp[i]  以i结尾的最大子序和
  const dp = []
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }
  let result = -Infinity

  for (let i = 0; i < nums.length; i++) {
    result = Math.max(result, dp[i])
  }
  return result
}
