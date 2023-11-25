import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	SearchForm,
	CreateButton,
	Pagination,
	NotesTable,
} from '../components';
import { getNotes } from '../slices/noteSlice';
import { AppDispatch, RootState } from '../store';
import { useQuery } from '../hooks';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();

	const { pageQuery, searchQuery, sortQuery } = useQuery();

	const notes = useSelector((state: RootState) => state.note.allNotes);

	useEffect(() => {
		dispatch(
			getNotes({ page: pageQuery, search: searchQuery, sort: sortQuery })
		);
	}, [dispatch]);

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
