import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { User } from "../User/User";


export const Post = () => {
	const [post, setPost] = useState([]);
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const postId = searchParams.get('postId');

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos?id=${postId}`)
			.then((response) => response.json())
			.then((json) => setPost(json[0]));
	}, [postId]);


	console.log('post', post)
	return (
		<div className="posts-block">
			<User/>
            <h5><span className="helper">Title:</span> <span className="post-title">{post.title}</span></h5>
			<h6><span className="helper">Status:</span> <span>{post.complited ? "complited" : "uncomplited"}</span></h6>
		</div>

	)
};