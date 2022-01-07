import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoriesComponent from '../components/CategoriesComponent';
import { fetchData } from '../api/apiFunctions';
export default function Home() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchData(
			`${process.env.REACT_APP_BACK_END_URI}/products/categories`,
			setCategories
		);
	}, []);

	return (
		<section className="container my-5">
			<h1 className="text-uppercase" style={{ color: 'var(--my-green)' }}>
				Categorias
			</h1>
			{categories
				? categories.map((e) => {
						return (
							<CategoriesComponent
								key={e}
								title={e.replace(/_/g, ' ')}
							></CategoriesComponent>
						);
				  })
				: null}
		</section>
	);
}
