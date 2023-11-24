import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
import { TAuthFormData } from '../types';

// ==========================================================================================================
// Thunks
// ==========================================================================================================

export const register = createAsyncThunk(
	'user/register',
	async (arg: { formData: TAuthFormData; navigate: any }, thunkAPI) => {
		try {
			const response = await api.register(arg.formData);
			arg.navigate('/');
			return response.data;
		} catch (error) {
			console.log(error.response.data);
			return thunkAPI.rejectWithValue(error.response.data?.message);
		}
	}
);

// ==========================================================================================================

export const login = createAsyncThunk(
	'user/login',
	async (arg: { formData: TAuthFormData; navigate: any }, thunkAPI) => {
		try {
			const response = await api.login(arg.formData);
			arg.navigate('/');
			return response.data;
		} catch (error) {
			console.log(error.response.data);
			return thunkAPI.rejectWithValue(error.response.data?.message);
		}
	}
);

// ==========================================================================================================
// Slice
// ==========================================================================================================

const userSlice = createSlice({
	name: 'user',
	initialState: {
		token: '',
		message: '',
	},
	reducers: {},
	extraReducers: (build) => {
		build
			.addCase(register.pending, (state, action) => {
				state.message = 'Registering...';
			})
			.addCase(register.fulfilled, (state, action) => {
				state.message = 'Registered successfully';
				localStorage.removeItem('profile');
				state.token = action.payload?.token;
				localStorage.setItem('profile', JSON.stringify(action.payload));
			})
			.addCase(register.rejected, (state, action) => {
				state.message = action.payload as string;
			})
			.addCase(login.pending, (state, action) => {
				state.message = 'Logging in...';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.message = 'Logged in successfully';
				localStorage.removeItem('profile');
				state.token = action.payload?.token;
				localStorage.setItem('profile', JSON.stringify(action.payload));
			})
			.addCase(login.rejected, (state, action) => {
				state.message = action.payload as string;
			});
	},
});

// ==========================================================================================================
// Exports
// ==========================================================================================================

const userReducer = userSlice.reducer;
export default userReducer;
