//时间格式化
function dateFormat(dtStr) {
    const dt = new Date(dtStr)
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth()+1)
    const d = padZero(dt.getDay())
    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())
    return `${y}-${m}-${d}-${hh}:${mm}:${ss}`
}
function padZero(str) {
    return str > 9 ? str : '0'+str 
}
module.exports = {
    dateFormat
}