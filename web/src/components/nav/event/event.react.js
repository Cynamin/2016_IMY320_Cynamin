import React from 'react'
import { connect } from 'react-redux'
import { toggleOpenEvent } from '../../../modules/ui'
import styles from './event.css'

const event = ({ event, close }) => {
	const start = event.startDate.substring(0, 10)
	const end = event.endDate.substring(0, 10)
	return (
		<div>
			<div className={ styles.modal } onClick={ close }></div>
			<div className={ styles.event }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1>{ event.title }</h1>
				<h2 className={ styles .desc }>{ event.desc }</h2>
				<p className={ styles.content }>From:  { start }</p>
				<p className={ styles.content }>To: { end }</p>
			</div>
		</div>
	)
}

export default connect(
	state => {
		const id = state.ui.openEvent.id;
		const event = state.events.filter((event) => event._id === id )
		return { event: event[0] }
	},
	{ close: toggleOpenEvent }
)(event)
