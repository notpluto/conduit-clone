
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

export function FilterTags(state=[], action) {
	// console.log(action);
	switch(action.type) {
		case 'FILTER_USING_TAGS':
			return action.payload
		default:
		return state;
	}
}

export function User(state=[], action) {
	console.log(state,action)
	switch(action.type) {
		case 'SHOW_USER_SECTION':
			return [...state, action.payload]
		case 'SHOW_USER_ARTICLES':
			return state, action.payload
		default:
			return state;
	}
}