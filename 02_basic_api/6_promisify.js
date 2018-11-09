/*
utils.promisify的简单使用
*/

const fs = require('fs')
const promisify = require('util').promisify

const read = promisify(fs.readFile)

// read('./6_promisify.js').then(data => {
//     console.log(Buffer.from(data).toString())
// }).catch(err => {
//     console.log(err)
// })

const test = async () => {
    try {
        const data = await read('./6_promisify.js')
        console.log(Buffer.from(data).toString())
    } catch(err) {
        console.log(err)
    }
}

const testErr = async () => {
    try {
        const data = await read('./6_promisify_not.js')
        console.log(Buffer.from(data).toString())
    } catch(err) {
        console.log(err)
    }
}

// test()
// testErr()

