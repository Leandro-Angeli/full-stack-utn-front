import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
	name: yup.string().required('campo requerido'),

	description: yup.string().required('campo requerido'),
	price: yup
		.number()
		.typeError('solo numeros')
		.positive('solo numeros positivos')
		.required('campo requerido'),
	category: yup
		.string()
		.min(2)
		.typeError('campo requerido')
		.required('campo requerido'),
});

export default yupResolver(schema);
