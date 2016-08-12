import reducer from '../utils/formUtils'
import request from '../utils/api';
import { call, select } from 'redux-saga/effects'
export const LOGIN_CHANGE = 'LOGIN_CHANGE'
export const LOGIN_CLEAR = 'LOGIN_CLEAR'
export const LOGIN_VALIDATE ='LOGIN_VALIDATE'
export const LOGIN_VALIDATE_FAIL = 'LOGIN_VALIDATE_FAIL'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function loginChange(key, value){
	return { type: LOGIN_CHANGE, payload: { key, value }}
}

export function loginClear(){
	return { type: LOGIN_CLEAR }
}

export function loginValidate(){
	return { type: LOGIN_VALIDATE }
}

export function loginValidateFail(payload){
	return { type:  LOGIN_VALIDATE_FAIL, payload }
}

function create(){
	const initialState = {
		data: {
			email: '',
			pass: ''
		},
		errors: undefined
	}

	return reducer(initialState, [LOGIN_CHANGE, LOGIN_CLEAR, LOGIN_VALIDATE_FAIL])
}

export default create()