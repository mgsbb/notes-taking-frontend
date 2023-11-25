import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchForm = () => {
	const [search, setSearch] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(search);
	};

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
				className='p-2 bg-transparent  w-full  text-white placeholder:text-blue-300 focus:outline-none'
			/>

			<button className='text-blue-300'>
				<Search />
			</button>
		</form>
	);
};

export default SearchForm;
