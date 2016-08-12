import { combineReducers } from 'redux'
import login from './login'
import signin from './signin'

export const rootReducer = combineReducers({
	forms: combineReducers({
		login: login,
		signin: signin
	})
})
