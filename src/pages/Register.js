import React from 'react';
import Form from 'react-bootstrap/Form';
import { Alert, Button, Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { postData } from '../api/apiFunctions';
import FormValidators from '../formValidations/FormValidators';
import { toast } from 'react-toastify';
export default function Register() {
	let status;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: FormValidators });
	const fireToast = () => {
		toast.error('🦄 Wow so easy!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const onSubmit = async (data) => {
		try {
			await postData(
				`${process.env.REACT_APP_BACK_END_URI}/users`,
				data,
				status
			);
			console.log('ok');
		} catch (err) {
			console.log('error');
		}
	};
	console.log(status);
	return (
		<Container className=" m-5 p-2">
			<Card>
				<Card.Body>
					<Card.Title
						style={{ color: 'var(--my-green)' }}
						className="text-uppercase"
					>
						registrarse
					</Card.Title>
					<Card.Text as={'div'}>
						<Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
							<Form.Group className="mb-3">
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									{...register('name')}
									type="text"
									placeholder="nombre"
								/>
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
								<Form.Control
									{...register('email')}
									type="email"
									placeholder="email"
								/>
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
										<Alert variant="danger">
											{errors.confirmPassword.message}
										</Alert>
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
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
