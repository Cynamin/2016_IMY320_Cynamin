import { take, fork, cancel } from 'redux-saga/effects'
import { getLogin, loginValidateFail, loginSuccess, loginFail, loginStopped, stopLogin } from '../modules/login'
import { VALIDATE_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../modules/login'
import { toggleLogin, toggleAuthenticationControls, showCreateButtons } from '../modules/ui'
import { requestLogin } from '../utils/api'
import { authFlow } from '../utils/formUtils'

export default authFlow({
	types: [VALIDATE_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
	selector: getLogin,
	validation: {
		validationFail: loginValidateFail,
		request: requestLogin,
		success: loginSuccess,
		fail: loginFail
	},
	toggleForm: toggleLogin,
	showCreateButtons,
	toggleAuthenticationControls,
})