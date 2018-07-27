var express  = require('express')
var app      = express()
app.use(express.static(__dirname,{maxage:'2h'}))
app.listen(8080)
