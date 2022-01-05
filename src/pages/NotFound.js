import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<header
			className="container d-flex w-100 justify-content-center align-items-center position-relative"
			style={{ height: '65vw' }}
		>
			<h1>
				Oops! Pagina no Encontrada
				<br></br>
				😢😢
			</h1>
			<button
				style={{ cursor: 'pointer', color: 'inherit' }}
				className="text-uppercase position-absolute bottom-0 end-0 mb-3 "
				onClick={() => navigate(-1)}
			>
				Volver Atras
			</button>
		</header>
	);
}
