import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, cps, fork, select } from 'redux-saga/effects'
import { requestLogin, requestSignin, requestContact, requestCreateEvent, requestCreateNews, APIFetchEvents } from '../utils/api'
import { getLogin,  VALIDATE_LOGIN, loginValidateFail, loginSuccess, loginFail } from '../modules/login'
import { getSignin, VALIDATE_SIGNIN, signinValidateFail, signinSuccess, signinFail } from '../modules/signin'
import { getContact, VALIDATE_CONTACT, contactValidateFail, contactSuccess, contactFail } from '../modules/contact'
import { getEvent, VALIDATE_EVENT, eventValidateFail, eventSuccess, eventFail } from '../modules/createEvent'
import { getNews, VALIDATE_NEWS, newsValidateFail, newsSuccess, newsFail } from '../modules/createNews'
import { FETCH_EVENTS, fetchEventSuccess } from '../modules/events'
import { validator } from '../utils/formUtils'

function* validate(selector, validateFail, request, success, clear){
	const formDetails = yield select(selector)
	const results = yield validator()(formDetails)
	const keys = Object.keys(results)
	const len = keys.length
	let invalid = false

	for(let x = 0; x < len && !invalid; x++){
		if (results[keys[x]] === true)
			invalid = true
	}

	if (invalid)
		yield put(validateFail(results))
	else{
		const res = yield call(request, formDetails)
		yield put(success(res.payload[0]))
	}
}

function* getEvents(){
	try{
		const events = yield APIFetchEvents()
		yield put(fetchEventSuccess(events.payload))
	}
	catch(err){
		console.log('Error: ', err);
	}
}

function* watchLoginValidation(){
	yield* takeLatest(VALIDATE_LOGIN, validate, getLogin, loginValidateFail, requestLogin, loginSuccess)
}

function* watchSigninValidation(){
	yield* takeLatest(VALIDATE_SIGNIN, validate, getSignin, signinValidateFail, requestSignin, signinSuccess)
}

function* watchContactValidation(){
	yield* takeLatest(VALIDATE_CONTACT, validate, getContact, contactValidateFail, requestContact, contactSuccess)
}

function* watchEventValidation(){
	yield* takeLatest(VALIDATE_EVENT, validate, getEvent, eventValidateFail, requestCreateEvent, eventSuccess)
}

function* watchNewsValidation(){
	yield* takeLatest(VALIDATE_NEWS, validate, getNews, newsValidateFail, requestCreateNews, newsSuccess)
}
function* watchFetchEvents(){
	yield* takeLatest(FETCH_EVENTS, getEvents)
}

export default function* rootSaga(){
	yield fork(watchLoginValidation)
	yield fork(watchSigninValidation)
	yield fork(watchContactValidation)
	yield fork(watchEventValidation)
	yield fork(watchNewsValidation)
	yield fork(watchFetchEvents)
}