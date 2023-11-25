import React from 'react';

// ==========================================================================================================
// Types
// ==========================================================================================================

type Props = {
	type: 'button' | 'submit' | 'reset';
	variant: 'solid' | 'outlined';
	onClick?: () => void;
	label: string | React.ReactNode;
};
// ==========================================================================================================
// Component
// ==========================================================================================================

const Button = ({ type, variant, onClick, label }: Props) => {
	return (
		<button
			type={type}
			className={`${
				variant === 'solid'
					? 'w-full md:w-1/2 font-semibold bg-blue-600 dark:text-blue-100 text-white p-2 rounded-md'
					: 'w-full md:w-1/2 font-semibold  border border-blue-600 dark:text-blue-300 p-2 rounded-md text-blue-600'
			}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
