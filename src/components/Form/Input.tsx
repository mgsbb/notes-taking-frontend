import React from 'react';

// ==========================================================================================================
// Types
// ==========================================================================================================

type Props = {
	value: string;
	label: string;
	id: string;
	type: string;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// ==========================================================================================================
// Component
// ==========================================================================================================

const Input = ({ value, onChange, label, id, type, required }: Props) => {
	return (
		<div className='flex flex-col gap-2	 justify-between items-start'>
			<label
				htmlFor={id}
				className='text-md md:text-lg lg:text-xl dark:text-blue-300 text-blue-900'
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				required={required}
				value={value}
				onChange={onChange}
				className='dark:border-b border border-blue-700  rounded-md p-2 w-full 
				dark:text-white text-black dark:bg-gray-800  focus:outline-none'
			/>
		</div>
	);
};

export default Input;
