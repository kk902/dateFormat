//包的入口
const date = require('./src/dateFormat')
const escape = require('./src/HTMLEscape')
module.exports = {
    ...date,
    ...escape
}