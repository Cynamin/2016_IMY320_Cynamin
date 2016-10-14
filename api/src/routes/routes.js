var User = require('../models/user')
var Event = require('../models/event')
var Contact = require('../models/contact')
var News = require('../models/news')

module.exports = function(express, upload){
	var router = express.Router()

	router.route('/login')
		.post((req,res) => {
			console.log('Log in')
			var { email, pass } = req.body
			User.find({ email, pass })
				.then(user => {
					if (user.length > 0)
						res.send({ fname: user[0].fname, lname: user[0].lname, email: user[0].email })
					else
						res.status(500).send({ error: 'User Not Found' })
				})
				.error(error => res.status(500).send({ error }))
		})

	router.route('/signin')
		.post((req, res) => {
			console.log('Sign in')
			var { fname, lname, email, pass } = req.body
			var user = new User({ fname, lname, email, pass })
			user.save()
				.then(() => res.send({ fname, lname, email }))
				.error(error => res.status(500).send({ error }))
		})


	router.route('/contact')
		.post((req, res) => {
			console.log('Contact')
			var { name, email, message } = req.body
			var contact = new Contact({ name, email, message })
			contact.save()
				.then(() => res.status(200)).send({ message: 'All Good'})
				.error(error => res.status(500).send({ error }))
		})

	router.route('/createEvent')
		.post((req, res) => {
			console.log('Create Event')
			var { title, startDate, endDate, desc, manager, decor, marketing, catering } = req.body
			var event = new Event({ title, startDate, endDate, desc, manager, decor, marketing, catering })
			event.save()
				.then(() => res.status(200).send({ message: 'All Good'}))
				.error(error => {
					res.status(500).send({ error })
				})
		})

	router.route('/createNews')
		.post(upload.single('displayImg'), (req, res) => {
			console.log('Create News')
			var { title, content } = req.body
			var imgPath = "img/" + req.file.filename
			var news = new News({ title, content, imgPath })
			news.save()
				.then(() => res.status(200).send({ message: 'All Good'}))
				.error(error => {
					res.status(500).send({ error })
				})
		})

	router.route('/events')
		.get((req, res) => {
			console.log('Fetch Events')
			Event.find({}).sort('startDate -test')
				.then(events => res.send({ payload: events }))
				.error(err => res.status(500).send({ error }))
		})

	router.route('/news')
		.get((req, res) => {
			console.log('Fetch News')
			News.find({}).sort('date -test')
				.then(news => {
					res.send({ payload: news })
				})
				.error(err => res.status(500).send({ error }))
		})

	router.route('/users')
		.get((req, res) =>{
			console.log('Fetch Users')
			User.find({})
				.then(users => {
					res.send({ payload: users })
				})
				.error(err => res.status(500).send({ error }))
		})

	router

	return router
}