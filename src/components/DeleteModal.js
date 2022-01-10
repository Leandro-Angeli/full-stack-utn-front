import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import { deleteData } from '../api/apiFunctions';

export default function DeleteModal(props) {
	const handleClose = () => props.setDeleteModalShow(false);

	// console.log(props.id);
	// console.log(props.route);
	const handleDelete = async () => {
		await deleteData(
			`${process.env.REACT_APP_BACK_END_URI}/${props.route}/${props.id}`
		);
		handleClose();
		setTimeout(window.location.reload(), 4000);
	};
	// console.log(`delete modal ${props.users._id}`);
	return (
		<Modal show={props.deleteModal}>
			<Modal.Header closeButton onClick={() => handleClose()}>
				<Modal.Title>Confirmar</Modal.Title>
			</Modal.Header>
			<Modal.Body>Borrar {props.title} ?</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose()}>
					Cerrar
				</Button>
				<Button variant="danger" onClick={() => handleDelete()}>
					Borrar
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
