import { Link, useParams} from "react-router-dom";

import { User } from "../User/User";
import { useEffect, useState } from "react";

import "./Posts.css"

export const Posts = () => {
	const [posts, setPosts] = useState([]);
	const { id } = useParams();

	console.log('id', id);


	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, [id]);

	console.log(posts);
	return (
		<div className="posts-block">
			<User/>
			{posts.map(post =>
				<ul key={post.id}>
					<li>
						<h5>
							<span className="helper">Title: </span>
							<Link to={`/users/${id}/todos?postId=${post.id}`}>
								<span className="post-title">{post.title}</span>
							</Link>
						</h5>
						<h9>
							<span className="helper">Status: </span> 
							<span>{post.complited ? "complited" : "uncomplited"}</span>
						</h9>
					</li>
				</ul>
			)}
		</div>

	)
};