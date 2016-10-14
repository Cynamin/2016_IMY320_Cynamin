import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class textInput extends React.Component{
	constructor(props){
		super(props)
		this.change = this.change.bind(this)
	}
	change(evt){
		this.props.onChange(this.props.name, evt.target.value)
	}
	componentDidMount(){
		if(this.props.autofocus)
			this.refs.autofocus.focus()
	}
	render(){
		var { type, name, label, value, style, autofocus } = this.props

		return(
			<div className={ style }>
				<label htmlFor={ name }>{ label }</label>
				{
					autofocus ?
					<input type={ type } name={ name } value = { value } onChange={ this.change }  ref="autofocus"/> :
					<input type={ type } name={ name } value = { value } onChange={ this.change }/>
				}
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
	style: PropTypes.string.isRequired,
	autofocus: PropTypes.bool
}

export default textInput