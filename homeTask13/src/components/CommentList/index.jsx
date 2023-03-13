import React from "react";

import Comment from "../Comment";

import styles from "./CommentList.module.scss";

const CommentsList = ({ comments }) => {
   return (
         <ul className={styles.commentList}>
            {comments.map((item) => (
               <li key={item.id} className={styles.comment}>
                  <Comment item={item} />
               </li>
            ))}
         </ul>
   );
};

export default CommentsList;
