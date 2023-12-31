import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useIsAuth } from '../hooks';
import { Input, Button } from '../components';
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
			{/* Feedback to user */}
			{message !== '' ? (
				<h2 className='bg-blue-600 py-2 px-6 mt-6 rounded-lg'>{message}</h2>
			) : (
				<h2 className='py-2 px-6 mt-6 rounded-lg'></h2>
			)}

			{/* Login/register form */}
			<form
				onSubmit={handleSubmit}
				className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-2 md:p-6 lg:p-10 flex flex-col gap-6 border 
				 border-blue-900 rounded-lg'
			>
				<h1 className='text-3xl text-blue-600 dark:text-blue-300 font-bold text-center mt-2 mb-6'>
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
							required={true}
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
					type='email'
					label='Email:'
					value={formData.email}
					onChange={handleChange}
					id='email'
					required={true}
				/>

				<Input
					type='password'
					label='Password:'
					value={formData.password}
					onChange={handleChange}
					id='password'
					required={true}
				/>

				{!isLogin && (
					<Input
						type='password'
						label='Confirm password:'
						value={formData.confirmPassword}
						onChange={handleChange}
						id='confirmPassword'
						required={true}
					/>
				)}

				<div className='flex flex-col md:flex-row gap-3 justify-around my-6'>
					<Button type='submit' variant='solid' label='Submit' />

					<Button
						type='button'
						variant='outlined'
						label={isLogin ? 'New User? Register' : 'Existing User? Login'}
						onClick={() => setIsLogin(!isLogin)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Auth;
