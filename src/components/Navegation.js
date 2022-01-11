import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchData } from '../api/apiFunctions';
import { deleteToken } from '../jwt/jwt';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/Context';
import './Nav.css';

const Navegation = (props) => {
	const [categories, setCategories] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [dashboardLink, setStateDashBoardLink] = useState('dashboard');
	const { token, setToken } = useContext(TokenContext);

	const navigate = useNavigate();
	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/categories`,
			setCategories
		);
	}, []);

	// const handleLogout = () => {
	// 	deleteToken();
	// 	props.setAuth(!props.auth);
	// 	navigate('/');
	// };

	return (
		<>
			<Navbar expand="md" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">
						Market App{' '}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto text-uppercase">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<NavDropdown title="categorias" id="basic-nav-dropdown">
								{categories
									? categories.map((c, i) => {
											return (
												<NavDropdown.Item
													key={i}
													as={Link}
													to={`/categories/${c}`}
													style={{ cursor: 'pointer' }}
												>
													{c.replace(/_/g, ' ')}
												</NavDropdown.Item>
											);
									  })
									: null}
							</NavDropdown>
							<Nav.Link as={Link} to="/register">
								Registrarse
							</Nav.Link>

							<Nav.Link
								as={'button'}
								className="text-uppercase"
								onClick={() => {
									setShowModal(!showModal);
								}}
							>
								Login
							</Nav.Link>

							<Button
								onClick={() => {
									setToken(window.localStorage.removeItem('jwt'));
								}}
								variant="warning"
								className="text-uppercase w-25"
							>
								logout
							</Button>

							{token && (
								<Nav.Link as={Link} to="/dashboard">
									{dashboardLink}
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<LoginForm showModal={showModal} setShowModal={setShowModal}></LoginForm>
		</>
	);
};

export default Navegation;
