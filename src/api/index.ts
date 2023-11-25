import axios, { InternalAxiosRequestConfig } from 'axios';
import { TAuthFormData, TNoteFormData } from '../types';

// ==========================================================================================================
// Axios instance
// ==========================================================================================================

const api = axios.create({
	baseURL: 'http://localhost:5000/api/v1',
	// withCredentials: false,
});

// ==========================================================================================================
// Axios interceptors
// ==========================================================================================================

api.interceptors.request.use(
	(req: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
		if (
			localStorage.getItem('profile') &&
			localStorage.getItem('profile') !== undefined
		) {
			req.headers.Authorization = `Bearer ${
				JSON.parse(localStorage.getItem('profile') || '')?.token
			}`;
		}
		return req;
	},
	(error) => {
		console.log(error);
	}
);

// ==========================================================================================================
// API methods - User
// ==========================================================================================================

export const register = (formData: TAuthFormData) => {
	return api.post('/users', { formData });
};

export const login = (formData: TAuthFormData) => {
	return api.post('/users/login', { formData });
};

// ==========================================================================================================
// API methods - Notes
// ==========================================================================================================

export const getNotes = (page: string, sort: string, search: string) => {
	return api.get(`/notes?sort=${sort}&search=${search}&page=${page}`);
};

export const getNote = (noteId: string) => {
	return api.get(`/notes/${noteId}`);
};

export const createNote = (formData: TNoteFormData) => {
	return api.post('/notes', { formData });
};

export const updateNote = (formData: TNoteFormData, noteId: string) => {
	return api.patch(`/notes/${noteId}`, { formData });
};

export const deleteNote = (noteId: string) => {
	return api.delete(`/notes/${noteId}`);
};
