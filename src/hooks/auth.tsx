import { useEffect, useState } from 'react';

export const useIsAuth = () => {
	const [profile, setProfile] = useState(localStorage.getItem('profile'));

	useEffect(() => {
		if (localStorage.getItem('profile')) {
			setProfile(localStorage.getItem('profile'));
		}
	}, []);

	if (profile) return true;
	return false;
};
