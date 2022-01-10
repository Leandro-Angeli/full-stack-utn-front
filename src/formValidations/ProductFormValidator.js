import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
	name: yup.string().required('campo requerido'),

	description: yup.string().required('campo requerido'),
	price: yup.string().required('campo requerido'),
	category: yup.string().required('campo requerido'),
	// img: yup.string().required('campo requerido'),
});

export default yupResolver(schema);
