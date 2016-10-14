import { getContact, contactValidateFail, contactSuccess, contactFail, clearContact } from '../modules/contact'
import { VALIDATE_CONTACT, CONTACT_SUCCESS, CONTACT_FAIL } from '../modules/contact'
import { requestContact } from '../utils/api'
import { formFlow } from '../utils/formUtils'

export default formFlow({
	types: [VALIDATE_CONTACT, CONTACT_SUCCESS, CONTACT_FAIL],
	selector: getContact,
	validation: {
		validationFail: contactValidateFail,
		request: requestContact,
		success: contactSuccess,
		fail: contactFail
	},
	clearForm: clearContact,
	initialState: {
		data: {
			name: '',
			email: '',
			message: ''
		},
		errors: undefined
	}
})