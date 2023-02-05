import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Comment.module.scss";
import { fetchSubComments } from "../../store/news-actions";
import CommentsList from "../../components/CommentList/CommentsList";
import dateConverter from "../../helpers/dateConverter";

const Comment = ({ item }) => {
   const { by, id, kids, text, time} = item;
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
