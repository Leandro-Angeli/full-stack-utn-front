import axios from 'axios';
import React from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { postData } from '../api/apiFunctions';
import { successToast, errorToast } from '../toasts/toast';

import loginValidators from '../formValidations/loginValidators';

export default function LoginForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: loginValidators,
		defaultValues: { name: ' ', password: ' ' },
	});
	const submitForm = (data) => {
		axios
			.post(`${process.env.REACT_APP_BACK_END_URI}/users/login`, data)
			.then((res) => {
				if (res.data.msg) {
					successToast(res.data.msg);
				} else {
					errorToast(res.data.error);
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<Modal show={props.showModal}>
			<Modal.Header
				closeButton
				onClick={() => props.setShowModal(!props.showModal)}
			>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(submitForm)}>
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label>Email </Form.Label>
						<Form.Control {...register('email')} type="email" name="email" />
					</Form.Group>
					<Form.Text>
						{errors?.email && (
							<Alert variant="danger">{errors.email.message}</Alert>
						)}
					</Form.Text>

					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							rows={3}
							{...register('password')}
						/>
					</Form.Group>
					<Form.Text>
						{errors?.password && (
							<Alert variant="danger">{errors.password.message}</Alert>
						)}
					</Form.Text>
					<Button
						onClick={() => props.setShowModal(!props.showModal)}
						className="me-3"
					>
						Cerrar
					</Button>
					<Button type="submit">Login</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
