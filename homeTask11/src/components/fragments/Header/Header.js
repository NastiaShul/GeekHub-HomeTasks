import { useNavigate } from "react-router-dom";

import "./Header.css"

export const Header = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const goForward = () => navigate(1);



	return (
		<header className="header">
			<a onClick={goBack}>🡄</a>
			<h2>To Do list</h2>
			<a onClick={goForward}>🡆</a>
		</header>
	)

}