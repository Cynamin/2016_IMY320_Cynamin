import { take, put, call, fork, select, cancelled } from 'redux-saga/effects'

export function formMapStateToProps(key){
	return (state) => {
		return { values: state.forms[key] }
	}
}

export function formMapDispatchToProps([change, submit, close]){
	return (dispatch) => {
		return {
			change: (key, value) => {
				dispatch(change({key, value}))
			},
			submit: (evt) => {
				evt.preventDefault()
				dispatch(submit())
			},
			close: () => {
				dispatch(close())
			}
		}
	}
}

export function validator(){
	const validateText = (field) => field === '' || field === null
	const validateEmail = (field) => field.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null

	return (fields) => {
		let results = {}
		Object.keys(fields).forEach((key) => {
			if (key === 'email')
				results[key] = validateEmail(fields[key])
			else
				results[key] = validateText(fields[key])
		})
		return results;
	}
}

export function createValidation({ validationFail, request, success, fail }){
	return function* (fields){
		const results = yield call(validator(), fields)
		const invalid = yield call(checkResults, results)

		if (invalid)
			yield put(validationFail(results))
		else{
			try{
				const res = yield call(request, fields)
				yield put(success(res))
			}
			catch(err){
				yield console.error(err)
				yield put(fail(err))
			}
		}
	}
}

export function authFlow({ types, selector, validation, toggleForm, showCreateButtons, toggleAuthenticationControls }){
	const [validate, success, fail] = types
	return function* (){
		while(true){
			yield take(validate)
			const fields = yield select(selector)
			yield fork(createValidation(validation), fields)
			const action = yield take([success, fail])
			if (action.type === success){
				yield put(toggleForm())
				yield put(toggleAuthenticationControls())
				yield put(showCreateButtons())
			}
		}
	}
}

export function toggleFormFlow({ types, selector, validation, toggleForm, fetch }){
	const [validate, success, fail] = types
	return function* (){
		while(true){
			yield take(validate)
			const fields = yield select(selector)
			yield fork(createValidation(validation), fields)
			const action = yield take([success, fail])
			if (action.type === success){
				yield put(toggleForm())
				yield put(fetch())
			}
		}
	}
}

export function formFlow({ types, selector, validation, clearForm, initialState}){
	const [validate, success, fail] = types
	return function* (){
		while(true){
			yield take(validate)
			const fields = yield select(selector)
			yield fork(createValidation(validation), fields)
			const action = yield take([success, fail])
			if (action.type === success){
				yield put(clearForm(initialState))
			}
		}
	}
}

export function checkResults(results){
	const keys = Object.keys(results)
	const len = keys.length
	let invalid = false

	for (let x = 0; x < len && !invalid; x++){
		if (results[keys[x]] === true)
			invalid = true;
	}

	return invalid
}

export default(intialState, [change, clear, fail]) => {
	return (state = intialState, action) => {
		let merge = require('deepmerge')
		let payload = action.payload
		switch (action.type){
			case change:
				return merge(state, { data: { [payload.key]: payload.value }})
			case fail:
				return merge(state, { errors: payload })
			case clear:
				return merge(state, payload);
			default:
				return state;
		}
	}
}
