import React from "react";

import styles from "./CommentList.css";
import Comment from "../Comment/Comment";

const CommentsList = ({ comments }) => {
   return (
      <React.Fragment>
         <ul className={styles.commentList}>
            {comments.map((item) => (
               <li key={item.id} className={styles.comment}>
                  <Comment item={item} />
               </li>
            ))}
         </ul>
      </React.Fragment>
   );
};


export default CommentsList;
