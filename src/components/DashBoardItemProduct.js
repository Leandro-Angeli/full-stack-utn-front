import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function DashBoardItemProduct(props) {
	console.log(props);
	return (
		<ListGroup.Item className="d-flex justify-content-between gap-3">
			{props.prods ? (
				<>
					<p>Productos : {props.prods.name} </p>
					<p className="ms-4">
						Categoria : {props.prods.category.replace(/_/g, ' ')}
					</p>
				</>
			) : null}

			<Button variant="success ms-auto">
				<i className="fas fa-edit"></i>
			</Button>
			<Button variant="danger">
				<i className="fas fa-trash"></i>
			</Button>
		</ListGroup.Item>
	);
}
