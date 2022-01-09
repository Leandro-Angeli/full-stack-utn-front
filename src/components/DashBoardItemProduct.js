import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import DeleteModal from './DeleteModal';

export default function DashBoardItemProduct(props) {
	// console.log(props);
	const products = { ...props.prods };

	const [showModal, setShow] = useState(false);
	const [deleteModal, setDeleteModalShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleDeleteModal = () => setDeleteModalShow(true);
	return (
		<>
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
		</>
	);
}
