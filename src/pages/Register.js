import React from 'react';
// import Form from 'react-bootstrap/Form';
import { Card, Container } from 'react-bootstrap';

import { postData } from '../api/apiFunctions';
import UserForm from '../components/UserForm';

export default function Register() {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm({ resolver: FormValidators });

	// const onSubmit = (data) => {
	// 	postData(`${process.env.REACT_APP_BACK_END_URI}/users`, data);
	// };

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
						<UserForm action={postData}></UserForm>
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
