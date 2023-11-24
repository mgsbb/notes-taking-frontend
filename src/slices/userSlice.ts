import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
import { TAuthFormData } from '../types';

export const createUser = createAsyncThunk(
	'user/createUser',
	async (arg: { formData: TAuthFormData }) => {
		try {
			const response = await api.createUser(arg.formData);
			console.log(response);
		} catch (error) {}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		token: '',
	},
	reducers: {},
});

const userReducer = userSlice.reducer;
export default userReducer;
