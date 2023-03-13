import React from "react";
import { Link } from "react-router-dom";

import CardContent from "../CardContent";

import styles from "./NewsCard.module.scss";

const NewsCard = (props) => {
   return (
      <li className={styles.card}>
         <Link to={`/article/${props.id}`}>
            <article>
               <CardContent {...props} />
            </article>
         </Link>
      </li>
   );
};

export default NewsCard;
