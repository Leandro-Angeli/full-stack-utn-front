import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { fetchData, patchData, postData } from '../api/apiFunctions';
import ProductFormValidator from '../formValidations/ProductFormValidator';
import axios from 'axios';
export default function ProductForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: ProductFormValidator,
		defaultValues: {
			name: props.prods?.name,
			description: props.prods?.description,
			price: props.prods?.description,
			category: props.prods?.description,
		},
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
	console.log(props.edit);
	const onSubmit = async (data) => {
		if (props.edit === false) {
			await postData(`${process.env.REACT_APP_BACK_END_URI}/products/`, data);
		} else if (props.edit === true) {
			await patchData(
				`${process.env.REACT_APP_BACK_END_URI}/products/patch/${props.prods._id}`,
				data
			);
		}
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
							{errors?.name && (
								<Alert variant="danger">{errors.name.message}</Alert>
							)}
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
						<Form.Text className="text-muted">
							{errors?.description && (
								<Alert variant="danger">{errors.description.message}</Alert>
							)}
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" placeholder="precio">
						<Form.Label>Precio</Form.Label>
						<Form.Control
							type="number"
							step="any"
							placeholder="precio"
							{...register('price')}
						/>
						<Form.Text>
							{errors?.price && (
								<Alert variant="danger">{errors.price.message}</Alert>
							)}
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Select
							aria-label=" select "
							defaultValue={props.prods?.category}
							{...register('category')}
						>
							<option disabled value={'0'}>
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
