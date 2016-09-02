export function formMapStateToProps(key){
	return (state) => {
		return { values: state.forms[key] }
	}
}

export function formMapDispatchToProps([change, submit, close]){
	return (dispatch) => {
		return {
			change: (key, value) => {
				dispatch(change({key, value}))
			},
			submit: (evt) => {
				evt.preventDefault()
				dispatch(submit())
			},
			close: () => {
				dispatch(close())
			}
		}
	}
}

export function validator(){
	const validateText = (field) => field === '' || field === null
	const validateEmail = (field) => field.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null

	return (fields) => {
		let results = {}
		Object.keys(fields).forEach((key) => {
			if (key === 'email')
				results[key] = validateEmail(fields[key])
			else
				results[key] = validateText(fields[key])
		})
		return results;
	}
}

export default(intialState, [change, clear, fail]) => {
	return (state = intialState, action) => {
		let merge = require('deepmerge')
		let payload = action.payload
		switch (action.type){
			case change:
				return merge(state, { data: { [payload.key]: payload.value }})
			case fail:
				return merge(state, { errors: payload })
			case clear:
				return state = undefined;
			default:
				return state;
		}
	}
}
