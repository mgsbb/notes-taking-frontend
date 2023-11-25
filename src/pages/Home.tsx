import { useEffect } from 'react';
import {
	SearchForm,
	CreateButton,
	Pagination,
	NotesTable,
} from '../components';
import { getNotes } from '../slices/noteSlice';
import { useAppDispatch, useAppSelector, useQuery } from '../hooks';

// ==========================================================================================================
// Component
// ==========================================================================================================

const Home = () => {
	const dispatch = useAppDispatch();

	const { pageQuery, searchQuery, sortQuery } = useQuery();

	const notes = useAppSelector((state) => state.note.allNotes);

	useEffect(() => {
		dispatch(
			getNotes({ page: pageQuery, search: searchQuery, sort: sortQuery })
		);
	}, [dispatch]);

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<div className='w-full md:w-5/6 mx-auto flex flex-col gap-6 mt-5 px-4 md:p-0'>
			<div className='flex justify-between items-center w-full'>
				<CreateButton />
				<SearchForm />
			</div>

			<Pagination notesCount={notes.length} />

			<main className='w-full'>
				{notes.length === 0 ? (
					<p className='text-3xl'>No notes found</p>
				) : (
					<NotesTable notes={notes} />
				)}
			</main>
		</div>
	);
};

export default Home;
