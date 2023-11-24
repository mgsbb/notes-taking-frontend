import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='border'>
			<Link to='/create'>
				<button className='px-6 py-2 bg-blue-600 rounded-md border-none'>
					Create note
				</button>
			</Link>
		</div>
	);
};

export default Sidebar;
