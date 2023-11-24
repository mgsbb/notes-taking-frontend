import React from 'react';
import { Link } from 'react-router-dom';
import { Medal } from 'lucide-react';

const Landing = () => {
	return (
		<div className='flex items-center justify-center flex-col mt-10 gap-10'>
			<div className='flex items-center justify-center flex-col'>
				<div
					className='mb-4 flex items-center  shadow-sm p-4 
        bg-amber-700 text-amber-100 rounded-full uppercase font-semibold'
				>
					<Medal className='h-6 w-6 mr-2' />
					No 1 Note Taker
				</div>

				<h1 className='text-3xl md:text-6xl text-center text-blue-400 mb-6 font-bold'>
					<span className='text-bold'>Note-Out </span>
					helps you
				</h1>

				<div
					className='text-3xl md:text-6xl bg-gradient-to-r from-blue-800 to-sky-600 
        text-white px-4 p-2 rounded-md pb-4 w-fit'
				>
					work forward.
				</div>
			</div>

			<div className='text-sm md:text-xl font-semibold text-neutral-300 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
				Create, edit and organize your notes. Capture ideas, reminders, taks and
				important information. Categorize your notes and sync across all of your
				devices.
			</div>

			<Link to='/auth'>
				<button
					type='button'
					className='p-4 font-semibold bg-blue-600 rounded-md text-white'
				>
					Get Note-Out for free
				</button>
			</Link>
		</div>
	);
};

export default Landing;
