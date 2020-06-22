//二分搜索模板

/**
 * 
 * @param {number} 左边界 
 * @param {number} 右边界
 * @description
[L,R] -> [L,MID] [MID+1,R] 
从左向右第一个满足条件的位置
 */
const bsearch1 = (l, r) => {
  while (l < r) {
    let mid = (l + r) >> 1
    if (check(mid)) {
      l = mid
    } else {
      r = mid + 1
    }
  }
  return l
}

/**
 * 
 * @param {number} 左边界 
 * @param {number} 右边界
 * @description
[L,R] -> [L,MID] [MID+1,R] 
从右向左第一个满足条件的位置
 */
const bsearch2 = (l, r) => {
  while (l < r) {
    let mid = (l + r + 1) >> 1
    if (check(mid)) {
      left = mid
    } else {
      r = mid - 1
    }
  }
  return l
}

const check = (x) => {
  //check case
  return x
}
