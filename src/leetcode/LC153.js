/**
 * @param {number[]} nums
 * @return {number}
 * @tag 二分
 * @description
[寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
 */
var findMin = function (nums) {
  let l = 0
  let r = nums.length - 1
  if (nums[l] < nums[r]) return nums[0]
  while (l < r) {
    let mid = (l + r) >> 1
    if (nums[mid] >= nums[0]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return nums[l]
}
