import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchNews } from "../../store/news-actions";
import Button from "../Button";

import styles from "./Header.module.scss";

const Header = () => {
   const dispatch = useDispatch();

   const updateNews = () => {
      dispatch(fetchNews());
   };

   useEffect(() => {
      let timeout;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(updateNews, 60000);

      return () => {
         timeout && clearTimeout(timeout);
      }
   }, [dispatch]);

   return (
      <header className={styles.header}>
         <h1 className={styles.title}>Hacker News</h1>
         <Button onClick={updateNews} text="Update" role={"link"} />
      </header>
   );
};

export default Header;
