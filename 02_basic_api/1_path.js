/*
path 模块的默认操作会根据 Node.js 应用程序运行的操作系统的不同而变化
    - windows和POSIX传入的路径风格不同
*/
const path = require('path')

/*
1. 路径处理相关
*/
const {normalize, join, resolve} = path

// 不用手动处理不规范的斜线，'..'等写法
console.log(normalize('/usr//local/../bin'))    // '/usr/bin'
console.log(join('/usr', '/local', '../bin/'))    // 'usr/bin'

// 把相对路径解析成绝对路径
console.log(resolve('./')) 


/*
2. name相关
*/
const {basename, dirname, extname} = path

const file = '/usr/local/bin/test.txt'
console.log(basename(file)) // 文件名: 'test.txt'
console.log(dirname(file))  // 所在目录: '/usr/local/bin/'
console.log(extname(file))  // 扩展名: '.txt'


/*
3. parse, format
    - format的pathObject有优先级
*/
const {parse, format} = path

console.log(parse(file))    // 将路径解析成一个对象
console.log(format(parse(file)))    // 相当于将parse解析出的对象reverse为路径


/*
4. sep, delimiter, win32, posix
*/
const {sep, delimiter, win32, posix} = path

console.log('sep: ', sep)   // '/'
console.log('win32 sep: ', win32.sep)   // '\'

console.log('path: ', process.env.PATH) //'/path/:/path/...'

console.log('delimiter: ', delimiter)   // ':'
console.log('win32 delimiter: ', win32.delimiter)   // ':'


