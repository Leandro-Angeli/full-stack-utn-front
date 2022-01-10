import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export default function AddProductFrom(props) {
	const { register, handleSubmit } = useForm();

	return (
		<Modal show={props.showProductModal}>
			<Modal.Header closeButton onClick={() => props.handleShowProductModal()}>
				<Modal.Title className="Agregar Producto">{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form></Form>{' '}
			</Modal.Body>
		</Modal>
	);
}
