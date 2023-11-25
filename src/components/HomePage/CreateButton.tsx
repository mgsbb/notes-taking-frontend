import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

// ==========================================================================================================
// Component
// ==========================================================================================================

const CreateButton = () => {
	return (
		<Link to='/notes/create' className='flex gap-2 items-center'>
			<button className='flex bg-blue-600 p-2 px-4 rounded-md items-center gap-2'>
				<Plus
					size={24}
					strokeWidth={1.5}
					className='dark:text-blue-200 text-white'
				/>
				<p className='hidden md:block dark:text-blue-200 text-white'>
					Create Note
				</p>
			</button>
		</Link>
	);
};

export default CreateButton;
