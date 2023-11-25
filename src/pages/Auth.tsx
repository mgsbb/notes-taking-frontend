import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useIsAuth } from '../hooks';
import { Input } from '../components';
import { TAuthFormData } from '../types';
import { register, login } from '../slices/userSlice';

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
// Component
// ==========================================================================================================

const Auth = () => {
	const isAuth = useIsAuth();

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const message = useAppSelector((state) => state.user.message);

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

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	if (isAuth) {
		return <Navigate to='/' />;
	}

	return (
		<div className='flex flex-col justify-center items-center mt-4 p-6'>
			{/* Login/register form */}
			<form
				onSubmit={handleSubmit}
				className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-2 md:p-6 lg:p-10 flex flex-col gap-6 border 
				 border-blue-900 rounded-lg'
			>
				<h1 className='text-3xl font-bold text-center mt-2 mb-6'>
					{isLogin ? 'Login' : 'Register'}
				</h1>

				{!isLogin && (
					<>
						<Input
							type='text'
							label='First Name:'
							value={formData.firstName}
							onChange={handleChange}
							id='firstName'
						/>

						<Input
							type='text'
							label='Last Name:'
							value={formData.lastName}
							onChange={handleChange}
							id='lastName'
						/>
					</>
				)}

				<Input
					type='text'
					label='Email:'
					value={formData.email}
					onChange={handleChange}
					id='email'
				/>

				<Input
					type='password'
					label='Password:'
					value={formData.password}
					onChange={handleChange}
					id='password'
				/>

				{!isLogin && (
					<Input
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
						className='w-full md:w-1/2 font-semibold bg-blue-600 p-2 rounded-md'
					>
						Submit
					</button>

					<button
						type='button'
						onClick={() => setIsLogin(!isLogin)}
						className='w-full md:w-1/2 font-semibold  border border-blue-600 p-2 rounded-md'
					>
						{isLogin ? 'New User? Register' : 'Existing User? Login'}
					</button>
				</div>
			</form>

			{/* Feedback to user */}
			{message !== '' && (
				<h2 className='bg-blue-600 py-2 px-6 mt-6 rounded-lg'>{message}</h2>
			)}
		</div>
	);
};

export default Auth;
