import React, { PropTypes } from 'react'

class textInput extends React.Component{
	constructor(props){
		super(props)
		this.change = this.change.bind(this)
	}
	change(evt){
		this.props.onChange(this.props.name, evt.target.value)
	}
	render(){
		var { type, name, label, value, style } = this.props

		return(
			<div className={ style }>
				<label htmlFor={ name }>{ label }</label>
				<input type={ type } name={ name } value = { value } onChange={ this.change }/>
			</div>
		)
	}
}

textInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	style: PropTypes.string.isRequired
}

export default textInput