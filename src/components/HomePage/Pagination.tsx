import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useQuery } from '../../hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';
import { getNotes } from '../../slices/noteSlice';
import { getLastPage, getRange } from '../../helpers/pagination';

// ==========================================================================================================
// Component
// ==========================================================================================================

const Pagination = ({ notesCount }: { notesCount: number }) => {
	const { searchQuery, sortQuery, pageQuery } = useQuery();

	const lastPage = getLastPage(notesCount);
	const { startNumber, endNumber } = getRange(pageQuery, notesCount);

	const dispatch = useDispatch<AppDispatch>();

	const navigate = useNavigate();

	const handlePrevPage = () => {
		navigate(
			`?search=${searchQuery}&page=${Number(pageQuery) - 1}&sort=${sortQuery}`
		);
		dispatch(
			getNotes({ page: pageQuery, sort: sortQuery, search: searchQuery })
		);
	};

	const handleNextPage = () => {
		navigate(
			`?search=${searchQuery}&page=${Number(pageQuery) + 1}&sort=${sortQuery}`
		);
		dispatch(
			getNotes({ page: pageQuery, sort: sortQuery, search: searchQuery })
		);
	};

	// ==========================================================================================================
	// JSX
	// ==========================================================================================================

	return (
		<div className='flex w-full justify-center items-center gap-10'>
			<button
				type='button'
				disabled={pageQuery === '1'}
				onClick={handlePrevPage}
			>
				<ArrowBigLeft size={36} strokeWidth={1} />
			</button>
			<p>
				{startNumber}-{endNumber} of {notesCount} results
			</p>
			<button
				type='button'
				disabled={pageQuery >= String(lastPage)}
				onClick={handleNextPage}
			>
				<ArrowBigRight size={36} strokeWidth={1} />
			</button>
		</div>
	);
};

export default Pagination;
