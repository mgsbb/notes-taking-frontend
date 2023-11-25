import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useQuery = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const query = new URLSearchParams(location.search);

	const pageQuery = query.get('page') || '1';
	const searchQuery = query.get('search') || '';
	const sortQuery = query.get('sort') || '';

	useEffect(() => {
		if (searchQuery || searchQuery === '') {
			navigate(`/?search=${searchQuery}&page=${pageQuery}&sort=${sortQuery}`);
		}
	}, [searchQuery, pageQuery, sortQuery, navigate]);

	return { pageQuery, searchQuery, sortQuery };
};
