import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import DeleteModal from './DeleteModal';
import ProductForm from './ProductForm';

export default function DashBoardItemProduct(props) {
	// console.log(props);
	const products = { ...props.prods };

	const [showProductModal, setProductModal] = useState(false);
	const [deleteModal, setDeleteModalShow] = useState(false);

	const handleShowProductModal = () => setProductModal(!showProductModal);
	const handleDeleteModal = () => setDeleteModalShow(true);

	return (
		<>
			<ListGroup.Item className="d-flex justify-content-between gap-3">
				{props.prods ? (
					<>
						<p>Producto : {props.prods.name} </p>
						<p>Descipcion : {props.prods.description} </p>
						<p>Precio : {props.prods.price} </p>
						<p className="ms-4">
							Categoria : {props.prods.category.replace(/_/g, ' ')}
						</p>
					</>
				) : null}

				<Button
					variant="success ms-auto"
					onClick={() => {
						handleShowProductModal();
					}}
				>
					<i className="fas fa-edit"></i>
				</Button>
				<Button
					variant="danger"
					onClick={() => {
						handleDeleteModal();
					}}
				>
					<i className="fas fa-trash"></i>
				</Button>
			</ListGroup.Item>
			<DeleteModal
				deleteModal={deleteModal}
				title="producto"
				route="products"
				id={products._id}
				setDeleteModalShow={setDeleteModalShow}
			></DeleteModal>
			<ProductForm
				showProductModal={showProductModal}
				title="Editar Producto"
				setDeleteModalShow={setDeleteModalShow}
				handleShowProductModal={handleShowProductModal}
				edit={true}
				prods={products}
			></ProductForm>
		</>
	);
}
