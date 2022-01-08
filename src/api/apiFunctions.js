import axios from 'axios';
import { errorToastRegister, successToastRegister } from '../toasts/toast';

export const fetchData = async (endpoint, resState) => {
	try {
		const res = await axios.get(endpoint);

		resState(res.data);
	} catch (err) {
		console.log(err);
	}
};

export const postData = async (endpoint, req) => {
	try {
		const request = await axios.post(endpoint, req);
		successToastRegister();
	} catch (err) {
		// console.log(err);
		errorToastRegister();
	}
};
