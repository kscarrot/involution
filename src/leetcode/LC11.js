/**
 * @param {number[]} height
 * @return {number}
 * @tag 双指针
 * @description
[盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)
 */

//暴力做法很简单 双指针解法需要弄明白收缩的条件
var maxArea = function (height) {
  let [left, right] = [0, height.length - 1]
  let max = -Infinity
  while (left < right) {
    let current = (right - left) * Math.min(height[left], height[right])
    if (current > max) max = current
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}
