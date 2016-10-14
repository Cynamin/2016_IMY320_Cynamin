import reducer from '../utils/formUtils'
import createAction from '../utils/createAction'

export const CHANGE_SIGNIN = 'CHANGE_SIGNIN'
export const VALIDATE_SIGNIN = 'VALIDATE_SIGNIN'
export const SIGNIN_VALIDATE_FAIL = 'SIGNIN_VALIDATE_FAIL'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAIL = 'SIGNIN_FAIL'
export const CLEAR_SIGNIN = 'CLEAR_SIGNIN'

export const getSignin = (state) => state.forms.signin.data

export const changeSignin = createAction(CHANGE_SIGNIN, true)
export const validateSignin = createAction(VALIDATE_SIGNIN)
export const signinValidateFail = createAction(SIGNIN_VALIDATE_FAIL, true)
export const signinSuccess = createAction(SIGNIN_SUCCESS, true)
export const signinFail = createAction(SIGNIN_FAIL, true)
export const clearSignin = createAction(CLEAR_SIGNIN, true)

export const initialState = {
	data: {
		fname: '',
		lname: '',
		email: '',
		pass: ''
	},
	errors: undefined
}

export default reducer(initialState, [CHANGE_SIGNIN, CLEAR_SIGNIN, SIGNIN_VALIDATE_FAIL])