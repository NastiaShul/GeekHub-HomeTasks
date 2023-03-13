import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchSubComments } from "../../store/news-actions";
import { useNewsSelector } from "../../store/news-slice";
import dateConverter from "../../helpers/dateConverter";
import CommentsList from "../CommentList";

import styles from "./Comment.module.scss";

const Comment = ({ item: { by, id, kids, text, time } }) => {
   const date = dateConverter(time);

   const dispatch = useDispatch();
   const {subComments} = useNewsSelector();

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

   const showSubCommentsClass = subCommentsIsVisible
      ? styles.subCommentsVisible
      : styles.subCommentsHidden;

   return (
      <>
         <article className={styles.article}>
            <div className={styles.details}>
               <span>by {by}&nbsp;|&nbsp;</span>
               <span>posted on {date}</span>
            </div>
            {text}
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
      </>
   );
};

export default Comment;
