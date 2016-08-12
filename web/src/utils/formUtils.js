export function formMapStateToProps(key){
	return (state) => {
		return { values: state.forms[key] }
	}
}

export function formMapDispatchToProps({formChange, formSubmit}){
	return (dispatch) => {
		return {
			onChange: (key, value) => dispatch(formChange(key, value)),
			onSubmit: (evt) => {
				evt.preventDefault()
				dispatch(formSubmit())
			}
		}
	}
}


export function validate(){
	const validateText = (field) => {
		if (field === '' || field === null)
			return false
		else
			return true
	}

	const validateEmail = (first) => {
		return (email) => {
			if (first(email)){
				if (email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null)
					return false
				else
					return true
			}
			else
				return false
		}
	}

	return (fields) => {
		let results = {}
		Object.keys(fields).forEach((key) => {
			if (key === 'email')
				results[key] = validateEmail(validateText)(fields[key])
			else
				results[key] = validateText(fields[key])
		})
		return results;
	}
}

export default (intialState, [change, clear, fail]) =>
	(state = intialState, action) => {
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