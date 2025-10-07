// urlParser.js
const url = require('url');

const urlString = 'https://baike.baidu.com/item/node.js/7567977?fr=aladdin#3';
const parsedUrl = new URL(urlString);

console.log('查询参数 query:', parsedUrl.search); // 输出 "?fr=aladdin"