import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const SearchContext = createContext('');

function App() {
	const [searchValue, setSearchValue] = useState('');

	return (
		<BrowserRouter>
			<div className="wrapper">
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>

					<Footer />
				</SearchContext.Provider>
			</div>
		</BrowserRouter>
	);
}

export default App;
