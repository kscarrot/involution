/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @tag 单调栈 单调队列
 * @description
[滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)
 */
//暴力 overtime
// var maxSlidingWindow = function (nums, k) {
//   let [left, right] = [0, 0 + k]
//   const result = []
//   while (right <= nums.length) {
//     const sub = nums.slice(left, right)
//     const sum = sub.reduce((pre = -Infinity, cur) => Math.max(pre, cur))
//     result.push(sum)
//     left++
//     right++
//   }
//   return result
// }

var maxSlidingWindow = function (nums, k) {
  let [left, right] = [0, k - 1]
  const result = []
  const dequeue = []
  const addNewElement = (i) => {
    //栈不为空且栈顶小于新元素,出栈
    while (dequeue.length !== 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop()
    }
    dequeue.push(i)
  }

  const removeElement = (i) => {
    //如果被移除的值为最大值 出队
    if (nums[i] >= nums[dequeue[0]]) {
      dequeue.shift()
    }
  }

  for (let i = 0; i < k; i++) {
    addNewElement(i)
  }

  result.push(nums[dequeue[0]])

  while (right < nums.length - 1) {
    left++
    right++
    removeElement(left - 1)
    addNewElement(right)
    result.push(nums[dequeue[0]])
  }
  return result
}
