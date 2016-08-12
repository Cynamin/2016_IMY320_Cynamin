import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { validator } from '../middleware/validator'
import { rootReducer } from '../modules'

export default (initialState) => {
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(validator),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))
	if (module.hot) {
		module.hot.accept('../modules', () => {
			const nextRootReducer = require('../modules').default
			store.replaceReducer(nextRootReducer)
	  	})
	}
	return store
}

