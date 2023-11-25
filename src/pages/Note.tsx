import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Pen, Trash } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { getNote } from '../slices/noteSlice';
import { AppDispatch, RootState } from '../store';

const Note = () => {
	const { noteId } = useParams();

	const dispatch = useDispatch<AppDispatch>();

	const navigate = useNavigate();

	useEffect(() => {
		if (noteId !== undefined) {
			dispatch(getNote({ noteId }));
		}
	}, [noteId]);

	const note = useSelector((state: RootState) => state.note.currentNote);

	const updatedTime =
		note?.updatedAt?.split('T')[0] +
		' ' +
		note?.updatedAt?.split('T')[1].split('.')[0];

	return (
		<div
			className='p-10 w-full md:w-3/4 lg:w-2/3 mx-auto border
     border-blue-600 rounded-md mt-10 flex flex-col gap-6'
		>
			<div className='flex justify-between text-xl'>
				<div className='flex flex-col gap-2'>
					{/* title */}
					<h1 className='text-4xl font-bold w-full'>{note.title}</h1>

					{/* date */}
					<span className='text-xs'>{updatedTime}</span>
				</div>
			</div>

			<p className='flex gap-2 flex-wrap'>
				{/* TODO: Handle empty tags */}
				{note.tags?.split(',').map((tag) => (
					<span className='bg-blue-800 py-1 px-4 rounded-md'>
						{tag.length !== 0 && tag}
					</span>
				))}
			</p>

			<div className='flex items-center gap-6'>
				<button
					type='button'
					onClick={() => navigate(`/notes/edit/${note._id}`)}
					className='flex gap-2 items-center border border-green-500 py-1 px-4 rounded-md text-green-500'
				>
					<Pen size={16} strokeWidth={1.5} />
					<span>Edit</span>
				</button>

				<button
					type='button'
					className='flex gap-2 items-center border border-red-500 py-1 px-4 rounded-md text-red-500'
				>
					<Trash size={16} strokeWidth={1.5} />
					<span>Delete</span>
				</button>
			</div>

			<p className='text-lg'>{note.content}</p>
		</div>
	);
};

export default Note;
