/**
 * 实现一个compose函数
 */

//代码实现
function compose(...fun) {
  //如果不传值 返回一个传什么返回什么的函数
  if (!fun.length) return (v) => v
  //如果只穿一个函数，就拿哪一个函数返回出来
  if (fun.length === 1) return fun[0]

  return fun.reduce((pre, cur) => {
    console.log('pre:' + pre, 'cur' + cur)
    return (arg) => {
      return pre(cur(arg))
    }
  })
}

// 用法如下:
function fn1(x) {
  return x + 1
}
function fn2(x) {
  return x + 2
}
function fn3(x) {
  return x + 3
}
function fn4(x) {
  return x + 4
}

const a = compose(fn1, fn2, fn3, fn4)
console.log('a:' + a)
// console.log(a(15)) // 1+4+3+2+1=11
