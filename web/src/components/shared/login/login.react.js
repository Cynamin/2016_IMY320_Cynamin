import React, { PropTypes } from 'react'
import TextInput from '../textInput/textInput.react'
import Button from '../button/button.react'
import styles from '../form.css'

const loginForm = ({ values, onChange, onSubmit}) => {
	let { email, pass } = values.data
	let { errors } = values

	return(
		<form className={ styles.form }>
			<h1>Log In</h1>
			<TextInput type='email' style={ styles.textInput } name='email' label='Email' value={ email } onChange= { onChange }/>
			<TextInput type='password' style={ styles.textInput } name='pass' label='Password' value={ pass } onChange= { onChange }/>
			<div className={ styles.formGroup }>
				<Button value='Log in' type='login' onClick={ onSubmit }/>
			</div>
		</form>
	)
}


loginForm.propTypes = {
	values: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default loginForm