import React, { PropTypes } from 'react';
import styles from './button.css';

const button = ({ value, type, onClick }) => {
	switch(type){
		case 'disabled':
			return ( <button className={ styles.disabled } onClick={ onClick } disabled>Please wait...</button> )
		case 'addEvent':
			return ( <button className={ styles.addEvent } onClick={ onClick }><i className='fa fa-calendar-o'></i></button> )
		case 'addNews':
			return ( <button className={ styles.addNews } onClick={ onClick}><i className='fa fa-pencil'></i></button>)
		default:
			return ( <button className={ styles.default } onClick={ onClick }>{ value }</button> );
	}
}

button.propTypes = {
	value: PropTypes.string,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default button;