import reducer from '../utils/formUtils'
import createAction from '../utils/createAction'

export const CHANGE_LOGIN = 'CHANGE_LOGIN'
export const VALIDATE_LOGIN ='VALIDATE_LOGIN'
export const LOGIN_VALIDATE_FAIL = 'LOGIN_VALIDATE_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const CLEAR_LOGIN = 'CLEAR_LOGIN'

export const getLogin = (state) => state.forms.login.data

export const changeLogin = createAction(CHANGE_LOGIN, true)
export const validateLogin = createAction(VALIDATE_LOGIN)
export const loginValidateFail = createAction(LOGIN_VALIDATE_FAIL, true)
export const loginSuccess = createAction(LOGIN_SUCCESS, true)
export const loginFail = createAction(LOGIN_FAIL)
export const clearLogin = createAction(CLEAR_LOGIN)

function create(){
	const initialState = {
		data: {
			email: '',
			pass: ''
		},
		errors: undefined
	}

	return reducer(initialState, [CHANGE_LOGIN, CLEAR_LOGIN, LOGIN_VALIDATE_FAIL])
}

export default create()