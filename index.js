const express = require('express')

const url = require('url')
var f = require('fs')
const app = express()
const port = process.env.PORT || 443
var t = f.readFileSync('test.ejs', 'utf-8')
var j = 
    {
        fullname: 'sontaya Bootnamruk<br>',
        age: 24+"\n",
        Nickname: 'tong',

        university: "King Monkut's Univerity of Technology Nort Bangkok",
        C:"College Industrial Technology",
        Skill: "basic Java c html php javascript ",
        OS: "Linux ,Windows",
        "Basic skill":"word powerpoint",


    }
    

app.get('/', (req, res) => {
    res.contentType('.html')
        res.json(j)
})

app.listen(port, () => {
    console.log('server running at Heroku port ' + port)
})
