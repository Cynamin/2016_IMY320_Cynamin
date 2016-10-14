var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var multer = require('multer')
var path = require('path')

var imgPath = './api/assets/img'
var assetsPath = path.resolve(path.join(__dirname, '../assets'))
var htmlPath = path.resolve(path.join(__dirname, '../assets/index.html'))

var storage = multer.diskStorage({
	destination: (req ,file, cb) => {
		cb(null, imgPath)
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
	}
})
var upload = multer({ storage })
var router = require('./routes/routes')(express, upload)

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://127.0.0.1:27017/threads')

app.use(express.static(assetsPath))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)
app.get('*', function(req, res) {
	res.sendFile(htmlPath)
})

app.listen(3000)
console.log('Server Running on port 3000')
process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err)
})