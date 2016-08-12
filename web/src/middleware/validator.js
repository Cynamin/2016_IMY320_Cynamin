import { loginRequest, loginValidateFail, LOGIN_VALIDATE } from '../modules/login'
import { signinRequest, signinValidateFail, SIGNIN_VALIDATE } from '../modules/signin'
import { validate } from '../utils/formUtils'
import request from '../utils/api'

const validator = store => next => action => {
	switch(action.type){
		case LOGIN_VALIDATE:
			var data = store.getState().forms.login.data
			var results = validate()(data)
				if (results.email && results.pass)
					request('login', data)
			break;
		case SIGNIN_VALIDATE:
			var data =store.getState().forms.signin.data
			var results = validate()(data)
				if (results.fname && results.lname && results.email && results.pass)
					request('signin', data)
			break;
		default:
			next(action)
	}
}

export { validator }