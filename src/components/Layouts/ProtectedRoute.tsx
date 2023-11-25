import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// ==========================================================================================================
// Component
// ==========================================================================================================

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState(localStorage.getItem('profile'));

	useEffect(() => {
		setToken(localStorage.getItem('profile'));
	}, []);

	if (!token || token === undefined) {
		return <Navigate to='/landing' />;
	}

	return children;
};

export default ProtectedRoute;
