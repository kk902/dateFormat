//转义HTML字符
function HTMLEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g,(match) => {
        switch (match) {
            case '<': return '&lt;'
            case '>': return '&gt;'
            case '"': return '&quot;'
            case '&': return '&amp;'
        }
    })
}
//还原HTML字符
function HTMLUnEscape(htmlstr) {
    return htmlstr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match) => {
        switch (match) {
            case '&lt;': return '<'
            case '&gt;': return '>'
            case '&quot;': return '"' 
            case '&amp;': return '&'
        }
    })
}
module.exports = {
    HTMLEscape,
    HTMLUnEscape
}