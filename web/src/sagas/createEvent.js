import { getEvent, eventValidateFail, eventSuccess, eventFail, clearEvent } from '../modules/createEvent'
import { VALIDATE_EVENT, EVENT_SUCCESS, EVENT_FAIL } from '../modules/createEvent'
import { fetchEvents } from '../modules/events'
import { toggleCreateEvent } from '../modules/ui'
import { requestCreateEvent} from '../utils/api'
import { toggleFormFlow } from '../utils/formUtils'

export default toggleFormFlow({
	types: [VALIDATE_EVENT, EVENT_SUCCESS, EVENT_FAIL],
	selector: getEvent,
	validation: {
		validationFail: eventValidateFail,
		request: requestCreateEvent,
		success: eventSuccess,
		fail: eventFail
	},
	toggleForm: toggleCreateEvent,
	fetch: fetchEvents
})