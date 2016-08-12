import { connect } from 'react-redux'
import { loginChange as formChange, loginValidate as formSubmit } from '../../../modules/login'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import loginComp from './login.react'

const login = connect(
	formMapStateToProps('login'),
	formMapDispatchToProps({ formChange, formSubmit })
)(loginComp)

export default login
