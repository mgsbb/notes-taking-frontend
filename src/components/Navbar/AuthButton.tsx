import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

import { logout } from '../../slices/userSlice';
import { useIsAuth } from '../../hooks';
import { useAppDispatch } from '../../hooks';

// ==========================================================================================================
// Component
// ==========================================================================================================

const AuthButton = () => {
	const isAuth = useIsAuth();
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<>
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
		</>
	);
};

export default AuthButton;
