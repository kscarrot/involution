/**
 * @param {string} IP
 * @return {string}
 * @tag string
 * @description
[验证IP地址](https://leetcode-cn.com/problems/validate-ip-address/)
 */
var validIPAddress = function (IP) {
  let result = 'Neither'
  if (isIPV4(IP)) result = 'IPv4'
  if (isIPV6(IP)) result = 'IPv6'
  return result
}

const isIPV4 = (IP) => {
  const iparr = IP.split('.')
  if (iparr.length !== 4) return false
  let result = true
  iparr.forEach((value) => {
    //0开头
    if (value.length > 1 && value[0] === '0') result = false

    //判断数字
    const reg = /[0-9]/gi
    const isvalid = value.match(reg) && value.match(reg).length === value.length
    if (!isvalid) result = false

    //数字在范围内
    const numb = Number(value)
    if (numb < 0 || numb > 255) result = false
  })
  return result
}

const isIPV6 = (IP) => {
  const iparr = IP.split(':')

  if (iparr.length !== 8) return false
  let result = true
  iparr.forEach((value) => {
    if (value.length > 4) result = false
    //是字母a-f 大小写
    const reg = /[a-f]|[0-9]/gi
    const isvalid = value.match(reg) && value.match(reg).length === value.length
    if (!isvalid) result = false
  })
  return result
}
