import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
	return (
		<header className='w-full border-b border-blue-800 text-white p-4'>
			<nav className='w-full md:w-5/6 lg:3/4  mx-auto flex justify-between items-center'>
				<Logo />
				<Link to='/auth'>
					<button className='bg-blue-600 px-4 py-2 rounded-md font-semibold'>
						Login
					</button>
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
