/*
fs中的stream相关操作
*/

const fs = require('fs');

// const readStream = fs.createReadStream('./5_fs_stream.js')

// // 输出到控制台
// readStream.pipe(process.stdout)


const writeStream = fs.createWriteStream('./test_stream.text')

let num = 1
setInterval(() => {
    if (num < 10) {
        writeStream.write(' ' + num)
        num ++
    } else {
        writeStream.end()
    }
}, 200)

writeStream.on('finish', () => {
    console.log('done!')
})