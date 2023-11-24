import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../slices/noteSlice';
import { AppDispatch, RootState } from '../store';
import { Sidebar } from '../components';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();

	const notes = useSelector((state: RootState) => state.note.allNotes);

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	return (
		<div className='w-full md:w-5/6 mx-auto flex gap-10 mt-10'>
			<Sidebar />
			<main>
				{notes.map((note) => (
					<div key={note._id}>
						{note.title}
						{note.content}
						{note.tags}
					</div>
				))}
			</main>
		</div>
	);
};

export default Home;
