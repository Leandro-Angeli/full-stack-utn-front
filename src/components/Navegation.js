import React from 'react';
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';
const Navegation = () => {
	return (
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
							<NavDropdown.Item>Categorias</NavDropdown.Item>
							<NavDropdown.Item>Another action</NavDropdown.Item>
							<NavDropdown.Item>Something</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/register">
							Registrarse
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
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
	);
};

export default Navegation;
