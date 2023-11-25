import { Routes, Route } from 'react-router-dom';
import { Auth, Home, Landing, Create, Note } from './pages';
import { ProtectedRoute, SharedLayout } from './components';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<SharedLayout />
					</ProtectedRoute>
				}
			>
				<Route index element={<Home />} />
				<Route path='notes/create' element={<Create />} />
				<Route path='notes/edit/:noteId' element={<Create />} />
				<Route path='notes/:noteId' element={<Note />} />
			</Route>

			<Route path='/' element={<SharedLayout />}>
				<Route path='auth' element={<Auth />} />
				<Route path='landing' element={<Landing />} />
			</Route>
		</Routes>
	);
}

export default App;
