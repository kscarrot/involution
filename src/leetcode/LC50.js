/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//简单递归 会爆栈
// var myPow = function (x, n) {
//   if (n === 1) return x
//   if (n === 0) return 1
//   if (n === -1) return 1 / x
//   if (n > 0) return x * myPow(x, n - 1)
//   if (n < 0) return 1 / (x * myPow(x, -n - 1))
// }

//奇偶分治 化简调用栈
var myPow = function (x, n) {
  if (n === 1) return x
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  if (n % 2) return x * myPow(x, n - 1)
  return myPow(x * x, n / 2)
}
