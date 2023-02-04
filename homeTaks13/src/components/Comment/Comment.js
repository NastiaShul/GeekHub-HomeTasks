import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Comment.css";
import { fetchSubComments } from "../../store/news-actions";
import CommentsList from "../../components/CommentList/CommentList";
import dateConverter from "../../helpers/dateConverter";

const Comment = ({ item }) => {
   const { by, id, kids, text, time, dead, deleted } = item;
   const date = dateConverter(time);

   const dispatch = useDispatch();
   const subComments = useSelector((state) => state.news.subComments);

   const [subCommentsIsVisible, setSubCommentsIsVisible] = useState(false);

   useEffect(() => {
      if (kids) {
         dispatch(fetchSubComments(kids));
      }
   }, [dispatch, kids]);

   const showSubComments = () => {
      setSubCommentsIsVisible(!subCommentsIsVisible);
   };

   const filtredSubComments = subComments.filter((item) => item.parent === id);

   const commentDeadContent = dead ? (
      <p className={styles.noComment}>Comment is dead</p>
   ) : null;

   const commentDeletedContent = deleted ? (
      <p className={styles.noComment}>Comment is deleted</p>
   ) : null;

   const showSubCommentsClass = subCommentsIsVisible
      ? styles.subCommentsVisible
      : styles.subCommentsHidden;

   return (
      <React.Fragment>
         <article className={styles.article}>
            <div className={styles.details}>
               <span>by {by}&nbsp;|&nbsp;</span>
               <time>posted on {date}</time>
            </div>

            {text }

            {commentDeadContent}

            {commentDeletedContent}

            {kids && (
               <button className={styles.button} onClick={showSubComments}>
                  Show More... {subCommentsIsVisible ? "[-]" : "[+]"}
               </button>
            )}
         </article>

         {kids && (
            <div className={showSubCommentsClass}>
               <CommentsList comments={filtredSubComments} />
            </div>
         )}
      </React.Fragment>
   );
};



export default Comment;
