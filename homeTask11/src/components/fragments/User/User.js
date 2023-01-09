import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./User.css"

export const User = () => {
	const [user, setUser] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUser(data));
	}, [id]);

	return (
		<>
			<h2 className="title">{user.name}</h2>
		</>
	)
}