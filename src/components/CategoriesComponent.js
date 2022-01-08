import React, { useEffect, useState } from 'react';

import { fetchData } from '../api/apiFunctions';
import ProductCard from './ProductCard';
import './categoriesComponents.css';
export default function CategoriesComponents(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchData(`${process.env.REACT_APP_BACK_END_URI}/products/`, setProducts);
	}, []);
	// let count = 0;
	// let filteredArray = products.map((p) => {
	// 	if (p.category === props.title.replace(/_/g, ' ')) {
	// 		count = count + 1;
	// 		return count;
	// 	}
	// });
	// // console.log(products);
	// console.log(filteredArray.length);
	// // console.log(count);
	// let rows = [];
	// for (let i = 0; i <= Math.ceil(filteredArray.length / 3); i++) {
	// 	rows.push(i);
	// }
	// let cols = [];
	// for (let i = 0; i <= Math.ceil(filteredArray.length / 3); i++) {
	// 	cols.push(products.slice(i * 3, i * 3 + 3));
	// }
	// console.log(rows);
	return (
		<>
			<h2
				className="text-uppercase my-5"
				key={props.i}
				style={{ color: 'var(--my-green)' }}
			>
				{props.title}
			</h2>
			<div className="products-container my-5" key={props.i}>
				{products
					? products.map((p, i) => {
							return (
								<>
									{p.category.replace(/_/g, ' ') ===
										props.title.replace(/_/g, ' ') && (
										<ProductCard key={p._id} product={p}></ProductCard>
									)}
								</>
							);
					  })
					: null}
			</div>
		</>
	);
}
