/**
 * @param {number[]} nums
 * @return {number}
 * @tag dp
 * @description
[打家劫舍](https://leetcode-cn.com/problems/house-robber/)
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[nums.length - 1]
}
