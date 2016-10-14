import reducer from '../utils/formUtils'
import createAction from '../utils/createAction'

export const CHANGE_NEWS = 'CHANGE_NEWS'
export const VALIDATE_NEWS = 'VALIDATE_NEWS'
export const NEWS_VALIDATE_FAIL = 'NEWS_VALIDATE_FAIL'
export const NEWS_SUCCESS = 'NEWS_SUCCESS'
export const NEWS_FAIL = 'NEWS_FAIL'
export const CLEAR_NEWS = 'CLEAR_NEWS'

export const getNews = (state) => state.forms.news.data

export const changeNews = createAction(CHANGE_NEWS, true)
export const validateNews = createAction(VALIDATE_NEWS)
export const newsValidateFail = createAction(NEWS_VALIDATE_FAIL)
export const newsSuccess = createAction(NEWS_SUCCESS, true)
export const newsFail = createAction(NEWS_FAIL)
export const clearNews = createAction(CLEAR_NEWS, true)

export const initialState = {
	data: {
		title: '',
		displayImg: '',
		content: ''
	},
	errors: undefined
}

export default reducer(initialState, [CHANGE_NEWS, CLEAR_NEWS, NEWS_VALIDATE_FAIL])