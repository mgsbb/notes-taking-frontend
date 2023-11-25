import { Link } from 'react-router-dom';
import { ScrollText } from 'lucide-react';

// ==========================================================================================================
// Component
// ==========================================================================================================

const Logo = () => {
	return (
		<Link to='/landing' className='flex gap-2 dark:text-blue-300 text-blue-600'>
			<ScrollText />
			<p className='font-extrabold'>Note-Out</p>
		</Link>
	);
};

export default Logo;
