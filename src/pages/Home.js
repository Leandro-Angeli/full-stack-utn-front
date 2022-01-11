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
		// axios
		// 	.get(`${process.env.REACT_APP_BACK_END_URI}/products/categories`)
		// 	.then((res) => setCategories(res.data))
		// 	.catch((err) => console.log(err));
	}, []);
	// console.log(categories);

	return (
		<section className="container my-5">
			<h1 className="text-uppercase my-5" style={{ color: 'var(--my-green)' }}>
				Categorias
			</h1>
			{/* {categories
				? categories.map((e, i) => {
						return (
							<CategoriesComponent
								key={i}
								title={e.replace(/_/g, ' ')}
							></CategoriesComponent>
						);
				  })
				: null} */}
			{categories
				? categories.map((e, i) => {
						return (
							<CategoriesComponent
								key={i}
								title={e.replace(/_/g, ' ')}
							></CategoriesComponent>
						);
				  })
				: null}
		</section>
	);
}
