import createAction from '../utils/createAction'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'

export const fetchUsers = createAction(FETCH_USERS)
export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS, true)
export const fetchUsersFail = createAction(FETCH_USERS_FAIL, true)

function create(){
	const initialState = []

	return (state = initialState, action) => {
		const { payload } = action
		switch(action.type){
			case FETCH_USERS_SUCCESS:
				return state = payload
			default:
				return state
		}
	}
}

export default create()