import React from 'react'
import { connect } from 'react-redux'
import { toggleOpenEvent } from '../../modules/ui'
import { actions } from 'redux-router5'
import NewsItem from '../shared/newsItem/newsItem.react'
import styles from './home.css'

const Event = ({ _id, title, startDate, endDate, desc, open, manager, decor, marketing, catering, users }) => {
	const click = () => {
		open(_id)
	}
	const managerObj = users.filter(user => { if (user._id === manager) return user })
	const decorObj = users.filter(user => { if (user._id === decor) return user })
	const marketingObj = users.filter(user => { if (user._id === marketing) return user })
	const cateringObj = users.filter(user => { if (user._id === catering) return user })
	const start = startDate.substring(0, 10)
	const end = endDate.substring(0, 10)
	return (
		<div className={ styles.event } onClick={ click }>
			<h1 className={ styles.title }>{ title }</h1>
			<h2 className={ styles.desc }>{ desc }</h2>
			<p className={ styles.copy }><span>From:  </span>{ start }</p>
			<p className={ styles.copy }><span>To: </span>{ end }</p>
			<p className={ styles.role }><span>Manager:</span> { managerObj[0].fname + ' ' + managerObj[0].lname }</p>
			<p className={ styles.role }><span>Decor:</span> { decorObj[0].fname + ' ' + decorObj[0].lname }</p>
			<p className={ styles.role }><span>Marketing:</span> { marketingObj[0].fname + ' ' + marketingObj[0].lname }</p>
			<p className={ styles.role }><span>Catering:</span> { cateringObj[0].fname + ' ' + cateringObj[0].lname }</p>
		</div>
	)
}

const home = ({ events, news, users ,open, navigateTo }) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.spread }>
				<img className={ styles.img } src={ require('../../../img/home-edit.jpg') }/>
				<h1 className={ styles.spreadHead }><span>Help</span> Us Make a <span>Difference</span> in People's lives</h1>
			</div>
			<div className={ styles.content }>
				<div className={ styles.events }>
					<h1>Latest Events</h1>
					{ events.map((event, key) => <Event key={ key } { ...event } users={ users } open={ open }/>) }
				</div>
				<div className={ styles.news }>
					<h1>Latest News</h1>
					{ news.map((news, key) => <NewsItem key={ key } { ...news } users={ users } navigateTo={ navigateTo }/>) }
				</div>
			</div>
		</div>
	)
}

export default connect(
	state => {
		const eventsInState = state.events, newsInState = state.news, users = state.users
		let events = [], news = [], x = 0
		let breakLoop = eventsInState.length > 4 ? 4 : eventsInState.length
		for (; x < breakLoop; x++)
			events.push(eventsInState[x])

		x = 0
		breakLoop = newsInState.length > 2 ? 2 : newsInState.length
		for (; x < breakLoop; x++)
			news.push(newsInState[x])

		return { events, news, users }
	},
	{ open: toggleOpenEvent, navigateTo: actions.navigateTo }
)(home)