import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import GenerateContext from './generateContext';
export const DataProvider = createContext();
export default function DataState(props) {
	const [data, setData] = useState([]);
	//SINGLE REQUEST
	// useEffect(() => {
	// 	const getData = () => {
	// 		axios
	// 			.get(process.env.REACT_APP_BACK_END_URI + '/users')
	// 			.then((res) => {
	// 				setData(res);
	// 				console.log(res);
	// 			})
	// 			.catch((err) => console.log(err));
	// 	};
	// 	getData();
	// }, []);
	//SINGLE REQUEST

	// MULTIPLE REQUESTS

	const getUsers = axios.get(`${process.env.REACT_APP_BACK_END_URI}/users`);
	const getCategories = axios.get(
		`${process.env.REACT_APP_BACK_END_URI}/products/categories`
	);
	const getProducts = axios.get(
		`${process.env.REACT_APP_BACK_END_URI}/products/`
	);
	Promise.all([getUsers, getCategories, getProducts])
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
	// MULTIPLE REQUESTS

	return (
		<DataProvider.Provider value={data}>{props.children}</DataProvider.Provider>
	);
}
