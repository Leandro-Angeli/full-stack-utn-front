import React, { useState } from 'react';

export const ReRenderContext = React.createContext();
const ContextRender = ({ children }) => {
	const [rend, setRend] = useState(false);
	return (
		<ReRenderContext.Provider value={{ rend, setRend }}>
			{children}{' '}
		</ReRenderContext.Provider>
	);
};
export default ContextRender;
