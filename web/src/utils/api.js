import 'isomorphic-fetch'

const API_ROOT = '/api/';
const jsonHeader = new Headers({ 'Content-Type': 'application/json' })

function handleResponse(res){
	if (!res.ok){
		console.log('Response not OK: ' + res.statusText)
		throw Error(res.statusText)
	}
	return res
}

function get(endpoint){
	const fullURL = API_ROOT + endpoint
	return fetch(fullURL, {
		method: 'GET'
	})
	.then(handleResponse)
	.then(res => res.json())
}

function postJSON(endpoint, payload, headers){
	const fullURL = API_ROOT + endpoint
	payload = JSON.stringify(payload)
	return fetch(fullURL, {
		method: 'POST',
		body: payload,
		headers
	})
	.then(handleResponse)
	.then(res => res.json())
}

function postForm(endpoint, payload){
	const fullURL = API_ROOT + endpoint
	return fetch(fullURL, {
		method: 'POST',
		body: payload,
	})
	.then(handleResponse)
	.then(res => res.json())
}

export function requestLogin(payload){
	return postJSON('login', payload, jsonHeader)
}

export function requestSignin(payload){
	return postJSON('signin', payload, jsonHeader)
}

export function requestContact(payload){
	return postJSON('contact', payload, jsonHeader)
}

export function requestCreateNews(payload){
	var formData = new FormData()

	formData.append('title', payload.title)
	formData.append('content', payload.content)
	formData.append('displayImg', payload.displayImg)

	return postForm('createNews', formData)
}

export function requestCreateEvent(payload){
	return postJSON('createEvent', payload, jsonHeader)
}

export function fetchEvents(){
	return get('events')
}

export function fetchNews(){
	return get('news')
}

export function fetchUsers(){
	return get('users')
}