/*
环境相关
    - HOME, PATH, LANG, PWD, SHELL, USER等执行环境的信息
*/
const log = console.log.bind(console)
const {env} = process

log(env)