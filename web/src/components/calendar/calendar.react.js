import React from 'react'
import  { connect } from 'react-redux'
import { toggleOpenEvent } from '../../modules/ui'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import styles from './calendar.css'

Calendar.momentLocalizer(moment)

const calendar = ({ events, toggleOpenEvent }) => {
	const open = (event) =>{
		toggleOpenEvent(event._id)
	}

	return (
		<div className={ styles.container }>
			<div className={ styles.content }>
				<h1 className={ styles.pageHeader }>Calendar</h1>
				<Calendar selectable events={ events } startAccessor='startDate' endAccessor='endDate' onSelectEvent={ open }/>
			</div>
		</div>
	)
}

export default connect(
	state => ({ events: state.events }),
	{ toggleOpenEvent }
)(calendar)