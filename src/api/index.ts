import axios, { InternalAxiosRequestConfig } from 'axios';
import { TAuthFormData } from '../types';

const api = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

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

export const createUser = (formData: TAuthFormData) => {
	return api.post('/users', { formData });
};
