export const useLocalTheme = () => {
	const theme = localStorage.getItem('theme');

	if (!theme) {
		localStorage.setItem('theme', 'dark');
		document.documentElement.classList.add('dark');
		return 'dark';
	}

	if (theme === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		document.documentElement.classList.add('dark');
	}

	return theme;
};
