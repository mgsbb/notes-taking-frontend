import React, { useState } from 'react';
import { AuthInput } from '../components';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Auth = () => {
	const [formData, setFormData] = useState(initialState);
	const [isLogin, setIsLogin] = useState(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='flex flex-col justify-center items-center mt-4 p-6'>
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
