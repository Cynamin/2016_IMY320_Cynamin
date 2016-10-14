import React from 'react'
import styles from './newsItem.css'

const news = ({ _id, title, imgPath, navigateTo }) => {
	const navigate = () =>{
		navigateTo('open', { id: _id })
	}

	return (
		<div className={ styles.content } onClick={ navigate }>
			<h1 className={ styles.title }>{ title }</h1>
			<img className={ styles.img } src={ imgPath }/>
		</div>
	)
}

export default news