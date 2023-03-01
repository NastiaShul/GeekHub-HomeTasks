import { Route, Routes } from 'react-router-dom';
import { Layout, User, Posts, Post, AllPosts, NotFound } from './components/pages';


import './App.css';

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path="/" element={<Layout />} >
               <Route path="/" element={<AllPosts />} />
               <Route path="/users/:id" exact element={<User />} />
               <Route path="/users/:id/" element={<Posts />} />
               <Route path="/users/:id/todos" element={<Post />} />
               <Route path="*" element={<NotFound/>} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
