/*
事件
    - 所有能触发事件的对象都是 EventEmitter 类的实例
*/

// const EventEmitter = require('events')

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter()

// myEmitter.on('event', (msg) => {
//   console.log(msg)
// })

// setInterval(() => {
//     myEmitter.emit('event', "this is a message")
// }, 1000)


// 最多调用一次的监听器
// eventEmitter.once()


// 自定义error事件，实例出错时会触发
myEmitter.on('error', (err) => {
    console.error('错误信息：', err)
})

myEmitter.emit('error', new Error('crash'))


// 移除监听器, 移除所有监听器
// emitter.removeListener(eventName, listener)
// emitter.removeAllListeners([eventName])



