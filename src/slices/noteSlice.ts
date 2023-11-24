import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
import { TNoteFormData } from '../types';

// ==========================================================================================================
// Thunks
// ==========================================================================================================

export const getNotes = createAsyncThunk(
	'note/getNotes',
	async (_, thunkAPI) => {
		try {
			const response: any = await api.getNotes();
			return response.data;
		} catch (error: any) {
			// console.log(error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

// ==========================================================================================================

export const getNote = createAsyncThunk('note/getNote', async (_, thunkAPI) => {
	try {
		const response: any = await api.getNotes();
		return response.data;
	} catch (error: any) {
		// console.log(error);
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

// ==========================================================================================================

export const createNote = createAsyncThunk(
	'note/createNote',
	async (arg: { formData: TNoteFormData; navigate: any }, thunkAPI) => {
		try {
			const response: any = await api.createNote(arg.formData);
			arg.navigate(-1);
			return response.data;
		} catch (error: any) {
			// console.log(error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
// ==========================================================================================================

export const updateNote = createAsyncThunk(
	'note/updateNote',
	async (
		arg: { formData: TNoteFormData; noteId: string; navigate: any },
		thunkAPI
	) => {
		try {
			const response: any = await api.updateNote(arg.formData, arg.noteId);
			arg.navigate(-1);
			return response.data;
		} catch (error: any) {
			// console.log(error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

// ==========================================================================================================

export const deleteNote = createAsyncThunk(
	'note/deleteNote',
	async (arg: { noteId: string; navigate: any }, thunkAPI) => {
		try {
			const response: any = await api.deleteNote(arg.noteId);
			arg.navigate(-1);
			return response.data;
		} catch (error: any) {
			// console.log(error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

// ==========================================================================================================
// Initial state
// ==========================================================================================================

const initialState: {
	allNotes: TNoteFormData[];
	currentNote: TNoteFormData;
	message: string;
} = {
	allNotes: [],
	currentNote: {},
	message: '',
};

// ==========================================================================================================
// Slice
// ==========================================================================================================

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build
			.addCase(getNotes.pending, (state, action) => {
				state.message = 'Fetching notes...';
			})
			.addCase(getNotes.fulfilled, (state, action) => {
				state.message = 'Fetched successfully';
				state.allNotes = action.payload?.notes;
			})
			.addCase(getNotes.rejected, (state, action) => {})
			.addCase(getNote.pending, (state, action) => {})
			.addCase(getNote.fulfilled, (state, action) => {})
			.addCase(getNote.rejected, (state, action) => {});
	},
});

// ==========================================================================================================
// Exports
// ==========================================================================================================

const noteReducer = noteSlice.reducer;
export default noteReducer;