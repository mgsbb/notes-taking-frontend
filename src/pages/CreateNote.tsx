import React, { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChevronLeftCircle } from 'lucide-react';

import { useIsAuth } from '../hooks';
import { AppDispatch } from '../store';
import { TNoteFormData } from '../types';
import { Input } from '../components';
import { createNote } from '../slices/noteSlice';

// ==========================================================================================================
// Initial state
// ==========================================================================================================

const initialState: TNoteFormData = {
	title: '',
	content: '',
	tags: '',
};

// ==========================================================================================================
// Component
// ==========================================================================================================

const CreateNote = () => {
	const isAuth = useIsAuth();
	const [formData, setFormData] = useState(initialState);

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(createNote({ formData, navigate }));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================
	if (!isAuth) {
		return <Navigate to='/login' />;
	}

	return (
		<div className='w-full p-10'>
			<form
				onSubmit={handleSubmit}
				className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-2 md:p-6 lg:p-10 flex flex-col gap-6 border 
				 border-blue-900 rounded-lg'
			>
				<div className='flex flex-row items-center my-4'>
					<Link to='/'>
						<ChevronLeftCircle size={48} strokeWidth={0.75} />
					</Link>
					<h1 className='text-3xl font-bold text-center w-full'>Create Note</h1>
				</div>

				<Input
					type='text'
					label='Title: '
					value={formData.title}
					onChange={handleChange}
					id='title'
				/>

				<Input
					type='text'
					label='Tags: (comma separated)'
					value={formData.tags}
					onChange={handleChange}
					id='tags'
				/>

				<div className='flex flex-col justify-between items-start w-full gap-2'>
					<label htmlFor='content' className='text-md md:text-lg lg:text-xl'>
						Content:
					</label>
					<textarea
						name='content'
						id='content'
						cols={30}
						rows={10}
						value={formData.content}
						onChange={(e) => {
							setFormData({ ...formData, [e.target.name]: e.target.value });
						}}
						className='border-b border-black/30 rounded-md p-2 w-full bg-gray-800
				text-white bg-transparent border-blue-700 focus:outline-none'
					></textarea>
				</div>

				<div className='flex flex-col md:flex-row gap-3 justify-around my-6'>
					<button
						type='button'
						onClick={() => setFormData(initialState)}
						className='w-full md:w-1/2 font-semibold  border border-blue-600 p-2 rounded-md'
					>
						Reset
					</button>

					<button
						type='submit'
						className='w-full md:w-1/2 font-semibold bg-blue-600 p-2 rounded-md'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateNote;
