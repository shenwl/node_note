/*
参数相关
    - argv
    - argv0
    - execArgv
    - execPath
*/
const log = console.log.bind(console)
const {argv, argv0, execArgv, execPath} = process;

argv.forEach(item => {
    // 前两个第一个是执行程序（node）的路径: /usr/local/bin/node
    // 第二个是执行文件的路径（当前文件）
    log(item)
})

log(argv0)  // node

// node调用参数(位于文件与node之间)，不进入argv: node --inspect process.js
log(execArgv)

// 调用该程序的脚本的路径: /usr/local/bin/node
log(execPath)



