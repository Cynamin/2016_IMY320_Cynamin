import { takeLatest } from 'redux-saga'
import { select, fork, put } from 'redux-saga/effects'
import { clearSignin, initialState as signinState } from '../modules/signin'
import { clearLogin, initialState as loginState } from '../modules/login'
import { clearEvent, initialState as createEventState } from '../modules/createEvent'
import { clearNews, initialState as createNewsState } from '../modules/createNews'
import { TOGGLE_SIGNIN, TOGGLE_LOGIN, TOGGLE_CREATE_EVENT, TOGGLE_CREATE_NEWS  } from '../modules/ui'
import { getLoginStatus, getSigninStatus, getCreateEventStatus, getCreateNewsStatus } from '../modules/ui'

function* clearForm(clear, selector, state){
	const status = yield select(selector)
	if (!status)
		yield put(clear(state))
}

function* watchToggleLogin(){
	yield* takeLatest(TOGGLE_LOGIN, clearForm, clearLogin, getLoginStatus, loginState)
}

function* watchToggleSignin(){
	yield* takeLatest(TOGGLE_SIGNIN, clearForm, clearSignin, getSigninStatus, signinState)
}

function* watchToggleEvent(){
	yield* takeLatest(TOGGLE_CREATE_EVENT, clearForm, clearEvent, getCreateEventStatus, createEventState)
}

function* watchToggleNews(){
	yield* takeLatest(TOGGLE_CREATE_NEWS, clearForm, clearNews, getCreateNewsStatus, createNewsState)
}

export default function*(){
	yield fork(watchToggleLogin)
	yield fork(watchToggleSignin)
	yield fork(watchToggleEvent)
	yield fork(watchToggleNews)
}