import { createStore, combineReducers } from 'redux';
import { Tags, Articles, FilterTags, User, UserInfo } from './reducers/reducer'

const rootReducer = combineReducers({
	Tags,
	Articles,
	FilterTags,
	User,
	UserInfo
})

export const store = createStore(rootReducer);