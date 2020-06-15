/**
 * 
 * @param {*} fToCall 被myCall调用的函数
 * @param {*} thisArgs 绑定的this上下文
 * @param  {...any} otherArgs 其他参数
 * @description
 ```
 *call()* 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
 语法: /function/.call(/thisArg/, /arg1/, /arg2/, ...)
 
 *apply()* 方法调用一个具有给定this值的函数，以及作为一个数组提供的参数。
 语法: /func/.apply(/thisArg, [argsArray/])
 ```
 */
function myCall(fToCall, thisArgs, ...otherArgs) {
  let content = thisArgs || window || global
  content.__fn__ = fToCall
  //作为对象的方法调用,this指向该对象
  const result = content.__fn__(...otherArgs)
  delete content.__fn__
  return result
}

/**
 * 
 * @param {*} fToBind 被bind的函数
 * @param {*} thisArgs 绑定的this上下文
 * @param  {...any} bindArgs 绑定的其他参数
 * @description
 ```
 *bind()* 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用
 语法:  /function/.bind(thisArg[, arg1[, arg2[, ...]]])
 ```
 */
function myBind(fToBind, thisArgs, ...bindArgs) {
  return function (...args) {
    return myCall(fToBind, thisArgs, bindArgs.concat(args))
  }
}

module.exports = { myCall, myBind }
