import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navegation from './components/Navegation';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Navegation></Navegation>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
