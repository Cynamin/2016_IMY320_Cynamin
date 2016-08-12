import reducer from '../utils/formUtils'
import { call, select } from 'redux-saga/effects'
export const SIGNIN_CHANGE = 'SIGNIN_CHANGE'
export const SIGNIN_CLEAR = 'SIGNIN_CLEAR'
export const SIGNIN_VALIDATE = 'SIGNIN_VALIDATE'
export const SIGNIN_VALIDATE_FAIL = 'SIGNIN_VALIDATE_FAIL'
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST'
/*export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'*/

export function signinChange(key, value){
	return { type: SIGNIN_CHANGE, payload: { key, value} }
}

export function signinClear(){
	return { type: SIGNIN_CLEAR }
}

export function signinValidate(){
	return { type: SIGNIN_VALIDATE }
}

export function signinValidateFail(){
	return { type:  SIGNIN_VALIDATE_FAIL }
}

export function signinRequest(){
	return { type: SIGNIN_REQUEST }
}

function create(){
	const initialState = {
		data: {
			fname: '',
			lname: '',
			email: '',
			pass: ''
		},
		errors: undefined
	};

	return reducer(initialState, [SIGNIN_CHANGE, SIGNIN_CLEAR, SIGNIN_VALIDATE_FAIL])
}

export default create()