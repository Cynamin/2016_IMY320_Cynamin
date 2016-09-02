import React from 'react'
import styles from './about.css'

const about = () => (
	<div className={ styles.container }>
		<div className={ styles.spread }>
			<img className={ styles.img } src={ require('../../../img/about-edit.jpg') }/>
			<h1 className={ styles.spreadHead }>Providing <span>Clothing</span> the poor since <span>September 2016</span></h1>
		</div>
		<div className={ styles.content }>
			<h1 className={ styles.pageHeader }>About Us</h1>
			<p className={ styles.bodyCopy }>We are a <span>Threads</span>. A charity whose main focus is to hope that can make a difference in people lives.
			We the fortunate, take this basic need for granted but there are people who do not have access to something so simple as clothing.
			<br/>With this in mind, we started this charity to provide those who don't mind lending a helping, a platform to make a difference in someone's life.
			<br/>Providing clothes to as many people we can is the goal, so help us help people who are less fortunate in the lottery of life. Be a part of change</p>
			<p className={ styles.catchPhrase }><span>Make</span> it Count</p>
			<p className={ styles.catchPhrase }>Make <span>a Difference</span></p>
		</div>
	</div>
)

export default about