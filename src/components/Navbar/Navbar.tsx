import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogOut } from 'lucide-react';

import type { AppDispatch } from '../../store';
import { logout } from '../../slices/userSlice';
import useIsAuth from '../../hooks/useIsAuth';
import Logo from './Logo';

// ==========================================================================================================
// JSX
// ==========================================================================================================

const Navbar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const isAuth = useIsAuth();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<header className='w-full border-b border-blue-800 text-white p-4'>
			<nav className='w-full md:w-5/6 lg:3/4  mx-auto flex justify-between items-center'>
				<Logo />

				<div className='flex gap-10 items-center'>
					{isAuth ? (
						<Link to='/landing'>
							<button
								type='button'
								onClick={handleLogout}
								className='bg-blue-600 px-4 py-2 rounded-md font-semibold'
							>
								<LogOut />
							</button>
						</Link>
					) : (
						<Link to='/auth'>
							<button className='bg-blue-600 px-4 py-2 rounded-md font-semibold'>
								Login
							</button>
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
