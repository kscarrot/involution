/**
 * @param {string} s
 * @return {string}
 * @tag string
[反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ')
}
