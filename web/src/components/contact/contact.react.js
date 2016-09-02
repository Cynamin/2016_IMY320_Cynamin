import React from 'react'
import { connect } from 'react-redux'
import { changeContact, validateContact } from '../../modules/contact'
import { formMapStateToProps, formMapDispatchToProps } from '../../utils/formUtils'
import TextInput from '../shared/textInput/textInput.react'
import TextArea from '../shared/textArea/textArea.react'
import Button from '../shared/button/button.react'
import styles from './contact.css'

const contact = ({ values, change, submit }) => {
	const { name, email, message } = values.data
	const { errors } = values

	return(
		<div className={ styles.container }>
			<div className={ styles.content }>
				<h1 className={ styles.pageHeader }>Contact Us</h1>
				<p className={ styles.bodyCopy }>Feel free to contact us if you have any question.
				<br/>We'll answer your questions as soon possible</p>
				<form className={ styles.form }>
					<TextInput type='text' style={ styles.textInput } name='name' label='Name' value={ name } onChange={ change }/>
					<TextInput type='email' style={ styles.textInput } name='email' label='Email' value={ email } onChange={ change }/>
					<TextArea name='message' label='Message' value={ message } onChange={ change }/>
					<div className={ styles.formGroup }>
						<Button value='Send' type='default' onClick={ submit }/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default connect(
	formMapStateToProps('contact'),
	formMapDispatchToProps([changeContact, validateContact, null])
)(contact)