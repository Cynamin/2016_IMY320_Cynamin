import request from 'superagent'

export default (type, payload) => {
	request.post('/api/' + type)
	.send(payload)
	.set('Accept', 'application/json')
	.end((err, res) => {
		res = JSON.parse(res.text)
		if (!res.error)
			alert(type + ' Succesful')
	})
}