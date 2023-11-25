import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

// ==========================================================================================================
// Component
// ==========================================================================================================

const SharedLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default SharedLayout;
