import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryContainer from '../components/CategoryContainer';
import GenerateContext from '../context/GenerateContext';

export default function Home() {
	// const { categories } = GenerateContext();
	// const { data } = GenerateContext();
	const [data, setData] = useState([]);
	console.log(data);
	useEffect(() => {
		const getData = () => {
			axios
				.get(process.env.REACT_APP_BACK_END_URI + '/products/categories')
				.then((res) => {
					setData(res);
					console.log(res);
				})
				.catch((err) => console.log(err));
		};
		getData();
	}, []);
	console.log(data.data);
	return (
		<section className="container">
			{/* {data[1].data.map((e) => (
				<p>{e}</p>
			))} */}
			{data.data ? data.data.map((e) => <p>{e.replace(/_/g, ' ')}</p>) : null}
		</section>
	);
}
