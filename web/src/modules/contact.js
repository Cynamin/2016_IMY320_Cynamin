import reducer from '../utils/formUtils'
import createAction from '../utils/createAction'

export const CHANGE_CONTACT = 'CHANGE_CONTACT'
export const VALIDATE_CONTACT = 'VALIDATE_CONTACT'
export const CONTACT_VALIDATE_FAIL = 'CONTACT_VALIDATE_FAIL'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'
export const CONTACT_FAIL = 'CONTACT_FAIL'
export const CLEAR_CONTACT = 'CLEAR_CONTACT'

export const getContact = (state) => state.forms.contact.data

export const changeContact = createAction(CHANGE_CONTACT, true)
export const validateContact = createAction(VALIDATE_CONTACT)
export const contactValidateFail = createAction(CONTACT_VALIDATE_FAIL)
export const contactSuccess = createAction(CONTACT_SUCCESS, true)
export const contactFail = createAction(CONTACT_FAIL)
export const clearContact = createAction(CLEAR_CONTACT, true)

function create(){
	const intialState = {
		data: {
			name: '',
			email: '',
			message: ''
		},
		errors: undefined
	}

	return reducer(intialState, [CHANGE_CONTACT, CLEAR_CONTACT, CONTACT_VALIDATE_FAIL])
}

export default create()