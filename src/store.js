import { createStore, combineReducers } from 'redux';
import { Tags, Articles } from './reducers/reducer'

const rootReducer = combineReducers({
	Tags,
	Articles
})

export const store = createStore(rootReducer);