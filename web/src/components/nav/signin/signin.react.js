import React from 'react'
import { connect } from 'react-redux'
import { changeSignin, validateSignin } from '../../../modules/signin'
import { toggleSignin } from '../../../modules/ui';
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import TextInput from '../../shared/textInput/textInput.react'
import Button from '../../shared/button/button.react'
import styles from '../form.css'

const signin = ({ values, change, submit, close }) => {
	let { fname, lname, email, pass } = values.data
	let { errors } = values

	return(
		<div>
			<div className={ styles.modal } onClick={ close }></div>
			<form className={ styles.form }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1 className={ styles.header }>Register</h1>
				<TextInput type='text' style={ styles.textInput } name='fname' label='First Name' value={ fname } onChange= { change } autofocus={ true }/>
				<TextInput type='text' style={ styles.textInput } name='lname' label='Last Name' value={ lname } onChange= { change }/>
				<TextInput type='email' style={ styles.textInput } name='email' label='Email' value={ email } onChange= { change }/>
				<TextInput type='password' style={ styles.textInput } name='pass' label='Password' value={ pass } onChange= { change }/>
				<div className={ styles.formGroup }>
					<Button value='Register' type='default' onClick={ submit }/>
				</div>
			</form>
		</div>
	)
}

export default connect(
	formMapStateToProps('signin'),
	formMapDispatchToProps([changeSignin, validateSignin, toggleSignin])
)(signin)