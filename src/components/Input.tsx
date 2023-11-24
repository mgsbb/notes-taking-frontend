import React from 'react';

type Props = {
	value: string;
	label: string;
	id: string;
	type: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, label, id, type }: Props) => {
	return (
		<div className='flex flex-col gap-2	 justify-between items-start'>
			<label htmlFor={id} className='text-md md:text-lg lg:text-xl '>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
				className='border-b border-black/30 rounded-md p-2 w-full 
				text-white bg-gray-800 border-blue-700 focus:outline-none'
			/>
		</div>
	);
};

export default Input;
