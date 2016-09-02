import React, { Component } from 'react'
import styles from './home.css'
import { fetchEvents } from '../../utils/api'

class home extends Component{
	render(){
		return(
			<div className={ styles.container }>
				<div className={ styles.spread }>
					<img className={ styles.img } src={ require('../../../img/home-edit.jpg') }/>
					<h1 className={ styles.spreadHead }><span>Help</span> Us Make a <span>Difference</span> in People's lives</h1>
				</div>
			</div>
		)
	}
}

export default home