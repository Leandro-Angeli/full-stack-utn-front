import { useContext } from 'react';
import { DataProvider } from './DataState';

const GenerateContext = () => {
	return useContext(DataProvider);
};
export default GenerateContext;
