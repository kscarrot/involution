/**
 * @param {string[]} strs
 * @return {string}
 * @tag string
 * @description
[最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  const getCommenPrefix = (acc, cur) => {
    let result = ''
    let p = 0
    while (p < acc.length && p < cur.length) {
      if (acc[p] === cur[p]) {
        result += acc[p]
        p++
      } else {
        break
      }
    }
    return result
  }
  return strs.reduce(getCommenPrefix)
}
