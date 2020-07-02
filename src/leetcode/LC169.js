/**
 * @param {number[]} nums
 * @return {number}
 * @tag array
 * @description
[多数元素](https://leetcode-cn.com/problems/majority-element/)
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) return nums[0]
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!hash[cur]) {
      hash[cur] = 1
      continue
    }
    hash[cur] = hash[cur] + 1
    if (hash[cur] > nums.length >> 1) return cur
  }
}
