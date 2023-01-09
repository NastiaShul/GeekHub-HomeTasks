import { Route, Routes, useRoutes } from 'react-router-dom';
import { Layout } from "./components/fragments/Layout/Layout";
import { User } from './components/fragments/User/User';
import { Posts } from './components/fragments/Posts/Posts';
import { Post } from './components/fragments/Post/Post';
import { AllPosts } from './components/fragments/AllPosts/AllPosts';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route path="/" element={<AllPosts />} />
					<Route path="/users/:id" exact element={<User />}/>
					<Route path="/users/:id/" element={<Posts />} />
					<Route path="/users/:id/todos" element={<Post />}/>
					<Route path="*" element={<h1>Page not found</h1>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
