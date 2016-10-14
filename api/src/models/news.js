var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NewsSchema = new Schema({
	title: String,
	content: String,
	date: { type: Date, default: Date.now },
	imgPath: String
})

module.exports = mongoose.model('News', NewsSchema)