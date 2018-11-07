/*
timer相关

异步执行顺序：nextTick -> setTimeout -> setImmediate
*/

// 等下一个事件队列，放到了下一个队列队首
// 大部分时候用这个，不用nextTick
setImmediate(() => {
    console.log('setImmediate')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0)

// 与setImmediate十分相似
// nextTick会比setImmediate和setTimeout执行得早
// nextTick把函数放到了当前队列的最后执行
process.nextTick(() => {
    console.log('nextTick')
})

console.log('first')

