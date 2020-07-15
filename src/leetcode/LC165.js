/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const format = (version) => version.split('.').map((str) => Number(str))
  const v1 = format(version1)
  const v2 = format(version2)
  let reslult = 0
  let tail = 0

  const compareTial = (v1, v2) => {
    if (v1.length > v2.length) {
      const sum = v1.slice(v2.length).reduce((acc, cur) => (acc += cur))
      return sum !== 0 ? 1 : 0
    } else if (v1.length < v2.length) {
      const sum = v2.slice(v1.length).reduce((acc, cur) => (acc += cur))
      return sum !== 0 ? -1 : 0
    } else {
      return 0
    }
  }

  for (let i = 0; i < v1.length && i < v2.length; i++) {
    if (v1[i] > v2[i]) {
      reslult = 1
      break
    } else if (v1[i] < v2[i]) {
      reslult = -1
      break
    } else if ((i === v1.length - 1 || i === v2.length - 1) && reslult === 0) {
      reslult = compareTial(v1, v2)
    }
  }
  return reslult
}
