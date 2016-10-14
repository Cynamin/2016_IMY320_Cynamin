import { LOGIN_SUCCESS } from './login'
import { SIGNIN_SUCCESS } from './signin'

function create(){
	const initialState = {
		fname: '',
		lname: '',
		email: '',
	}

	return (state = initialState, action) => {
		const payload = action.payload
		switch (action.type){
			case LOGIN_SUCCESS:
			case SIGNIN_SUCCESS:
				return Object.assign({}, state, { fname: payload.fname, lname: payload.lname, email: payload.email })
			default:
				return state
		}
	}
}

export default create()