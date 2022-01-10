import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import EditUserModal from './EditUserModal';

export default function DashBoardItem(props) {
	// console.log(props.users);
	const users = { ...props.users };

	const [showModal, setShow] = useState(false);
	const [deleteModal, setDeleteModalShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleDeleteModal = () => setDeleteModalShow(true);

	return (
		<>
			<ListGroup.Item
				key={props.users._id}
				className="d-flex justify-content-evenly gap-3"
			>
				<p className="fas fa-user align-self-center"> </p>

				<p>Nombre:{props.users.name}</p>
				<p>Apellido:{props.users.last_name}</p>
				<p>E-mail : {props.users.email}</p>
				<Button
					variant="success"
					onClick={() => {
						handleShow();
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
			<EditUserModal
				showModal={showModal}
				users={users}
				setShow={setShow}
			></EditUserModal>

			<DeleteModal
				deleteModal={deleteModal}
				title="usuario"
				route="users"
				id={users._id}
				setDeleteModalShow={setDeleteModalShow}
			></DeleteModal>
		</>
	);
}
