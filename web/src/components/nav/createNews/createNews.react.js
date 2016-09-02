import React from 'react'
import { connect } from 'react-redux'
import { changeNews, validateNews } from '../../../modules/createNews'
import { toggleCreateNews } from '../../../modules/ui'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import Dropzone from 'react-dropzone'
import TextInput from '../../shared/textInput/textInput.react'
import TextArea from '../../shared/textArea/textArea.react'
import Button from '../../shared/button/button.react'
import styles from '../form.css'

const newsForm = ({ values, change, submit, close }) => {
	const { title, displayImg, content } = values.data
	const { errors } = values
	const drop = (file) => {
		this.props.onChange('displayImg', file[0]);
	}
	return (
		<div>
			<div className={ styles.modal } onClick={ close }>
			</div>
			<form className={ styles.form }>
				<i className='fa fa-close' onClick={ close }></i>
				<h1>Create a News Article</h1>
				<TextInput type='title' style={ styles.textInput } name='title' label='Title' value={ title } onChange={ change }/>
				<TextArea name='content' label="Article Content" value={ content } onChange={ change }/>
				<div className={ styles.dropzone }>
					<Dropzone onDrop={ drop } multiple={ false }>
						<p>Click here or drag an image</p>
					</Dropzone>
					{ displayImg !== '' ? <img src={ displayImg.preview}/> : '' }
				</div>
				<div className={ styles.formGroup }>
					<Button value='Create News Article' type='default' onClick={ submit }/>
				</div>
			</form>
		</div>
	)
}

export default connect(
	formMapStateToProps('news'),
	formMapDispatchToProps([changeNews, validateNews, toggleCreateNews])
)(newsForm)