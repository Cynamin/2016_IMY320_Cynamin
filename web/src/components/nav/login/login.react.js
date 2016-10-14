import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeLogin, validateLogin } from '../../../modules/login'
import { toggleLogin } from '../../../modules/ui'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import TextInput from '../../shared/textInput/textInput.react'
import Button from '../../shared/button/button.react'
import styles from '../form.css'

const login = ({ values, change, submit, close }) => {
	const { email, pass } = values.data
	const { errors } = values

	return(
		<div>
			<div className={ styles.modal } onClick={ close }></div>
			<form className={ styles.form }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1>Log In</h1>
				<TextInput type='email' style={ styles.textInput } name='email' label='Email' value={ email } onChange={ change } autofocus={ true }/>
				<TextInput type='password' style={ styles.textInput } name='pass' label='Password' value={ pass } onChange={ change }/>
				<div className={ styles.formGroup }>
					<Button value='Log in' type='default' onClick={ submit }/>
				</div>
			</form>
		</div>
	)
}

export default connect(
	formMapStateToProps('login'),
	formMapDispatchToProps([changeLogin, validateLogin, toggleLogin])
)(login)