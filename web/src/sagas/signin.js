import { take, fork, cancel } from 'redux-saga/effects'
import { getSignin, signinValidateFail, signinSuccess, signinFail, signinStoppped, stopSignin } from '../modules/signin'
import { VALIDATE_SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL } from '../modules/signin'
import { toggleSignin, toggleAuthenticationControls, showCreateButtons } from '../modules/ui'
import { requestSignin } from '../utils/api'
import { authFlow } from '../utils/formUtils'

export default authFlow({
	types: [VALIDATE_SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL],
	selector: getSignin,
	validation: {
		validationFail: signinValidateFail,
		request: requestSignin,
		success: signinSuccess,
		fail: signinFail
	},
	toggleForm: toggleSignin,
	showCreateButtons,
	toggleAuthenticationControls
})