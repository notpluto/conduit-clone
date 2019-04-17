import { createStore, combineReducers } from 'redux';
import { Tags, Articles, FilterTags, User } from './reducers/reducer'

const rootReducer = combineReducers({
	Tags,
	Articles,
	FilterTags,
	User
})

export const store = createStore(rootReducer);