import createAction from '../utils/createAction'
import merge from 'deepmerge'

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
export const TOGGLE_SIGNIN = 'TOGGLE_SIGNIN'
export const TOGGLE_AUTHENTICATION_CONTROLS = 'TOGGLE_AUTHENTICATION_CONTROLS'
export const TOGGLE_CREATE_NEWS = 'TOGGLE_CREATE_NEWS'
export const TOGGLE_CREATE_EVENT = 'TOGGLE_CREATE_EVENT'
export const SHOW_CREATE_BUTTONS = 'SHOW_CREATE_BUTTONS'
export const TOGGLE_OPEN_EVENT = 'TOGGLE_OPEN_EVENT'

export const toggleLogin = createAction(TOGGLE_LOGIN)
export const toggleSignin = createAction(TOGGLE_SIGNIN)
export const toggleAuthenticationControls = createAction(TOGGLE_AUTHENTICATION_CONTROLS)
export const toggleCreateNews = createAction(TOGGLE_CREATE_NEWS)
export const toggleCreateEvent = createAction(TOGGLE_CREATE_EVENT)
export const showCreateButtons = createAction(SHOW_CREATE_BUTTONS)
export const toggleOpenEvent = createAction(TOGGLE_OPEN_EVENT, true)

export const getLoginStatus = (state) => state.ui.loginOpen
export const getSigninStatus = (state) => state.ui.signinOpen
export const getCreateEventStatus = (state) => state.ui.createEventOpen
export const getCreateNewsStatus = (state) => state.ui.createNewsOpen

const initialState = {
	loginOpen: false,
	signinOpen: false,
	authenticationControls: true,
	createNewsOpen: false,
	createEventOpen: false,
	showCreateButtons: false,
	openEvent: {
		open: false,
		id: undefined
	}
}

export default (state= initialState, action) => {
	const payload = action.payload;
	switch (action.type){
		case TOGGLE_LOGIN:
			return state.loginOpen ? Object.assign({}, state, { loginOpen: false }) : Object.assign({}, state, { loginOpen: true })
		case TOGGLE_SIGNIN:
			return state.signinOpen ? Object.assign({}, state, { signinOpen: false }) : Object.assign({}, state, { signinOpen: true })
		case TOGGLE_AUTHENTICATION_CONTROLS:
			return state.authenticationControls ? Object.assign({}, state, { authenticationControls: false }) : Object.assign({}, state, { authenticationControls: true })
		case TOGGLE_CREATE_NEWS:
			return state.createNewsOpen ? Object.assign({}, state, { createNewsOpen: false }) : Object.assign({}, state, { createNewsOpen: true })
		case TOGGLE_CREATE_EVENT:
			return state.createEventOpen ? Object.assign({}, state, { createEventOpen: false }) : Object.assign({}, state, { createEventOpen: true })
		case SHOW_CREATE_BUTTONS:
			return Object.assign({}, state, { showCreateButtons: true })
		case TOGGLE_OPEN_EVENT:
			return state.openEvent.open ? merge(state, { openEvent: { open: false, id: undefined }}) : merge(state, { openEvent: { open: true, id: payload }})
		default:
			return state
	}
}


