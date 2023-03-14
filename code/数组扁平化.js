/**
 * 数组扁平化
 * 题目描述:实现一个方法使多维数组变成一维数组
 */

//递归
function flatter(arr) {
  if (!arr.length) return
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
  }, [])
}

// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]))

//迭代
function flat(arr) {
  if (!arr.length) return
  //判断数组中是否嵌套数组
  while (arr.some((item) => Array.isArray(item))) {
    //进行结构赋值
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flat([1, 2, [1, [2, 3, [4, 5, [6]]]]]))

console.log()
