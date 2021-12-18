const express = require('express')
const url = require('url')
const app = express()
const port = process.env.port || 8080

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

}).listen(port)
