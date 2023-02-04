import React from "react";
import { useSelector } from "react-redux";

import styles from "./NewsList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import sortByDate from "../../helpers/sortByDate";

const NewsList = () => {
   const storiesAreLoading = useSelector(
      (state) => state.news.storiesAreLoading
   );
   const stories = useSelector((state) => state.news.stories);
   const cards = [...stories].sort(sortByDate);


   return (
      <>
         {storiesAreLoading && <Preloader />}
         <>
            <ul className={styles.cardList}>
               {cards.map((story) => (
                  <NewsCard key={story.id} {...story} />
               ))}
            </ul>
         </>
      </>
   );
};

export default NewsList;