import { Routes, Route } from 'react-router-dom';
import { AuthForm, Home, Landing, CreateNote } from './pages';
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
				<Route path='create' element={<CreateNote />} />
			</Route>

			<Route path='/' element={<SharedLayout />}>
				<Route path='auth' element={<AuthForm />} />
				<Route path='landing' element={<Landing />} />
			</Route>
		</Routes>
	);
}

export default App;
