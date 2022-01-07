import axios from 'axios';
export const fetchData = async (endpoint, resState) => {
	try {
		const res = await axios.get(endpoint);

		resState(res.data);
	} catch (err) {
		console.log(err);
	}
};
