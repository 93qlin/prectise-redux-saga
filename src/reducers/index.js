import { combineReducers } from 'redux';
import user from './users';
import counter from './counter'
export default combineReducers( {
	user,
	counter
} )
