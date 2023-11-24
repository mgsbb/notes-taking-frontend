import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import noteReducer from './noteSlice';

export default combineReducers({
	user: userReducer,
	note: noteReducer,
});
