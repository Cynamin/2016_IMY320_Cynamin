import 'isomorphic-fetch'

const API_ROOT = '/api/';
const jsonHeader = new Headers({ 'Content-Type': 'application/json' })

function get(endpoint){
	const fullURL = API_ROOT + endpoint
	return fetch(fullURL, {
		method: 'GET'
	})
	.then(res => res.json())
	.catch(err => console.log(err))
}

function post(endpoint, payload, headers){
	const fullURL = API_ROOT + endpoint
	payload = JSON.stringify(payload)
	return fetch(fullURL, {
		method: 'POST',
		body: payload,
		headers
	})
	.then(res => res.json())
	.catch(err => console.log(err))
}

export function requestLogin(payload){
	return post('login', payload, jsonHeader)
}

export function requestSignin(payload){
	return post('signin', payload, jsonHeader)
}

export function requestContact(payload){
	return post('contact', payload, jsonHeader)
}

export function requestCreateNews(payload){
	return post('createNews', payload, jsonHeader)
}

export function requestCreateEvent(payload){
	return post('createEvent', payload, jsonHeader)
}

export function APIFetchEvents(){
	return get('events')
}