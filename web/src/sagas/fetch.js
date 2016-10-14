import { takeLatest } from 'redux-saga'
import { select, put, call, fork } from 'redux-saga/effects'
import { FETCH_EVENTS, fetchEventsSuccess, fetchEventsFail } from '../modules/events'
import { FETCH_NEWS, fetchNewsSuccess, fetchNewsFail } from '../modules/news'
import { FETCH_USERS, fetchUsersSuccess, fetchUsersFail } from '../modules/users'
import { fetchEvents, fetchNews, fetchUsers } from '../utils/api'


function* fetch(API, success, fail){
	try{
		const res = yield call(API)
		yield put(success(res.payload))
	}
	catch(error){
		yield put(fail(error))
	}
}

function* watchFetchEvents(){
	yield* takeLatest(FETCH_EVENTS, fetch, fetchEvents, fetchEventsSuccess, fetchEventsFail)
}

function* watchFetchNews(){
	yield* takeLatest(FETCH_NEWS, fetch, fetchNews, fetchNewsSuccess, fetchNewsFail)
}

function* watchFetchUsers(){
	yield* takeLatest(FETCH_USERS, fetch, fetchUsers, fetchUsersSuccess, fetchUsersFail)
}

export default function*(){
	yield fork(watchFetchEvents)
	yield fork(watchFetchNews)
	yield fork(watchFetchUsers)
}