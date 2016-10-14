import React from 'react'
import styles from './role.css'

const role = ({_id, fname, lname, activeID, change }) => {
	const click = () => change(_id)
	return (
		<span onClick={ click } className={ activeID ===  _id ? styles.active : styles.nonActive }><p>{ fname + ' ' + lname }</p></span>
	)
}

export default role