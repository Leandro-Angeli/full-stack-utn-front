import React from 'react';
import { Modal } from 'react-bootstrap';
import { patchData } from '../api/apiFunctions';
import UserForm from './UserForm';

export default function EditUserModal(props) {
	const users = { ...props.users };
	const handleClose = () => props.setShow(false);
	return (
		<Modal show={props.showModal}>
			<Modal.Header closeButton onClick={() => handleClose()}>
				<Modal.Title>Editar Usuario</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<UserForm user={users} action={patchData}></UserForm>
			</Modal.Body>
			<Modal.Footer></Modal.Footer>
		</Modal>
	);
}
