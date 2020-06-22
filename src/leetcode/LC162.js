/**
 * @param {number[]} nums
 * @return {number}
 * @tag 二分
 * @description
[寻找峰值](https://leetcode-cn.com/problems/find-peak-element/)
 */
var findPeakElement = function (nums) {
  let [l, r] = [0, nums.length - 1]
  while (l < r) {
    let mid = (r + l) >> 1
    if (nums[mid] > nums[mid + 1]) r = mid
    else l = mid + 1
  }
  return l
}
