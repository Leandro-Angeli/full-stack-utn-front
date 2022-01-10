import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './card.css';

export default function ProductCard(props) {
	// console.log(props.product);
	return (
		<Card key={props.product._id} className="product-card">
			<Breadcrumb className="text-capitalize">
				<Nav.Link as={Link} to="/" className="breadcrumb-item p-1">
					<i className="fas fa-home"></i>
				</Nav.Link>

				<Nav.Link
					as={Link}
					to={`/categories/${props.product.category}`}
					className="breadcrumb-item p-1"
				>
					{props.product.category.replace(/_/g, ' ')}
				</Nav.Link>
				<Nav.Link
					active
					as={Link}
					to={`/product/${props.product._id}`}
					className="breadcrumb-item p-1"
				>
					{props.product.name}
				</Nav.Link>
			</Breadcrumb>
			<Card.Img
				variant="top"
				className="img-fluid"
				src={
					`/assets/products_img/supermarket-shopping.jpg` ||
					props.product.img ||
					' '
				}
			/>
			<Card.Body>
				<Card.Text>{props.product?.name}</Card.Text>
				<Card.Text>{props.product?.description}</Card.Text>
				<Card.Text>{props.product?.price} $</Card.Text>
			</Card.Body>
		</Card>
	);
}
