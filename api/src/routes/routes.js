var User = require('../models/user')

module.exports = function(express){
	var router = express.Router()
	router.route('/login')
		.post((req,res) => {
			console.log('Login Request')
			var { email, pass } = req.body
			User.find({ email: email, pass: pass }, (err, doc) => {
				if (err)
					res.send({ error: true, payload: err })
				else
					res.send({ error: false, payload: doc })
			})
		})

	router.route('/signin')
		.post((req, res) => {
			console.log('Signin Request')
			var { fname, lname, email, pass } = req.body
			var user = new User({ fname, lname, email, pass })
			user.save(err => {
				if (err)
					res.send({ error: true, payload: err })
				else
					res.send({ error: false })
			})
		})

	return router
}