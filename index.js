const express = require('express')
const url = require('url')
const ejs = require('ejs')
const res = require('express/lib/response')

const app = express()
const port = process.env.PORT || 443

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
 })

var j = [
    {
        fullname: 'sontaya Bootnamruk<br>',
        age: 24,
        Nickname: 'tong',
        university: "King Monkut's Univerity of Technology Nort Bangkok",
        C:"College Industrial Technology",
        Skill: "basic Java c html php javascript ",
        OS: "Linux ,Windows",
    },
    {
        fullname: 'sontaya Bootnamruk',
        age: 24,
        Nickname: 'tong',
        university: "King Monkut's Univerity of Technology Nort Bangkok",
        C:"College Industrial Technology",
        Skill: "basic Java c html php javascript ",
        OS: "Linux ,Windows",
    },
    {
        fullname: 'sontaya Bootnamruk',
        age: 24,
        Nickname: 'tong',
        university: "King Monkut's Univerity of Technology Nort Bangkok",
        C:"College Industrial Technology",
        Skill: "basic Java c html php javascript ",
        OS: "Linux ,Windows",
    },
    {
        fullname: 'sontaya Bootnamruk',
        age: 24,
        Nickname: 'tong',
        university: "King Monkut's Univerity of Technology Nort Bangkok",
        C:"College Industrial Technology",
        Skill: "basic Java c html php javascript ",
        OS: "Linux ,Windows",
    },

]

    app.get("/",(req,res)=>{
        res.send(j);
    })
    
app.listen(port, () => {
    console.log('server running at Heroku port ' + port)
})
