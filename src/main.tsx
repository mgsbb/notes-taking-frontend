import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store.js';
import App from './App.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<div className='dark:bg-gray-900 min-h-screen'>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</div>
		</Provider>
	</React.StrictMode>
);
