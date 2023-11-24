import { Routes, Route } from 'react-router-dom';
import { Auth, Home } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/auth' element={<Auth />} />
		</Routes>
	);
}

export default App;
