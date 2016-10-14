import { combineReducers } from 'redux'
import { router5Reducer } from 'redux-router5'
import login from './login'
import signin from './signin'
import contact from './contact'
import createNews from './createNews'
import createEvent from './createEvent'
import ui from './ui'
import events from './events'
import news from './news'
import user from './user'
import users from './users'

export const rootReducer = combineReducers({
	ui,
	router: router5Reducer,
	forms: combineReducers({
		login,
		signin,
		contact,
		news: createNews,
		event: createEvent
	}),
	events,
	news,
	user,
	users
})
