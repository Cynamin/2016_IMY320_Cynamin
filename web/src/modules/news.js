import createAction from '../utils/createAction'

export const FETCH_NEWS = 'FETCH_NEWS'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL'

export const fetchNews = createAction(FETCH_NEWS)
export const fetchNewsSuccess = createAction(FETCH_NEWS_SUCCESS, true)
export const fetchNewsFail = createAction(FETCH_NEWS_FAIL, true)

function create(){
	const initialState = []

	return (state = initialState, action) => {
		const { payload } = action
		switch(action.type){
			case FETCH_NEWS_SUCCESS:
				return state = payload
			default:
				return state
		}
	}
}

export default create()