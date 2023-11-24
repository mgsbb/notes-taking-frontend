import axios, { InternalAxiosRequestConfig } from 'axios';
import { TAuthFormData } from '../types';

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
// API methods
// ==========================================================================================================

export const register = (formData: TAuthFormData) => {
	return api.post('/users', { formData });
};

export const login = (formData: TAuthFormData) => {
	return api.post('/users/login', { formData });
};
