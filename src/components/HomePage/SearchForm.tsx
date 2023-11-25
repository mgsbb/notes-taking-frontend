import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useQuery } from '../../hooks';
import { getNotes } from '../../slices/noteSlice';

// ==========================================================================================================
// Component
// ==========================================================================================================

const SearchForm = () => {
	const [search, setSearch] = useState('');

	const { pageQuery, sortQuery } = useQuery();

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate(`?search=${search}&page=${pageQuery}&sort=${sortQuery}`);
		dispatch(getNotes({ search: search, page: pageQuery, sort: sortQuery }));
	};

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<form
			onSubmit={handleSearch}
			className='w-2/3 md:w-1/2 flex justify-between border border-blue-600 rounded-md px-2'
		>
			<label htmlFor='search' className='hidden'>
				Search
			</label>
			<input
				type='text'
				placeholder='search'
				id='search'
				name='search'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
				className='p-2 bg-transparent  w-full dark:text-white 
				text-black dark:placeholder:text-blue-300 focus:outline-none placeholder:text-blue-600'
			/>

			<button className='text-blue-300'>
				<Search />
			</button>
		</form>
	);
};

export default SearchForm;
