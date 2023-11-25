import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeftCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { TNoteFormData } from '../types';
import { Input, Button } from '../components';
import { createNote, getNote, updateNote } from '../slices/noteSlice';

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
	const [formData, setFormData] = useState(initialState);

	const location = useLocation();
	const isEdit = location.pathname.includes('/edit') ? true : false;
	const { noteId } = useParams();

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (noteId !== undefined) dispatch(getNote({ noteId }));
	}, [noteId, dispatch]);

	const currentNote = useAppSelector((state) => state.note.currentNote);

	useEffect(() => {
		if (isEdit) {
			setFormData(() => {
				return {
					title: currentNote.title,
					content: currentNote.content,
					tags: currentNote.tags,
				};
			});
		}
	}, [isEdit, currentNote]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isEdit) {
			if (noteId !== undefined) {
				dispatch(updateNote({ formData, noteId, navigate }));
			}
		} else {
			dispatch(createNote({ formData, navigate }));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<div className='w-full p-10'>
			<form
				onSubmit={handleSubmit}
				className='w-full md:w-3/4 lg:w-1/2 mx-auto mt-10 p-2 md:p-6 lg:p-10 flex flex-col gap-6 border 
				 border-blue-900 rounded-lg '
			>
				<div className='flex flex-row items-center my-4'>
					{/* Back button */}
					{/* BUG: Navigates back home always */}
					<button
						className='text-blue-600 dark:text-blue-300'
						onClick={() => navigate(-1)}
					>
						<ChevronLeftCircle size={48} strokeWidth={0.75} />
					</button>

					{/* Title */}
					<h1 className='text-3xl font-bold text-center w-full text-blue-600 dark:text-blue-300'>
						{isEdit ? 'Edit Note' : 'Create Note'}
					</h1>
				</div>

				<Input
					type='text'
					label='Title: '
					value={formData.title!}
					onChange={handleChange}
					id='title'
					required={true}
				/>

				<Input
					type='text'
					label='Tags: (comma separated)'
					value={formData.tags!}
					onChange={handleChange}
					id='tags'
				/>

				<div className='flex flex-col justify-between items-start w-full gap-2'>
					<label
						htmlFor='content'
						className='text-md md:text-lg lg:text-xl dark:text-blue-300 text-blue-900'
					>
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
						className='dark:border-b border border-black/30 rounded-md p-2 w-full bg-gray-800
				dark:text-white bg-transparent border-blue-700 focus:outline-none'
					></textarea>
				</div>

				<div className='flex flex-col md:flex-row gap-3 justify-around my-6'>
					<Button
						type='button'
						variant='outlined'
						label='Reset'
						onClick={() => setFormData(initialState)}
					/>

					<Button type='submit' variant='solid' label='Submit' />
				</div>
			</form>
		</div>
	);
};

export default CreateNote;
