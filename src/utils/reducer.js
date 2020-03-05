export default (state, action) => {
	switch(action.type){
		case 'ChangeName' :
		return({
			...state,
			name:action.payLoad
		});
		default:
		return state;
	}
}