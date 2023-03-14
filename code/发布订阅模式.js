class Observer {
  constructor() {
    //存放要监听的事件
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      //如果监听的事件不存在
      this.events[eventName] = [callback]
    } else {
      this.events[eventName].push = callback
    }
  }

  emit(eventName, ...params) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fun) => {
        fun.apply(this, params)
      })
    }
  }

  once(eventName, callback) {
    function fun(...params) {
      callback(...params)
      this.off(eventName, fun)
    }
    this.on(eventName, fun)
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((fun) => {
        return fun !== callback
      })
    }
  }
}

const observer = new Observer()

function fun(...params) {
  console.log('点击', ...params)
}

observer.once('click', fun)

observer.emit('click', 123, 457, 8)
observer.emit('click', 123, 4, 4578, 98)
