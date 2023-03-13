import React from "react";

import dateConverter from "../../helpers/dateConverter";

import styles from "./CardContent.module.scss";

const CardContent = ({ title, score, by, time, descendants }) => {
   const date = dateConverter(time);
   const cssClasses = `${styles.details} ${styles.column}`;

   return (
      <>
         <h2>{title}</h2>
         {by && time && (
            <div className={cssClasses}>
               <span>by {by}&nbsp;</span>
               <time>posted on {date}</time>
            </div>
         )}
         {score && descendants >= 0 && (
            <div className={styles.details}>
               {<span>Rating: {score}&nbsp;|&nbsp;</span>}
               {descendants ? (
                  <span>Comments: {descendants}</span>
               ) : (
                  <span>No comments</span>
               )}
            </div>
         )}
      </>
   );
};

export default CardContent;
