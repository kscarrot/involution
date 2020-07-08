/**
 * @param {string} s
 * @return {boolean}
 * @tag stack
[有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
 */
var isValid = function (s) {
  if (s.length % 2) return false
  const stack = []
  for (let current of s) {
    if (stack.length) {
      const top = stack[stack.length - 1]
      switch (top) {
        case '(':
          if (current === ')') {
            stack.pop()
          } else {
            stack.push(current)
          }
          break
        case '[':
          if (current === ']') {
            stack.pop()
          } else {
            stack.push(current)
          }
          break
        case '{':
          if (current === '}') {
            stack.pop()
          } else {
            stack.push(current)
          }
          break
        default:
          return false
      }
    } else {
      stack.push(current)
    }
  }

  return !stack.length
}
