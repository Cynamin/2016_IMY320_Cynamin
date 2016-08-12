import { connect } from 'react-redux'
import { signinChange as formChange, signinValidate as formSubmit } from '../../../modules/signin'
import { formMapStateToProps, formMapDispatchToProps } from '../../../utils/formUtils'
import signinComp from './signin.react'

const signin = connect(
	formMapStateToProps('signin'),
	formMapDispatchToProps({ formChange, formSubmit })
)(signinComp)

export default signin
