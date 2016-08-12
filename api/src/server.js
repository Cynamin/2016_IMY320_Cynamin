var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var user = require('./models/user')
var router = require('./routes/routes')(express)

mongoose.connect('mongodb://127.0.0.1:27017')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(3000)
console.log('Server Running on port 3000')