/**
 * 
 * @param {*} construct 构造函数
 * @param  {...any} args 参数
 * @description
 * ```
 1. 创建一个空的简单JavaScript对象（即 *{}* ）；
 2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
 3. 将步骤1新创建的对象作为*this*的上下文 ；
 4. 如果该函数没有返回对象，则返回*this*。
 语法: new constructor[([arguments])]
 改写后语法:  myNew(constructor, arguments)
 * ```
 */
function myNew(construct, ...args) {
  const newObj = Object.create(construct.prototype)
  const result = construct.apply(newObj, args)
  return typeof result === 'object' && result !== null ? result : newObj
}

module.exports = { myNew }
