/**
 * initialize your data structure here.
 * @tag 最小栈
 * @description
[最小栈](https://leetcode-cn.com/problems/min-stack/)
 */
var MinStack = function () {
  this.stack = []
  this.stackMin = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.stackMin.length === 0 || this.stackMin[this.stackMin.length - 1] >= x) {
    this.stackMin.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const stackTop = this.stack[this.stack.length - 1]
  this.stack.pop()

  if (stackTop === this.stackMin[this.stackMin.length - 1]) {
    this.stackMin.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stackMin[this.stackMin.length - 1]
}
