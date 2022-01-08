import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
	name: yup.string().required('campo requerido'),
	last_name: yup.string().required('campo requerido'),
	email: yup
		.string()
		.email('debe ser un email valido')
		.required('campo requerido'),
	phone: yup.string().required('campo requerido'),
	password: yup
		.string()
		.required('campo requerido')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
			'el password debe contener al menos una mayuscula al menos una minuscula y al menos un numero , minimo 6 caracteres'
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'las contraseñas deben ser iguales')
		.required('confirmacion de la contraseña obligatorio'),
});

export default yupResolver(schema);
