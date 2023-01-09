import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Radio } from '../../helper/Radio';

import "./AllPosts.css";

export const AllPosts = () => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [status, setStatus] = useState('all');
	const [order, setOrder] = useState();

	const [searchParams] = useSearchParams();
	const statusPost = searchParams.get('statusPost');
	const orderPosts = searchParams.get('orderPosts');

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos`)
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, []);

	useEffect(() => {
		statusPost && setStatus(statusPost);
	}, [statusPost]);

	useEffect(() => {
		orderPosts && setOrder(orderPosts);
	}, [orderPosts]);

	const handleChangeStatus = ({ target: { value } }) => {
		navigate({
			pathname: '/',
			search: `?statusPost=${value}&orderPosts=${order}`
		})
	}

	const handleChangeOrder = ({ target: { value } }) => {
		navigate({
			pathname: '/',
			search: `?orderPosts=${value}&statusPost=${status}`
		})
	}

	return (
		<section className="all-posts">
			<h2 className="title">Posts</h2>

			<ul className="sort-posts">
				<li><h5>Set status</h5>
					<Radio
						type="radio"
						name="status"
						defaultChecked={statusPost || status}
						options={[
							{ value: 'all', label: 'All' },
							{ value: 'completed', label: 'Completed' },
							{ value: 'uncompleted', label: 'Uncompleted' }
						]}
						onChange={handleChangeStatus}
					/>
				</li>

				<li><h5>Set order</h5>
					<Radio
						type="radio"
						name="order"
						defaultChecked={orderPosts || order}
						options={[
							{ value: 'a-z', label: 'A-Z' },
							{ value: 'z-a', label: 'Z-A' },
						]}
						onChange={handleChangeOrder}
					/>
				</li>
			</ul>

			<ul className="all-posts">{posts.filter(post => {
					if (status === 'all') return post;
					if (status === 'completed' && post.completed) return post;
					if (status === 'uncompleted' && !post.completed) return post;
				}).sort((postA, postB) => {
					if (order === 'a-z') {
						return postA.title.localeCompare(postB.title);
					}
					if (order === 'z-a') {
						return postB.title.localeCompare(postA.title);
					}
					return postA;
				}).map(post =>
					<li key={post.id}>
						<h5><span className="helper">Title</span> <span className="post-title">{post.title}</span></h5>
						<h6><span className="helper">status:</span> {post.completed ? 'Completed' : 'Uncompleted'}</h6>
					</li>
				)}
			</ul>
		</section>
	)
};