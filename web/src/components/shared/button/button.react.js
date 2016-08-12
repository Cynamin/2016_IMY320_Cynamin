import React, { PropTypes } from 'react';
import styles from './button.css';

const button = ({ value, type, onClick }) => {
	switch(type){
		case 'primary':
			return ( <button className={ styles.primaryButton } onClick={ onClick }>{ value }</button> );
		case 'warning':
			return ( <button className={ styles.warningButton } onClick={ onClick }>{ value }</button> );
		case 'danger':
			return ( <button className={ styles.dangerButton } onClick={ onClick }>{ value }</button> );
		case 'login':
			return ( <button className={ styles.loginButton } onClick={ onClick }>{ value }</button> );
		default:
			return ( <button className={ styles.default } onClick={ onClick }>{ value }</button> );
	}
}

button.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default button;