import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLocalTheme } from '../../hooks/theme';

const ToggleTheme = () => {
	const currentTheme = useLocalTheme();

	const [theme, setTheme] = useState(currentTheme);

	const toggleTheme = () => {
		if (theme === 'dark') {
			localStorage.setItem('theme', 'light');
			setTheme('light');
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
			document.documentElement.classList.add('dark');
		}
	};

	return (
		<button onClick={toggleTheme} className='dark:text-blue-300 text-blue-600'>
			{theme === 'dark' ? <Sun /> : <Moon />}
		</button>
	);
};

export default ToggleTheme;
