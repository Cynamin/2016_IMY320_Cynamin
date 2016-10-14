import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux-router5'
import NewsItem from '../shared/newsItem/newsItem.react'
import styles from './news.css'

const news = ({ news, navigateTo }) => {
	const left = news.filter((element, index) => {
		if (index % 2 === 0)
			return element
	})
	const right = news.filter((element, index) => {
		if (index % 2 === 1)
			return element
	})

	return (
		<div className={ styles.container }>
			<div className={ styles.content }>
				<h1 className={ styles.pageHeader }>News</h1>
				<div className={ styles.newsContainer }>
					<div className={ styles.half }>
						{ left.map((element, key) => <NewsItem key={ key } { ...element } navigateTo={ navigateTo }/>) }
					</div>
					<div className={ styles.half }>
						{ right.map((element, key) => <NewsItem key={ key } { ...element } navigateTo={ navigateTo }/>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(
	state => ({ news: state.news }),
	{ navigateTo: actions.navigateTo }
)(news)