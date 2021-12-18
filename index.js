const express = require('express')
const url = require('url')
const app = express()

var j = { 
        name:'sontaya',
        age:19,
        name:'tong',
        age:23,
        nickname:"tongnoi",
        university:"king's monkut univerity of technology nort bankok" 
}
  
app.get('/test',(req,res)=>{
const {query} = req
  console.log(query.id)
res.send(j)

}).listen(443)
