import React, { PropTypes } from 'react'
import TextInput from '../textInput/textInput.react'
import Button from '../button/button.react'
import styles from '../form.css'

const signin = ({ values, onChange, onSubmit}) => {
	let { fname, lname, email, pass } = values.data
	let { errors } = values

	return(
		<form className={ styles.form }>
			<h1>Sign In</h1>
			<TextInput type='text' style={ styles.textInput } name='fname' label='First Name' value={ fname } onChange= { onChange }/>
			<TextInput type='text' style={ styles.textInput } name='lname' label='Last Name' value={ lname } onChange= { onChange }/>
			<TextInput type='email' style={ styles.textInput } name='email' label='Email' value={ email } onChange= { onChange }/>
			<TextInput type='password' style={ styles.textInput } name='pass' label='Password' value={ pass } onChange= { onChange }/>
			<div className={ styles.formGroup }>
				<Button value='Sign In' type='login' onClick={ onSubmit }/>
			</div>
		</form>
	)
}


signin.propTypes = {
	values: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
}

export default signin