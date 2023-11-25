import { useNavigate } from 'react-router-dom';
import { TNoteFormData } from '../../types';

const NotesTable = ({ notes }: { notes: TNoteFormData[] }) => {
	const navigate = useNavigate();
	return (
		<table className='table table-fixed w-full text-center border-collapse border-t border-blue-800'>
			<thead>
				<tr className='text-lg '>
					<th className='p-4'>Title</th>
					<th className='hidden md:table-cell'>Content</th>
					<th>Tags</th>
					<th>Updated</th>
				</tr>
			</thead>

			<tbody>
				{notes.map((note, index) => (
					<tr
						key={note._id}
						onClick={() => navigate(`/notes/${note._id}`)}
						className={`${
							index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'
						} cursor-pointer`}
					>
						<td className='p-2'>
							<span>{note.title?.substring(0, 15)}</span>
							<span>
								{note.title?.length && note.title.length > 15 && '...'}
							</span>
						</td>
						<td className='hidden md:table-cell'>
							<span>{note.content?.substring(0, 30)}</span>
							<span>
								{note.content?.length && note.content.length > 30 && '...'}
							</span>
						</td>
						<td>
							<span>{note.tags?.substring(0, 10)}</span>
							<span>{note.tags?.length && note.tags.length > 10 && '...'}</span>
						</td>
						<td>{note.updatedAt?.split('T')[0]}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default NotesTable;
