/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @tag 二分
 * @description
[在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
 */

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]

  const findStart = (nums, target) => {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
      let mid = (l + r) >> 1
      if (nums[mid] >= target) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    if (nums[l] !== target) return -1
    return l
  }

  const findEnd = (nums, target) => {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
      let mid = (l + r + 1) >> 1
      if (nums[mid] <= target) {
        l = mid
      } else {
        r = mid - 1
      }
    }
    if (nums[l] !== target) return -1
    return l
  }

  return [findStart(nums, target), findEnd(nums, target)]
}
