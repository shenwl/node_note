/*
fs 文件系统
    - 所有文件系统操作都有同步和异步两种方式
    - 异步形式的最后一个参数都是完成时的回调函数，该函数的第一个参数会保留给异常
基础api
    - 常用文件操作：readFile, writeFile, stat, rename, unlink(删除)
    - 常用文件夹操作：readdir, mkdir, rmdir
    - watch文件或文件夹：fs.watch, fs.watchFile
扩充
    - stream 数据流: 数据、有方向
*/

const fs = require('fs');

// 异步操作
// fs.readFile('./4_fs.js', 'utf-8', (err, file) => {
//     if (err) throw err;
//     console.log(file)
// })


// 同步操作
// const data = fs.readFileSync('./4_fs.js', 'utf-8')
// console.log(data)


// 写文件
// fs.writeFile('./test.text', 'this is a test', (err, msg) => {
//     if (err) throw err;
//     console.log('写入完成')
// })


// 获取文件属性信息, stat报错则文件不存在(常用来判断文件是否存在)
// fs.stat('./test.text', (err, stats) => {
//     if (err) {
//         console.log('文件不存在')
//         return
//     }
//     console.log(`文件属性: ${JSON.stringify(stats)}`)
// })


// 读取文件夹
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files) // 返回文件及文件夹列表
})