import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { router5Middleware } from 'redux-router5'
import { rootReducer } from '../modules'
import saga from '../sagas'

export default (initialState, router) => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(sagaMiddleware, router5Middleware(router)),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))
	sagaMiddleware.run(saga)
	return store
}

