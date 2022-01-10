import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function LoginForm() {
	return (
		<Modal.Dialog>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form></Form>
			</Modal.Body>
		</Modal.Dialog>
	);
}
