## 安装
```
npm install itheima-tools-xyk666
```

## 导入
```js
const itheima = require('itheima')
```

## 格式化时间
```js
//调用 dateFormat 对时间进行格式化
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
//结果 2022-11-01-15:30:02
```

## 转换 HTML 中的特殊字符
```js
//调用 HTMLEscape
const HTMLStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = ithiema.HTMLEscape(HTMLStr)
console.log(str)
//转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符
```js
//调用 HTMLUnEscape
const str2 = ithiema.HTMLEscape(str)
console.log(str2)
//转换的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
```

## 开源协议
ISC
