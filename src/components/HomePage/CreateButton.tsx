import { Link } from 'react-router-dom';
import { Pen } from 'lucide-react';

const CreateButton = () => {
	return (
		<Link to='/notes/create' className='flex gap-2 items-center'>
			<button className='flex bg-blue-600 p-2 px-4 rounded-md items-center gap-2'>
				<Pen size={24} strokeWidth={1.5} className='text-blue-300' />
				<p className='hidden md:block'>Create Note</p>
			</button>
		</Link>
	);
};

export default CreateButton;
