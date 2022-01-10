import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { fetchData } from '../api/apiFunctions';
import ProductFormValidator from '../formValidations/ProductFormValidator';

export default function ProductForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: ProductFormValidator,
	});
	const [categories, setCategories] = useState();
	// console.log('edit', props.edit);
	// console.log('add', props.prods);
	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/categories`,
			setCategories
		);
	}, []);
	// console.log(categories);
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<Modal show={props.showProductModal}>
			<Modal.Header closeButton onClick={() => props.handleShowProductModal()}>
				<Modal.Title
					className="text-uppercase"
					style={{ color: 'var(--my-green)' }}
				>
					{props.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control
							{...register('name')}
							type="name"
							placeholder="nombre"
						/>
						<Form.Text className="text-muted">
							<Alert variant="danger">alert</Alert>
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" placeholder="descripcion">
						<Form.Label>Descripcion</Form.Label>
						<Form.Control
							type="text"
							as={'textarea'}
							placeholder="Descripcion"
							{...register('description')}
						/>
					</Form.Group>
					<Form.Group className="mb-3" placeholder="precio">
						<Form.Label>Precio</Form.Label>
						<Form.Control
							type="text"
							placeholder="precio"
							{...register('price')}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Select
							aria-label=" select "
							// defaultValue={0}
							{...register('category')}
						>
							<option disabled value="0">
								CATEGORIA
							</option>
							{categories
								? categories.map((c, i) => (
										<option key={i} value={c}>
											{c.replace(/_/g, ' ')}{' '}
										</option>
								  ))
								: null}
						</Form.Select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Imagen</Form.Label>
						<Form.Control {...register('img')} type="file" />
					</Form.Group>

					<Button
						type="submit"
						variant=""
						style={{ backgroundColor: 'var(--my-green)', color: 'white' }}
					>
						{props.title.split(' ')[0]}
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
