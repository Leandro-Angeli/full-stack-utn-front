import React, { useEffect, useState } from 'react';
import { Row, Tab, Col, Nav, ListGroup, Button } from 'react-bootstrap';
import { fetchData } from '../api/apiFunctions';
import DashBoardItem from '../components/DashBoardItem';
import DashBoardItemProduct from '../components/DashBoardItemProduct';
import './dashboard.css';
export default function Dashboard() {
	const [prods, setProds] = useState();
	const [users, setUsers] = useState();

	useEffect(() => {
		fetchData(`${process.env.REACT_APP_BACK_END_URI}/products`, setProds);
		fetchData(`${process.env.REACT_APP_BACK_END_URI}/users`, setUsers);
	}, []);
	// console.log(prods);
	// console.log(users);
	return (
		<div className="container my-5">
			<h1 className="my-5 text-uppercase" style={{ color: 'var(--my-green)' }}>
				Dashboard
			</h1>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3} xs={12}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">Usuarios</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Productos</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9} xs={12}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<ListGroup className="gap-5">
									{users
										? users.map((u, i) => {
												return (
													<DashBoardItem key={i} users={u}></DashBoardItem>
												);
										  })
										: null}
								</ListGroup>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<ListGroup>
									<ListGroup.Item className="d-flex justify-content-between ">
										<p>Agregar Producto</p>{' '}
										<Button variant="primary">
											<i className="far fa-plus-square"></i>
										</Button>{' '}
									</ListGroup.Item>
									{prods
										? prods.map((p) => {
												return (
													<DashBoardItemProduct
														key={p._id}
														prods={p}
													></DashBoardItemProduct>
												);
										  })
										: null}
								</ListGroup>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
}
