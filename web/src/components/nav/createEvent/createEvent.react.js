import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeEvent, validateEvent } from '../../../modules/createEvent'
import { toggleCreateEvent } from '../../../modules/ui'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import moment from 'moment'
import Datepicker from 'react-datepicker'
import TextInput from '../../shared/textInput/textInput.react'
import TextArea from '../../shared/textArea/textArea.react'
import Button from '../../shared/button/button.react'
import styles from '../form.css'

const eventForm = ({ values, change, submit, close }) => {
	const { title,  startDate, endDate, allDay } = values.data
	const { errors } = values
	const today = moment()
	const changeStartDate = (date) => {
		change('startDate', date)
	}
	const changeEndDate = (date) => {
		change('endDate', date)
	}
	return (
		<div>
			<div className={ styles.modal } onClick={ close }></div>
			<form className={ styles.form }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1>Create an Event</h1>
				<TextInput type='text' style={ styles.textInput } name='title' label='Title' value={ title } onChange={ change }/>
				<div className={ styles.dateInputs }>
					<TextInput type='date' style={ styles.textInputHalf } name='startDate' label='Start Date' value={ startDate } onChange={ change }/>
					<TextInput type='date' style={ styles.textInputHalf } name='endDate' label='End Date' value={ endDate } onChange={ change }/>
				</div>
				<div className={ styles.formGroup }>
					<Button value='Create Event' type='default' onClick={ submit }/>
				</div>
			</form>
		</div>
	)
}

export default connect(
	formMapStateToProps('event'),
	formMapDispatchToProps([changeEvent, validateEvent, toggleCreateEvent])
)(eventForm)