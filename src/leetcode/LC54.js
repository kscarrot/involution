/**
 * @param {number[][]} matrix
 * @return {number[]}
 * @tag array
 * @description
[螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)
 */
var spiralOrder = function (matrix) {
  let temp = matrix
  let result = []
  const removeRow = (matrix, n) => matrix.splice(n, 1)
  const removeCol = (matrix, n) => {
    const result = []
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i]
      result.push(row[n])
      row = row.splice(n, 1)
    }
    return result
  }
  // top -> right -> bottom(reverse) ->  left(reverse) -> top
  let state = 'top'
  while (temp.length !== 0 && temp[0].length !== 0) {
    switch (state) {
      case 'top':
        const toprow = removeRow(temp, 0)
        result = result.concat(toprow[0])
        state = 'right'
        break
      case 'right':
        const rightcol = removeCol(temp, temp[0].length - 1)
        result = result.concat(rightcol)
        state = 'bottom'
        break
      case 'bottom':
        const bottomrow = removeRow(temp, temp.length - 1)
        result = result.concat(bottomrow[0].reverse())
        state = 'left'
        break
      case 'left':
        const leftcol = removeCol(temp, 0)
        result = result.concat(leftcol.reverse())
        state = 'top'
        break
    }
  }
  return result
}

;[9, 3, 15, 20, 7].findIndex(9)
