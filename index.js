const fs = require('node:fs')
fs.readFile('index.txt','utf-8',(err,data)=>{
console.log(data)
})