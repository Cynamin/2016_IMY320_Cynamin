var User = require('../models/user')
var Event = require('../models/event')
var Contact = require('../models/contact')

module.exports = function(express){
	var router = express.Router()

	router.route('/login')
		.post((req,res) => {
			console.log('Log in')
			var { email, pass } = req.body
			User.find({ email: email, pass: pass })
				.then(user => res.send({ error: false, payload: user }))
				.error(err => res.send({ error: true, payload: err }))
		})

	router.route('/signin')
		.post((req, res) => {
			console.log('Sign in')
			var { fname, lname, email, pass } = req.body
			console.log(req.body)
			var user = new User({ fname, lname, email, pass })
			user.save()
				.then(() => res.send({ error: false, payload: { fname, lname, email } }))
				.error(err => res.send({ error: true, payload: err }))
		})


	router.route('/contact')
		.post((req, res) => {
			console.log('Contact')
			var { name, email, message } = req.body
			var contact = new Contact({ name, email, message })
			contact.save()
				.then(() => res.send({ error: false }))
				.error(err => res.send({ error: true, payload: err }))
		})

	router.route('/createEvent')
		.post((req, res) =>{
			console.log('Create Event')
			var { title, startDate, endDate } = req.body
			start = new Date(startDate)
			end = new Date(endDate)
			var event = new Event({ title, startDate, endDate })
			event.save()
				.then(() => res.send({ error: false }))
				.error(err => res({ error: true, payload: err }))
		})

	router.route('/events')
		.get((req, res) => {
			console.log('Fetch Events')
			Event.find({})
			.then(events => res.send({ error: false, payload: events }))
			.error(err => res.send({error: true, payload: err }))
		})

	router

	return router
}