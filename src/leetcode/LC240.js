/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @tag 二分
 * @description
[搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  const m = matrix[0].length
  const n = matrix.length
  let row = 0
  let col = m - 1
  while (row <= n - 1 && col >= 0) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] > target) {
      col--
    } else {
      row++
    }
  }
  return false
}
