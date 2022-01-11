import React, { useState } from 'react';
export const TokenContext = React.createContext();
const Context = ({ children }) => {
	const [token, setToken] = useState(!!window.localStorage.getItem('jwt'));
	return (
		<TokenContext.Provider value={{ token, setToken }}>
			{children}
		</TokenContext.Provider>
	);
};
export default Context;
