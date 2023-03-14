function mysettimout(fun, t) {
  let timer = setInterval(() => {
    fun()
    clearTimeout(timer)
  }, t)
}

mysettimout(() => {
  console.log('执行一次')
}, 1000)
