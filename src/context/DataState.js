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
	// SINGLE REQUEST

	// MULTIPLE REQUESTS
	// useEffect(() => {
	// 	const getUsers = axios.get(`${process.env.REACT_APP_BACK_END_URI}/users`);
	// 	const getCategories = axios.get(
	// 		`${process.env.REACT_APP_BACK_END_URI}/products/categories`
	// 	);
	// 	const getProducts = axios.get(
	// 		`${process.env.REACT_APP_BACK_END_URI}/products/`
	// 	);
	// 	Promise.all([getUsers, getCategories, getProducts])
	// 		.then((res) => setData(res))
	// 		.catch((err) => console.log(err));
	// }, []);
	// console.log(data[0]);

	// MULTIPLE REQUESTS

	//MULTIPLE REQUESTS ASYNC AWAIT
	// const fetchData = async () => {
	// 	const getUsers = axios.get(`${process.env.REACT_APP_BACK_END_URI}/users`);
	// 	const getCategories = axios.get(
	// 		`${process.env.REACT_APP_BACK_END_URI}/products/categories`
	// 	);
	// 	const getProducts = axios.get(
	// 		`${process.env.REACT_APP_BACK_END_URI}/products/`
	// 	);
	// 	try {
	// 		const response = await Promise.all([
	// 			getUsers,
	// 			getCategories,
	// 			getProducts,
	// 		]);
	// 		setData(response);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	// console.log(data);
	//MULTIPLE REQUESTS ASYNC AWAIT

	return (
		<DataProvider.Provider value={{ data }}>
			{props.children}
		</DataProvider.Provider>
	);
}
