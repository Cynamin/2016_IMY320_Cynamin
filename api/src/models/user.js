var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
	fname: String,
	lname: String,
	email: String,
	pass: String
})

module.exports = mongoose.model('User', UserSchema)