export const handleToken = (token) => {
	window.localStorage.setItem('jwt', `Bearer ${token}`);
};

export const deleteToken = () => {
	window.localStorage.removeItem('jwt');
};
