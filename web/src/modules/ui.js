import createAction from '../utils/createAction'

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
export const TOGGLE_SIGNIN = 'TOGGLE_SIGNIN'
export const TOGGLE_CREATE_NEWS = 'TOGGLE_CREATE_NEWS'
export const TOGGLE_CREATE_EVENT = 'TOGGLE_CREATE_EVENT'

export const toggleLogin = createAction(TOGGLE_LOGIN)
export const toggleSignin = createAction(TOGGLE_SIGNIN)
export const toggleCreateNews = createAction(TOGGLE_CREATE_NEWS)
export const toggleCreateEvent = createAction(TOGGLE_CREATE_EVENT)

function create(){
	const initialState = {
		loginOpen: false,
		signinOpen: false,
		createNewsOpen: false,
		createEventOpen: false
	}

	return (state= initialState, action) => {
		const payload = action.payload;
		switch (action.type){
			case TOGGLE_LOGIN:
				return state.loginOpen ? Object.assign({}, state, { loginOpen: false }) : Object.assign({}, state, { loginOpen: true })
			case TOGGLE_SIGNIN:
				return state.signinOpen ? Object.assign({}, state, { signinOpen: false }) : Object.assign({}, state, { signinOpen: true })
			case TOGGLE_CREATE_NEWS:
				return state.createNewsOpen ? Object.assign({}, state, { createNewsOpen: false }) : Object.assign({}, state, { createNewsOpen: true })
			case TOGGLE_CREATE_EVENT:
				return state.createEventOpen ? Object.assign({}, state, { createEventOpen: false }) : Object.assign({}, state, { createEventOpen: true })
			default:
				return state
		}
	}
}

export default create()

