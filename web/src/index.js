import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import { AppContainer } from 'react-hot-loader'
import configureStore from './utils/configureStore'
import init from './utils/init'
import createRouter from './router/router'
import App from './components/app.react'
import '../style/index.css'

const router = createRouter(true)
const store = configureStore({}, router)
init(store)

router.start(() => {
	render(
		<AppContainer>
			<Provider store={ store }>
				<RouterProvider router={ router }>
					<App/>
				</RouterProvider>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
})

if (module.hot){
	router.start(() => {
		module.hot.accept('./components/app.react', () => {
			const NextApp = require('./components/app.react').default;
			render(
				<AppContainer>
					<Provider store={ store }>
						<RouterProvider router={ router }>
							<NextApp history={ history }/>
						</RouterProvider>
					</Provider>
				</AppContainer>,
				document.getElementById('root')
			);
		})
	})
}