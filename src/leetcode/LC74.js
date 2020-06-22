/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @tag 二分
 * @description
[搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  const m = matrix[0].length
  const n = matrix.length
  let l = 0
  let r = m * n - 1
  while (l < r) {
    let mid = (l + r) >> 1
    if (matrix[Math.floor(mid / m)][mid % m] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return matrix[Math.floor(l / m)][l % m] === target
}
