/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @tag 单调栈
[下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)
 */
var nextGreaterElement = function (findNums, nums) {
  const stack = []
  const hash = {}
  for (let i = nums.length - 1; i >= 0; i--) {
    const element = nums[i]
    while (stack.length !== 0 && stack[stack.length - 1] <= element) {
      stack.pop()
    }
    hash[element] = stack.length ? stack[stack.length - 1] : -1
    stack.push(element)
  }
  let result = []
  findNums.forEach((element) => {
    result.push(hash[element])
  })
  return result
}
