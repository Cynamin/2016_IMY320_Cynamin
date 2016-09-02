import { LOGIN_SUCCESS } from './login'
import { SIGNIN_SUCCESS } from './signin'

function create(){
	const initialState = {
		fname: '',
		lname: '',
		email: '',
		loggedIn: false
	}

	return (state = initialState, action) => {
		const payload = action.payload
		switch (action.type){
			case LOGIN_SUCCESS:
			case SIGNIN_SUCCESS:
				console.log('Validation Succes')
				console.log(payload)
				return Object.assign({}, state, { fname: payload.fname, lname: payload.lname, email: payload.email, loggedIn: true })
			default:
				return state
		}
	}
}

export default create()