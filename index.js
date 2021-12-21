const express = require('express')

const url = require('url')
var f = require('fs')
const app = express()
const port = process.env.PORT || 443
var t = f.readFileSync('test.ejs', 'utf-8')
var j = [
    {
        name: 'sontaya',
        age: 19,
        name1: 'tong',
        age1: 23,
        nickname: "tongnoi",
        university: "king's monkut univerity of technology nort bankok"
    }, {
        name: 'tong',
        lastname: "bootnamruk",
        email: "son@email.dkmfkdfm"
    }
]
var y = [
    {
        "name": "messi",
        "team": "barcelona"
    },
    {
        "name": "C.ronaldo",
        "team": "Manu"
    },
    {
        "name": "Alexander trant Arnold",
        "team": "Liverpool"
    },
    {
        "name": "C.ฟกด",
        "team": "กากๆ"
    },{
        File:t,
    
    }
]
   console.log(j[0] && j[1])

app.get('/test', (req, res) => {
    var { query } = req
    if (query.id) {
        res.json(y[query.id])
    } else {
        res.end('no args')
    }
}).get('/log', (req, res) => {
    res.end(t)
})




app.listen(port, () => {
    console.log('server running at Heroku port ' + port)
})
