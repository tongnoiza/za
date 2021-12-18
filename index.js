const express = require('express')
const url = require('url')
var f = require('fs')
const app = express()
const port = process.env.PORT || 443
var t = f.readFileSync('test.ejs','utf-8')
var j = [
    {    name:'sontaya',
age:19,
name:'tong',
age:23,
nickname:"tongnoi",
university:"king's monkut univerity of technology nort bankok" 
},{
    name:'tong',
    lastname:"bootnamruk",
    email:"son@email.dkmfkdfm"
},{
tongza:"kak",
    name:"เรียนไม่เก่ง",
    
}
]
    


app.get('/test',(req,res)=>{
   var {query }= req
    if(query.id){
        res.json(j[query.id])
    }else{
        res.end('no args')
    }
}).get('/log',(req,res)=>{
res.send(t)
})




app.listen(port,()=>{
console.log('server running at Heroku port '+port)
})
