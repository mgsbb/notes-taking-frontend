import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const Pagination = () => {
	return (
		<div className='flex w-full justify-center items-center gap-10'>
			<ArrowBigLeft size={36} strokeWidth={1} className='cursor-pointer' />
			<p>1-10 of 240</p>
			<ArrowBigRight size={36} strokeWidth={1} className='cursor-pointer' />
		</div>
	);
};

export default Pagination;
