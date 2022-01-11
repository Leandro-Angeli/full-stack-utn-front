import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReRenderContext } from '../context/RenderContext';

import { deleteData } from '../api/apiFunctions';

export default function DeleteModal(props) {
	const handleClose = () => props.setDeleteModalShow(false);

	// console.log(props.id);
	// console.log(props.route);
	const { rend, setRend } = useContext(ReRenderContext);
	const handleDelete = async () => {
		await deleteData(
			`${process.env.REACT_APP_BACK_END_URI}/${props.route}/${props.id}`
		);
		handleClose();
		setRend(!rend);
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
