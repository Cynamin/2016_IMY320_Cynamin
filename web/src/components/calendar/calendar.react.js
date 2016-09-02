import React from 'react'
import  { connect } from 'react-redux'
import { fetchEvents } from '../../modules/events'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import styles from './calendar.css'

Calendar.momentLocalizer(moment)

const mapStateToProps = (state) => {
	return { events: state.events }
}

class calendar extends React.Component{
	componentWillMount(){
		this.props.fetchEvents()
	}
	render(){
		const { events } = this.props
		return(
			<div className={ styles.container }>
				<div className={ styles.content }>
					<h1 className={ styles.pageHeader }>Calendar</h1>
					<Calendar selectable events={ events } startAccessor='startDate' endAccessor='endDate'/>
				</div>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	{ fetchEvents }
)(calendar)