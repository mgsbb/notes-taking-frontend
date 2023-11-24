import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthInput } from '../components';
import { TAuthFormData } from '../types';
import { register, login } from '../slices/userSlice';
import type { AppDispatch, RootState } from '../store';

// ==========================================================================================================
// Initial state
// ==========================================================================================================

const initialState: TAuthFormData = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

// ==========================================================================================================
// JSX
// ==========================================================================================================

const Auth = () => {
	const [token, setToken] = useState(localStorage.getItem('profile'));

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const message = useSelector((state: RootState) => state.user.message);

	const [formData, setFormData] = useState(initialState);
	const [isLogin, setIsLogin] = useState(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isLogin) {
			dispatch(login({ formData, navigate }));
		} else {
			dispatch(register({ formData, navigate }));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	if (token) {
		return <Navigate to='/' />;
	}

	return (
		<div className='flex flex-col justify-center items-center mt-4 p-6'>
			{/* Feedback to user */}
			{message !== '' && (
				<h2 className='bg-green-400 py-2 px-6  rounded-lg'>{message}</h2>
			)}

			{/* Login/register form */}
			<form
				onSubmit={handleSubmit}
				className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-2 md:p-6 lg:p-10 flex flex-col gap-6 border rounded-lg'
			>
				<h1 className='text-3xl font-bold text-center mt-2 mb-6'>
					{isLogin ? 'Login' : 'Register'}
				</h1>

				{!isLogin && (
					<>
						<AuthInput
							type='text'
							label='First Name:'
							value={formData.firstName}
							onChange={handleChange}
							id='firstName'
						/>

						<AuthInput
							type='text'
							label='Last Name:'
							value={formData.lastName}
							onChange={handleChange}
							id='lastName'
						/>
					</>
				)}

				<AuthInput
					type='text'
					label='Email:'
					value={formData.email}
					onChange={handleChange}
					id='email'
				/>

				<AuthInput
					type='password'
					label='Password'
					value={formData.password}
					onChange={handleChange}
					id='password'
				/>

				{!isLogin && (
					<AuthInput
						type='password'
						label='Confirm password:'
						value={formData.confirmPassword}
						onChange={handleChange}
						id='confirmPassword'
					/>
				)}

				<div className='flex flex-col md:flex-row gap-3 justify-around my-6'>
					<button
						type='submit'
						className='w-full md:w-1/2  bg-green-400 p-2 rounded-md'
					>
						Submit
					</button>

					<button
						type='button'
						onClick={() => setIsLogin(!isLogin)}
						className='w-full md:w-1/2  border border-green-400 p-2 rounded-md'
					>
						{isLogin ? 'New User? Register' : 'Existing User? Login'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
