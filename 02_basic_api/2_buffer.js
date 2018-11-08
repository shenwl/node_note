/*
Buffer: 
    - 使用频率高，在global对象上
    - 用于处理二进制数据流
    - 实例类似于整数数组，但是大小固定(实例化之后就不变)
    - Buffer所用内存是: C++代码在V8堆外分配物理内存
*/

// 实例化: alloc
// console.log(Buffer.alloc(10)) // Buffer长度为10，且不可改变
// console.log(Buffer.alloc(2, 1)) // Buffer长度为2，用1填充
// console.log(Buffer.allocUnsafe(10)) // 返回的Buffer实例可能包含旧数据, 可用fill()或write()重写


// console.log(Buffer.from([1, 2, 3])) // <Buffer 01 02 03>
// console.log(Buffer.from('test')) // <Buffer 74 65 73 74>
// console.log(Buffer.from('test', 'base64')) // 可指定编码 <Buffer b5 eb 2d>


/*
Buffer常用属性和方法
    - Buffer.byteLength 所占字节
    - Buffer.isBuffer() 判断一个对象是否Buffer对象
    - Buffer.concat() 拼接Buffer
*/

// console.log(Buffer.byteLength('test'))  // 4 
// console.log(Buffer.byteLength('中文'))  // 6， 1个中文字符3个字节

// console.log(Buffer.isBuffer({}))    // false
// console.log(Buffer.isBuffer(Buffer.from('test')))   // true

// const buf1 = Buffer.from('Hello')
// const buf2 = Buffer.from('World')
// const buf3 = Buffer.concat([buf1, buf2])
// console.log(buf3.toString())


/*
Buffer实例常用属性和方法
    - buf.length    // 初始化后实例所占字节数
    - buf.toString()
    - buf.fill()
    - buf.equals()  // 比较buffer内容
    - buf.indexOf() // 和数组indexOf方法类似，还有lastIndexOf等
    - buf.copy()        
*/
const buf = Buffer.from('this is a buffer')

console.log(buf.length)
console.log(Buffer.alloc(100).length)
console.log(buf.toString('base64')) // 默认为utf-8

console.log(buf.indexOf('i')) // 2

let b = Buffer.allocUnsafe(5)
buf.copy(b, 0, 4)
console.log(b)

// 中文解码要借助StringDecoder
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf-8')

const buf2 = Buffer.from('中文字符串')
// 没三个是一个中文，这里一次5个，会缓存然后等下次够了再拼接
for (let i = 0; i < buf2.length; i+=5) {
    let b = Buffer.allocUnsafe(5)
    buf2.copy(b, 0, i)

    // console.log(b.toString()) // 会乱码
    console.log(decoder.write(b))
}



