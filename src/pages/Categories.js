import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/apiFunctions';
import ProductCard from '../components/ProductCard';
import './categories.css';

export default function Categories() {
	const params = useParams();
	// console.log(params);
	const [products, setProducts] = useState();
	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/categories/product/search/${params.category}`,
			setProducts
		);
	}, [params.category]);

	// console.log(products);
	return (
		<div className="container my-5">
			<h1 className="text-uppercase" style={{ color: 'var(--my-green)' }}>
				{params.category.replace(/_/g, ' ')}
			</h1>
			<div className="container-product-cards">
				{products
					? products.map((p) => {
							return <ProductCard key={p._id} product={p}></ProductCard>;
					  })
					: null}
			</div>
		</div>
	);
}
