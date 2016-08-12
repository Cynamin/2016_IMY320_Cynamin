import React from 'react'
import Nav from './nav/nav.react'
import Login from './shared/login/login.redux'
import Signin from './shared/signin/signin.redux'
import styles from './app.css'

const app = ({ children }) => (
	<div>
		<Nav/>
		<div className={ styles.container }>
			<Login/>
			<Signin/>
		</div>
	</div>
)

export default app