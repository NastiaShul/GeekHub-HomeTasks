import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getPost } from "../../../api/request";
import { User } from "../User";
import { NotFound } from "../NotFound";

export const Post = () => {
   const [post, setPost] = useState([]);
   const { id } = useParams();
   const [searchParams] = useSearchParams();
   const postId = searchParams.get("postId");

   useEffect(() => {
      getPost({ id, postId })
         .then((response) => response.json())
         .then((json) => setPost(json[0]));
   }, [postId]);

   return (
      <div className="posts-block">
         {post ? (
            <>
               <User />
               <h5>
                  <span className="helper">Title:</span>&nbsp;
                  <span className="post-title">{post.title}</span>
               </h5>
               <h6>
                  <span className="helper">Status:</span>&nbsp;
                  <span>{post.completed ? "completed" : "uncompleted"}</span>
               </h6>
            </>
         ) : (
            <NotFound />
         )}
      </div>
   );
};
