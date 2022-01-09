import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function EditUserModal(props) {
	const users = { ...props.users };
	const handleClose = () => props.setShow(false);
	return (
		<Modal show={props.showModal} onClick={() => handleClose()}>
			<Modal.Header closeButton>
				<Modal.Title>Editar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Button variant="secondary" onClick={() => handleClose()}>
						Cerrar
					</Button>
					<Button variant="primary">Editar</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
