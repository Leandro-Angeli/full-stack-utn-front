import axios from 'axios';
import React, { useEffect } from 'react';
import GenerateContext from '../context/GenerateContext';

export default function Home() {
	const { data } = GenerateContext();
	console.log(data);
	// useEffect(() => {
	// 	const getData = () => {
	// 		axios
	// 			.get(process.env.REACT_APP_BACK_END_URI + '/users')
	// 			.then((res) => {
	// 				console.log(res);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	};
	// 	getData();
	// }, []);

	return <div>Home</div>;
}
