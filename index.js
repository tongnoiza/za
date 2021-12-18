const express = require('express')
const url = require('url')
const app = express()
const port = process.env.PORT || 443

console.log('port '+port)
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
}
]
    


app.get('/test',(req,res)=>{
   var {query }= req
    if(query.id){
        res.json(j[query.id])
    }else{
        res.end('no args')
    }


})
app.listen(port,()=>{

})
