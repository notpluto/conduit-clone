
export function Tags(state=[], action) {
	switch(action.type) {
		case 'ADD_TAGS':
			return [...state, action.payload]
		default:
			return state;
	}
}

export function Articles(state=[], action) {
	// console.log(state,action)
	switch(action.type) {
		case 'ADD_ARTICLES':
			return [...state, action.payload]
		default:
			return state;
	}
}