import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/apiFunctions';

import ProductCard from '../components/ProductCard';

export default function ProductPage() {
	const param = useParams();
	const [product, setProduct] = useState();
	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/product/${param._id}`,
			setProduct
		);
	}, [param._id]);
	console.log(product);
	return (
		<section className="container my-5">
			<h1 className="text-uppercase my-5" style={{ color: 'var(--my-green)' }}>
				{product ? product.name : null}
			</h1>
			<Row>
				<Col xs={{ span: 12, order: 'last' }} md={6}>
					{product ? <ProductCard product={product}></ProductCard> : null}
				</Col>
				<Col
					md={{ span: 6, order: 'last' }}
					xs={{ span: 12, order: 1 }}
					className="d-flex flex-column "
				>
					<h3 style={{ color: 'var(--my-green)' }}>Market App </h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
						maxime nihil, nulla soluta quia quas. Eveniet obcaecati
						necessitatibus dicta autem nemo blanditiis vitae. Magnam aspernatur
						dolor repellat distinctio nulla pariatur omnis blanditiis quam id,
						fugiat quidem, quae veniam architecto explicabo vitae cupiditate
						dolorum doloremque culpa animi? Veniam quia doloremque autem dolores
						in molestiae, nam aliquam mollitia, unde suscipit voluptatibus
						error.
					</p>
				</Col>
			</Row>
		</section>
	);
}
