import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function ProductCard(props) {
	return (
		<Col md={3}>
			<Card>
				<h2>{props.product.name}</h2>
			</Card>
		</Col>
	);
}
