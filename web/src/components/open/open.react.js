import React from 'react'
import { connect } from 'react-redux'
import styles from './open.css'

const mapStateToProps = (state) => {
	const id = state.router.route.params.id
	const news = state.news;
	const arr =  news.filter(element => element._id === id)
	const { title, content, imgPath } = arr[0]
	return { title, content, imgPath }
}

const open = ({ title, content, imgPath }) => (
	<div className={ styles.container }>
		<div className={ styles.spread }>
			<img className={ styles.img } src={ imgPath }/>
		</div>
		<div className={ styles.content }>
			<h1 className={ styles.pageHeader }>{ title }</h1>
			<p className={ styles.bodyCopy }>{ content }</p>
		</div>
	</div>
)

export default connect(
	mapStateToProps
)(open)