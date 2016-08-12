import React, { PropTypes } from 'react';
import styles from './textArea.css';

class textArea extends React.Component{
	constructor(props){
		super(props);
		this.change = this.change.bind(this);
	}
	change(evt){
		console.log('Change')
		this.props.onChange(evt.target.value);
	}
	render(){
		var { type, name, label, value } = this.props;

		return(
			<div className={ styles.formGroup }>
				<div className={ styles.expandingArea }>
					<label className={ styles.label } htmlFor={ name }>{ label }</label>
					<pre className={ styles.mirror }><span>{ value }</span><br/></pre>
					<textarea className={ styles.textarea } name={ name } onChange={ this.change } value={ value }></textarea>
					<span className={ styles.borderBottom }></span>
				</div>
			</div>
		)
	}
}

textArea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default textArea;