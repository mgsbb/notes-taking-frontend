import { Routes, Route } from 'react-router-dom';
import { Auth, Home, Landing } from './pages';
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
			</Route>

			<Route path='/' element={<SharedLayout />}>
				<Route path='auth' element={<Auth />} />
				<Route path='landing' element={<Landing />} />
			</Route>
		</Routes>
	);
}

export default App;
