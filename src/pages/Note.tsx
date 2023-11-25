import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pen, Trash, ChevronLeftCircle } from 'lucide-react';
import { deleteNote, getNote } from '../slices/noteSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

// ==========================================================================================================
// Component
// ==========================================================================================================

const Note = () => {
	const { noteId } = useParams();

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		if (noteId !== undefined) {
			dispatch(getNote({ noteId }));
		}
	}, [noteId]);

	const note = useAppSelector((state) => state.note.currentNote);

	const updatedTime =
		note?.updatedAt?.split('T')[0] +
		' ' +
		note?.updatedAt?.split('T')[1].split('.')[0];

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<div
			className='p-4 md:p-10 w-[90%] md:w-3/4 lg:w-2/3 mx-auto border
     border-blue-600 rounded-md mt-10 flex flex-col gap-6'
		>
			<div className='flex justify-between text-xl'>
				<div className='flex flex-col gap-2'>
					{/* title */}
					<h1 className='text-4xl font-bold w-full dark:text-blue-400 text-blue-900'>
						{note.title}
					</h1>

					{/* date */}
					<span className='text-xs dark:text-blue-200 text-blue-800'>
						{updatedTime}
					</span>
				</div>
			</div>

			<p className='flex gap-2 flex-wrap'>
				{/* TODO: Handle empty tags */}
				{note.tags?.split(',').map((tag) => (
					<span
						key={tag}
						className='bg-blue-800 dark:text-blue-200 text-white py-1 px-4 rounded-md'
					>
						{tag.length !== 0 && tag}
					</span>
				))}
			</p>

			{/* Back, edit, delete buttons */}
			<div className='flex items-center gap-6'>
				<button
					onClick={() => navigate(-1)}
					className='dark:text-blue-300 text-blue-800 text-sm md:text-base'
				>
					<ChevronLeftCircle size={36} strokeWidth={0.75} />
				</button>

				<button
					type='button'
					onClick={() => navigate(`/notes/edit/${note._id}`)}
					className='flex gap-2 items-center border border-green-500 py-1 
					px-2 md:px-4 rounded-md text-green-500'
				>
					<Pen size={16} strokeWidth={2} />
					<span className='hidden md:inline font-bold'>Edit</span>
				</button>

				<button
					type='button'
					onClick={() => {
						if (window.confirm('Are you sure?') && noteId !== undefined) {
							dispatch(deleteNote({ noteId, navigate }));
						}
					}}
					className='flex gap-2 items-center border border-red-500 py-1 
					px-2 md:px-4 rounded-md text-red-500'
				>
					<Trash size={16} strokeWidth={1.5} />
					<span className='hidden md:inline font-bold'>Delete</span>
				</button>
			</div>

			<p className='text-lg dark:text-blue-300 text-blue-800'>{note.content}</p>
		</div>
	);
};

export default Note;
