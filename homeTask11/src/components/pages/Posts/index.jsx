import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getPosts } from "../../../api/request";
import { User } from "../../pages/User";

import "./Posts.css"
import { NotFound } from "../NotFound";

export const Posts = () => {
   const [posts, setPosts] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      getPosts({ id })
         .then((response) => response.json())
         .then((json) => setPosts(json));
   }, [id]);

   return (
      <div className="posts-block">
         <User />
         {posts.map(post =>
            <ul key={post.id}>
               <li>
                  <h5>
                     <span className="helper">Title: </span>
                     <Link to={`/users/${id}/todos?postId=${post.id}`}>
                        <span className="post-title">{post.title}</span>
                     </Link>
                  </h5>
                  <h6>
                     <span className="helper">Status: </span>
                     <span>{post.complited ? "complited" : "uncomplited"}</span>
                  </h6>
               </li>
            </ul>
         )}
      </div>
   )
};