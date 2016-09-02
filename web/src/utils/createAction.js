export default (type, payload) => {
	if (payload){
		return (payload) => {
			return { type, payload }
		}
	}
	else{
		return () => {
			return { type }
		}
	}
}