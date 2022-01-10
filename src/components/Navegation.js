import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchData } from '../api/apiFunctions';
import LoginForm from './LoginForm';
import './Nav.css';
const Navegation = () => {
	const [categories, setCategories] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/categories`,
			setCategories
		);
	}, []);
	// console.log(categories);
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

							<Button variant="warning" className="text-uppercase w-25">
								logout
							</Button>
							<Nav.Link as={Link} to="/dashboard">
								Dashboard
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<LoginForm showModal={showModal} setShowModal={setShowModal}></LoginForm>
		</>
	);
};

export default Navegation;
