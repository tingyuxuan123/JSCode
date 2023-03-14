/**
 * @param {function} fun 需要循环的方法
 * @param {时间} t 时间
 * @returns 可以清楚定时器的函数
 */

function mysetinteral(fun, t) {
  let timer = null
  function interval() {
    fun()
    timer = setTimeout(interval, t)
  }
  interval()

  return () => {
    clearTimeout(timer)
  }
}

// mysettimeout(() => {
//   console.log('一秒过去了')
// }, 1000)
