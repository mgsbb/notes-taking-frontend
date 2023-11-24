import React from 'react';

type Props = {
	value: string;
	label: string;
	id: string;
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = ({ value, onChange, label, id, type }: Props) => {
	return (
		<div className='flex justify-between items-center'>
			<label htmlFor={id} className='text-md md:text-lg lg:text-xl'>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
				className='border-b border-black/30 rounded-md p-2 w-2/3 md:w-1/2 
				text-white bg-transparent border-blue-700 focus:outline-none'
			/>
		</div>
	);
};

export default AuthInput;
