/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * @tag 贪心
 * @description
[插入区间](https://leetcode-cn.com/problems/insert-interval/)
 */
var insert = function (intervals, newInterval) {
  const [left, right] = newInterval
  if (intervals.length === 0) return [newInterval]
  const result = intervals.filter(([start, end]) => start > right || end < left)
  const temp = intervals.filter(([start, end]) => !(start > right || end < left))

  if (temp.length === 0) {
    result.push(newInterval)
  } else {
    let [a, b] = [Infinity, -Infinity]
    temp.forEach(([start, end]) => {
      a = Math.min(start, a, left)
      b = Math.max(end, b, right)
    })
    result.push([a, b])
  }

  result.sort((a, b) => a[0] - b[0])
  return result
}

//用贪心 一次遍历更加简单
