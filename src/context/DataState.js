import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import GenerateContext from './generateContext';
export const DataProvider = createContext();
export default function DataState(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			axios
				.get(process.env.REACT_APP_BACK_END_URI + '/users')
				.then((res) => {
					setData(res);
				})
				.catch((err) => console.log(err));
		};
		getData();
	}, []);

	return (
		<DataProvider.Provider value={data}>{props.children}</DataProvider.Provider>
	);
}
