import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './utils/configureStore'
import App from './components/app.react'
import '../style/index.css'

const store = configureStore()

render(
	<AppContainer>
		<Provider store={ store }>
			<App/>
		</Provider>
	</AppContainer>,
	document.getElementById('root')
)

if (module.hot){
	module.hot.accept('./components/app.react', () => {
		const NextApp = require('./components/app.react').default;
		render(
			<AppContainer>
				<Provider store={ store }>
					<NextApp history={ history }/>
				</Provider>
			</AppContainer>,
			document.getElementById('root')
		);
	})
}