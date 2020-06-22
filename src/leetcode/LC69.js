/**
 * @param {number} x
 * @return {number}
 * @tag 二分
 * @description
[x的平方根](https://leetcode-cn.com/problems/sqrtx/)
 */
var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left < right) {
    let mid = (left + right + 1) >> 1
    if (mid === x / mid) return mid
    if (mid < x / mid) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}
