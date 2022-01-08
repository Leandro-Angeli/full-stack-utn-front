import axios from 'axios';
export const fetchData = async (endpoint, resState) => {
	try {
		const res = await axios.get(endpoint);

		resState(res.data);
	} catch (err) {
		console.log(err);
	}
};

export const postData = async (endpoint, req, status) => {
	try {
		const request = await axios.post(endpoint, req);
		console.log(request);
		status = true;
	} catch (err) {
		console.log(err);

		status = false;
	}
	return status;
};
