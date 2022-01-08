import { toast } from 'react-toastify';
export const errorToastRegister = () => {
	toast.error('Ya existe un usuario con ese mail', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

export const successToastRegister = () => {
	toast.success('Registro exitoso', {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};
