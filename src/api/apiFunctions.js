import axios from 'axios';
import { errorToast, successToast } from '../toasts/toast';

export const fetchData = async (endpoint, resState) => {
	// try {
	// 	const res = await axios.get(endpoint);

	// 	resState(res.data);
	// } catch (err) {
	// 	console.log(err);
	// }
	axios
		.get(endpoint)
		.then((data) => resState(data.data))
		.catch((err) => console.log(err));
};

export const postData = async (endpoint, req) => {
	try {
		const result = await axios.post(endpoint, req);

		successToast(result.data.msg);
	} catch (err) {
		errorToast(err.response.data.msg);
	}
};
export const deleteData = async (endpoint) => {
	try {
		const result = await axios.delete(endpoint);
		console.log(result);
		if (result.data.error) {
			errorToast(result.data.error);
		} else {
			successToast(result.data.msg);
		}
	} catch (err) {
		console.log(err);
	}
};
export const patchData = async (endpoint, req) => {
	try {
		const result = await axios.patch(endpoint, req);

		successToast(result.data.msg);
		// console.log(result);
	} catch (err) {
		errorToast(err.response.data.msg);
		// console.log(err);
	}
};
