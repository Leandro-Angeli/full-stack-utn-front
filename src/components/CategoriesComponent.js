import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { fetchData } from '../api/apiFunctions';
import ProductCard from './ProductCard';

export default function CategoryContainer(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchData(`${process.env.REACT_APP_BACK_END_URI}/products/`, setProducts);
	}, []);
	let rows = [];
	for (let i = 1; i <= Math.ceil(products.length / 3); i++) {
		rows.push(i);
	}
	let cols = [];
	for (let i = 0; i <= Math.ceil(products.length / 3); i++) {
		cols.push(products.slice(i * 3, i * 3 + 3));
	}

	console.log(rows);
	let col1 = cols[1];
	if (col1) {
		console.log(col1[1].name);
	}

	return (
		<>
			<h2 className="text-uppercase" style={{ color: 'var(--my-green)' }}>
				{props.title}
			</h2>

			{rows.map((e, i) => {
				return (
					<Row key={i}>
						{cols
							? cols[e].map((p) => {
									return (
										<>
											{p.category === props.title && (
												<ProductCard key={p._id} product={p}></ProductCard>
											)}
										</>
									);
							  })
							: null}
					</Row>
				);
			})}
		</>
	);
}
