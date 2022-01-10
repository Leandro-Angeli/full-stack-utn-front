import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import FormValidators from '../formValidations/FormValidators';
export default function UserForm(props) {
	console.log(props.user?._id);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: FormValidators,
		defaultValues: {
			name: props.user?.name || ' ',
			last_name: props.user?.last_name || ' ',
			phone: props.user?.phone || ' ',
			email: props.user?.email || ' ',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (data) => {
		if (props.user._id) {
			console.log(
				`${process.env.REACT_APP_BACK_END_URI}/users/${props.user._id}`
			);
			console.log(props.user._id);
			await props.action(
				`${process.env.REACT_APP_BACK_END_URI}/users/${props.user._id}`,
				data
			);
		} else {
			await props.action(`${process.env.REACT_APP_BACK_END_URI}/users`, data);
		}
		setTimeout(4000, window.location.reload());
	};
	return (
		<Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
			<Form.Group className="mb-3">
				<Form.Label>Nombre</Form.Label>
				<Form.Control {...register('name')} type="text" placeholder="nombre" />
				<Form.Text>
					<Form.Text>
						{errors?.name && (
							<Alert variant="danger">{errors.name.message}</Alert>
						)}
					</Form.Text>
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Apellido</Form.Label>
				<Form.Control
					{...register('last_name')}
					type="text"
					placeholder="apellido"
				/>
				<Form.Text>
					<Form.Text>
						{errors?.last_name && (
							<Alert variant="danger">{errors.last_name.message}</Alert>
						)}
					</Form.Text>
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Telefono</Form.Label>
				<Form.Control
					{...register('phone')}
					type="phone"
					placeholder="telefono"
				/>
				<Form.Text>
					<Form.Text>
						{errors?.phone && (
							<Alert variant="danger">{errors.phone.message}</Alert>
						)}
					</Form.Text>
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Email address</Form.Label>
				<Form.Control {...register('email')} type="email" placeholder="email" />
			</Form.Group>

			<Form.Text>
				{errors?.email && (
					<Alert variant="danger">{errors.email.message}</Alert>
				)}
			</Form.Text>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					{...register('password')}
					type="password"
					placeholder="Password"
				/>
			</Form.Group>
			<Form.Text>
				{errors?.password && (
					<Alert variant="danger">{errors.password.message}</Alert>
				)}
			</Form.Text>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Repetir Password</Form.Label>
				<Form.Control
					{...register('confirmPassword')}
					type="password"
					placeholder="Password"
				/>
			</Form.Group>
			<Form.Text>
				<Form.Text>
					{errors?.confirmPassword && (
						<Alert variant="danger">{errors.confirmPassword.message}</Alert>
					)}
				</Form.Text>
			</Form.Text>

			<Button
				variant=""
				type="submit"
				style={{ backgroundColor: 'var(--my-green)', color: 'white' }}
			>
				Submit
			</Button>
		</Form>
	);
}
