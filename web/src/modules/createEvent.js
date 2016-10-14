import reducer from '../utils/formUtils'
import createAction from '../utils/createAction'

export const CHANGE_EVENT = 'CHANGE_EVENT'
export const VALIDATE_EVENT = 'VALIDATE_EVENT'
export const EVENT_VALIDATE_FAIL = 'EVENT_VALIDATE_FAIL'
export const EVENT_SUCCESS = 'EVENT_SUCCESS'
export const EVENT_FAIL = 'EVENT_FAIL'
export const CLEAR_EVENT = 'CLEAR_EVENT'

export const getEvent = (state) => state.forms.event.data

export const changeEvent = createAction(CHANGE_EVENT, true)
export const validateEvent = createAction(VALIDATE_EVENT)
export const eventValidateFail = createAction(EVENT_VALIDATE_FAIL)
export const eventSuccess = createAction(EVENT_SUCCESS, true)
export const eventFail = createAction(EVENT_FAIL)
export const clearEvent = createAction(CLEAR_EVENT, true)

export const initialState = {
	data: {
		title: '',
		startDate: '',
		endDate: '',
		desc: '',
		manager: '',
		decor: '',
		marketing: '',
		catering: ''
	},
	errors: undefined
}

export default reducer(initialState, [CHANGE_EVENT, CLEAR_EVENT, EVENT_VALIDATE_FAIL])