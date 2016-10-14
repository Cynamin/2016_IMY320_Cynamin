import { fork } from 'redux-saga/effects'
import login from './login'
import signin from './signin'
import contact from './contact'
import createEvent from './createEvent'
import createNews from './createNews'
import toggleForm from './toggleForm'
import fetch from './fetch'

export default function* rootSaga(){
	yield fork(toggleForm)
	yield fork(login)
	yield fork(signin)
	yield fork(contact)
	yield fork(createEvent)
	yield fork(createNews)
	yield fork(fetch)
}