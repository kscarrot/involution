/**
 * @param {number[]} heights
 * @return {number}
 * @tag 单调栈
 * @description
[柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
 */

//暴力
var largestRectangleArea = function (heights) {
  if (heights.length === 0) return 0
  if (heights.length === 1) return heights[0]
  const left = Array(heights.length).fill(0)
  const right = Array(heights.length).fill(heights.length)

  for (let i = 0; i < heights.length; i++) {
    const current = heights[i]

    //右边第一个小于他的序号
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < current) {
        right[i] = j
        break
      }
    }
    //左边第一个小于他的序号
    for (let k = i - 1; k >= 0; k--) {
      if (heights[k] < current) {
        left[i] = k + 1
        break
      }
    }
  }

  let resutlt = 0
  for (let i = 0; i < heights.length; i++) {
    resutlt = Math.max(resutlt, heights[i] * (right[i] - left[i]))
  }

  return resutlt
}

//单调栈
const largestRectangleArea = (heights) => {
  let result = 0
  const stack = []
  heights = [0, ...heights, 0]
  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop()
      result = Math.max(result, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
    }
    stack.push(i)
  }
  return result
}
