import Logo from './Logo';
import AuthButton from './AuthButton';
import ToggleTheme from './ToggleTheme';

// ==========================================================================================================
// Component
// ==========================================================================================================

const Navbar = () => {
	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<header className='w-full border-b border-blue-800 text-white p-4'>
			<nav className='w-full md:w-5/6 lg:3/4  mx-auto flex justify-between items-center'>
				<Logo />

				<div className='flex gap-10 items-center'>
					<ToggleTheme />
					<AuthButton />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
