/**
 * @param {number[]} nums
 * @return {number[][]}
 * @tag 回溯 dfs
 * @description
[全排列](https://leetcode-cn.com/problems/permutations/)
 */
var permute = function (nums) {
  if (nums.length === 0) return []
  const result = []
  const dfs = (nums, acc = []) => {
    if (acc.length === nums.length) {
      result.push(acc.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      const e = nums[i]
      if (acc.includes(e)) continue
      acc.push(e)
      dfs(nums, acc)
      acc.pop()
    }
  }
  dfs(nums)
  return result
}
