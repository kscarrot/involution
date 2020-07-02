/**
 * @param {number[][]} A
 * @return {number[][]}
 * @tag array
 * @description
[转置矩阵](https://leetcode-cn.com/problems/transpose-matrix/)
 */
var transpose = function (A) {
  if (A.length === 0) return []
  const row_size = A.length
  const col_size = A[0].length
  const result = new Array(col_size).fill(null).map(() => [])
  for (let i = 0; i < col_size; i++) {
    for (let j = 0; j < row_size; j++) {
      result[i][j] = A[j][i]
    }
  }
  return result
}
