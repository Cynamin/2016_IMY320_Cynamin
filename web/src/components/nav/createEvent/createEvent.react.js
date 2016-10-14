import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeEvent, validateEvent } from '../../../modules/createEvent'
import { toggleCreateEvent } from '../../../modules/ui'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import Role from './role/role.react'
import TextInput from '../../shared/textInput/textInput.react'
import TextArea from '../../shared/textArea/textArea.react'
import Button from '../../shared/button/button.react'
import styles from '../form.css'

const eventForm = ({ values, users, change, submit, close }) => {
	const { title,  startDate, endDate, desc, manager, decor, marketing, catering } = values.data
	const { errors } = values
	const changeStartDate = (date) => {
		change('startDate', date)
	}
	const changeEndDate = (date) => {
		change('endDate', date)
	}
	const changeManager = (id) => {
		console.log(id)
		change('manager', id)
	}
	const changeDecor = (id) => {
		change('decor', id)
	}
	const changeMarketing = (id) => {
		change('marketing', id)
	}
	const changeCatering = (id) => {
		change('catering', id)
	}
	return (
		<div className={ styles.container }>
			<div className={ styles.modal } onClick={ close }></div>
			<form className={ styles.overflowForm }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1>Create an Event</h1>
				<TextInput type='text' style={ styles.textInput } name='title' label='Title' value={ title } onChange={ change }/>
				<TextArea name='desc' label="Description" value={ desc } onChange={ change }/>
				<div className={ styles.dateInputs }>
					<TextInput type='date' style={ styles.textInputHalf } name='startDate' label='Start Date' value={ startDate } onChange={ change }/>
					<TextInput type='date' style={ styles.textInputHalf } name='endDate' label='End Date' value={ endDate } onChange={ change }/>
				</div>
				<div className={ styles.roles }>
					<div className={ styles.role }>
						<h2>Manager</h2>
						{ users.map((user, key) => <Role key={ key } change={ changeManager } activeID={ manager } { ...user }/> ) }
					</div>
					<div className={ styles.role }>
						<h2>Decor</h2>
						{ users.map((user, key) => <Role key={ key } change={ changeDecor } activeID={ decor } { ...user }/> ) }
					</div>
					<div className={ styles.role }>
						<h2>Marketing</h2>
						{ users.map((user, key) => <Role key={ key } change={ changeMarketing } activeID={ marketing } { ...user }/> ) }
					</div>
					<div className={ styles.role }>
						<h2>Catering</h2>
						{ users.map((user, key) => <Role key={ key } change={ changeCatering }  activeID={ catering } { ...user }/> ) }
					</div>
				</div>
				<div className={ styles.formGroup }>
					<Button value='Create Event' type='default' onClick={ submit }/>
				</div>
			</form>
		</div>
	)
}

export default connect(
	state => {
		return {
			values: state.forms.event,
			users: state.users
		}
	},
	formMapDispatchToProps([changeEvent, validateEvent, toggleCreateEvent])
)(eventForm)