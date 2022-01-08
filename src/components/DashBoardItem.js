import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function DashBoardItem(props) {
	// console.log(props.users);
	return (
		<ListGroup.Item
			key={props.users._id}
			className="d-flex justify-content-evenly gap-3"
		>
			<h5 className="fas fa-user align-self-center"> </h5>

			<h5>Nombre:{props.users.name}</h5>
			<h5>E-mail : {props.users.email}</h5>
			<Button variant="success">
				<i className="fas fa-edit"></i>
			</Button>
			<Button variant="danger">
				<i className="fas fa-trash"></i>
			</Button>
		</ListGroup.Item>
	);
}
