import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';

import Register from './pages/Register';
import Navegation from './components/Navegation';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { TokenContext } from './context/Context';
function App() {
	const { token } = useContext(TokenContext);
	// console.log(token);
	return (
		<>
			{' '}
			<Navegation></Navegation>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories/:category" element={<Categories />} />

				{token ? (
					<Route path="/dashboard" element={<Dashboard />} />
				) : (
					<Route path="/dashboard" element={<Home />} />
				)}

				<Route path="/register" element={<Register />} />
				<Route path="/product/:_id" element={<ProductPage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</>
	);
}

export default App;
